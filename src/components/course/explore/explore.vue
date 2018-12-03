<template>
    <div id="explore" class="es-wrap">
        <div class="es-banner">
            <div class="container">
                <div class="title">
                    <i class="es-icon es-icon-viewcomfy"></i> 课程列表
                </div>
                <div class="more">
                </div>
            </div>
        </div>
        <div id="expoloremask" class="html-mask"></div>
        <div id="content-container" class="container">
            <div class="tabs-wrapper">
                <div class="tabs-group">
                    <div class="title">所有分类:</div>
                    <ul class="content clearfix" id="exploreall">
                        <li v-for="(item ,artclass) in articleClass" :key="artclass" @click="artcileClasscli(artclass)">
                            <a class="artclassNav" :class="{active:istrue==artclass}" @click="istrue=artclass">{{item.typeName}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-if="(isfree)">
                <div class="es-filter">
                    <ul class="nav nav-sort clearfix">
                        <li><a id="newClass" class="active" @click="newClass()">最新</a></li>
                        <li><a id="hotClass" class="" @click="hotClass()">最热</a></li>
                    </ul>
                </div>
                <div class="course-list">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-xs-6" v-for="(item, index) in Newitems" :key="index">
                            <div class="course-item" @click="comingclicked(item.cId)">
                                <div class="course-img">
                                    <a href="javascript:;" target="_blank">
                                        <img   v-lazy="item.imgPath" :src="item.imgPath"  :alt="item.title" class="img-responsive" />
                                    </a>
                                </div>
                                <div class="course-info">
                                    <div class="title">
                                        <a class="link-dark" href="javascript:;" target="_blank">
                                                    {{item.title}}
                                                </a>
                                    </div>
                                    <div class="metas clearfix">
                                        <span class="num"><i class="es-icon es-icon-people"></i>{{item.count}}</span>
                                        <span class="comment"><i class="es-icon es-icon-textsms"></i>{{item.commentCount}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                暂无课程
            </div>
        </div>
    </div>
</template>
<script>
    import '../../../../static/assets/libs/jquery/1.11.2/jquery.js'
    import { delAtive } from '../../../../static/assets/libs/echo.js/1.7.0/navMobile.js'
    import {classarticle,classList} from '../../../api/article'
    import {
        artcileClasscli,
        comingclicked,
        hotClass,
        newClass
    } from '../../../../static/bundles/fitler/fitler'
    import axios from 'axios'
    import Bus from '../../../../bus'
    export default {
        data() {
            return {
                articleClass: [],
                classArr: [],
                isfree: false,
                searchData: "",
                classartDetail: [],
                istrue: -1, //高亮
                tId: 0,
                sort: 1,
                userToken: this.$store.getters.token,
            }
        },
        created() {
            //移动端侧边导航+
            this.delAtive(),
                this.classarticleData(),
                this.classListData()
            let self = this
            Bus.$on('change', (e) => { //Hub接收事件
                let timer = null;
                clearTimeout(timer);
                timer = setTimeout(function() {
                     self.searchData = e
                // $("#navInput").keydown(function() {
                //     if (event.keyCode == "13") {//keyCode=13是回车键；数字不同代表监听的按键不同
                //         self.searchData = e
                //     }
                // });
                }, 800);
            });
        },
        computed: {
            Newitems() {
                var _this = this;
                var Newitems = [];
                _this.classArr.map(function(itemF) {
                    if (itemF.title.search(_this.searchData) != -1) {
                        Newitems.push(itemF);
                    }
                });
                return Newitems;
            },
        },
        mounted: function() {
            $("#free").attr("checked", false);
        },
        methods: {
            artcileClasscli,
            comingclicked,
            delAtive,
            classarticleData() {
                classarticle().then(response => {
                    this.articleClass = response.data.data
                })
            },
            newClass() {
                this.sort = 1
                this.classListData()
                $("#newClass").addClass("active")
                $("#hotClass").removeClass("active")
            },
            hotClass() {
                this.sort = 2
                this.classListData()
                $("#hotClass").addClass("active")
                $("#newClass").removeClass("active")
            },
            classListData() {
                this.tId = this.$route.params.id
                classList(this.tId, this.sort, this.userToken).then(response => {
                    this.classArr = response.data.data
                    if (this.classArr.length != 0) {
                        this.isfree = true
                    } else {
                        this.isfree = false
                    }
                })
            },
        },
        watch: {
            $route(to, from) {
                this.tId = this.$router.history.current.params.id,
                this.classListData();
                this.delAtive()
            }
        },
    };
</script>
<style lang="scss" scoped>
    .artclassNav {
        color: #616161;
        cursor: pointer;
    }
    .active {
        color: #46c37b;
        cursor: pointer;
    }
</style>
