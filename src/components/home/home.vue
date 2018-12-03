<template>
    <div id="home" class="es-wrap">
        <div class="es-poster swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" style="background:#C53031">
                    <div class="container" style="cursor:none">
                        <img class="img-responsive" src="../../../static/assets/img/home/188745829584617152.png" style="cursor:auto">
                    </div>
                </div>
                <div class="swiper-slide" style="background: #F5E4DA;">
                    <div class="container">
                        <img class="img-responsive" src="../../../static/assets/img/home/779253088928379305.png"  style="cursor:auto">
                    </div>
                </div>
                <div class="swiper-slide" style="background: #3ec768;">
                    <div class="container">
                       <img class="img-responsive" src="../../../static/assets/img/home/20181107170234.png"  style="cursor:auto">
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <section class="course-list-section" id="course-list-section">
            <div id="mask" class="html-mask"></div>
            <div class="container">
                <div class="text-line">
                    <h5><span>网校课程</span>
                        <div class="line"></div>
                    </h5>
                    <div class="subtitle">精选网校课程，满足你的学习兴趣。</div>
                </div>
                <div class="course-filter" id="course-filter">
                    <ul class="nav nav-pills hidden-xs" role="tablist" id="articleClass">
                        <li role="presentation" class="active  js-course-filter"  data-type="course"><a href="javascript:;">全部课程</a></li>
                        <li role="presentation" class=" js-course-filter" v-for="(item ,artclass) in articleClass" :key="artclass" data-type="course" @click="artcileClasscli(artclass)"  style="cursor:pointer">
                           <a> {{item.typeName}}</a>
                        </li>
                    </ul>
                    <div class="btn-group visible-xs">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">全部课程
                                <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" role="menu">
                            <li role="presentation" class="js-course-filter active " data-url="/course/search?orderBy=latest" data-type="course"><a href="javascript:;">全部课程</a></li>
                            <li role="presentation" class="js-course-filter"  v-for="(item ,artclass) in articleClass" :key="artclass" data-type="course" @click="artcileClasscli(artclass)" style="cursor:pointer">
                                <a >{{item.typeName}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="course-sort btn-group">
                        <span id="newClass" class="btn btn-default active  js-course-filter" data-type='course' @click="newClass()">
                                   最新
                            </span>
                        <span id="hotClass" href="javascript:;" class="btn btn-default js-course-filter" data-type='course' @click="hotClass()">
                                     最热
                            </span>
                    </div>
                </div>
                <div class="course-list">
                    <div class="row" v-if="(Newitems.length !=0)">
                        <div class="col-lg-3 col-md-4 col-xs-6" v-for="(item, index) in Newitems" :key="index">
                            <div class="course-item" @click="comingclicked(item.cId)">
                                <div class="course-img">
                                    <img  v-lazy="item.imgPath" :src="item.imgPath" :alt="item.title" class="img-responsive" />                                 </div>
                                <div class="course-info">
                                    <div class="title">
                                        {{item.title}}
                                    </div>
                                    <div class="metas clearfix">
                                        <span class="num"><i class="es-icon es-icon-people"></i>{{item.count}}</span>
                                        <span class="comment"><i class="es-icon es-icon-textsms"></i>{{item.commentCount}}</span>
                                        <span class="course-price-widget">
                                        
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" v-else> 
                        <h3>暂无课程 ! ! ! </h3>
                    </div>
                </div>
                <div class="section-more-btn">
                    <router-link to="/explore/0" tag="a" class="btn btn-default btn-lg">
                        更多课程 <i class="mrs-o es-icon es-icon-chevronright"></i>
                    </router-link>
                </div>
            </div>
        </section>
        <!-- 小组动态 -->
        <section class="dynamic-section ">
            <div class="container">
                <div class="text-line gray">
                    <h5><span>动态</span>
                        <div class="line"></div>
                    </h5>
                    <div class="subtitle">关注课程动态，了解最新资讯。</div>
                </div>
                <div class="dynamic-section-main row">
                    <div class="col-md-6">
                        <div class="panel panel-default index-article">
                            <div class="panel-heading">
                                <h3 class="panel-title">
                                    最热资讯频道
                                    <router-link to="/article/0" class="more" tag="a"><i class="es-icon es-icon-morehoriz"></i></router-link>
                                </h3>
                            </div>
                            <div class="panel-body clearfix">
                                <ul class="index-recommend-aricle clearfix">
                                    <li @click="articleHomeDetail(hotarticleimg.articleId)" style="cursor:pointer">
                                        <!-- <a href="javascript:;" > -->
                                        <img :src="hotarticleimg.coverPhotoUrl" :alt="hotarticleimg.titleName" class="img-responsive" />
                                        <div class="image-overlay"></div>
                                        <div class="title">{{hotarticleimg.titleName}}</div>
                                        <!-- </a> -->
                                    </li>
                                </ul>
                                <ul class="index-new-article ">
                                    <li class=" clearfix" v-for="(hotarc, hotart) in hotarticle" :key="hotart" @click="articleDetail(hotart)">
                                        <i class="es-icon es-icon-dot color-primary mrs"></i>
                                        <a class="link-dark" href="javascript:;" :title="hotarc.tabloid">{{hotarc.titleName}}</a>
                                        <span class="date">{{hotarc.modifyTime}}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="panel panel-default index-article">
                            <div class="panel-heading">
                                <h3 class="panel-title">
                                    最新资讯频道
                                    <router-link to="/article/0" class="more" tag="a"><i class="es-icon es-icon-morehoriz"></i></router-link>
                                </h3>
                            </div>
                            <div class="panel-body clearfix">
                                <ul class="index-recommend-aricle clearfix">
                                    <li  @click="articleHomeDetail(newarticleimg.articleId)" style="cursor:pointer">
                                            <img :src="newarticleimg.coverPhotoUrl" :alt="newarticleimg.titleName" class="img-responsive" />
                                            <div class="image-overlay"></div>
                                            <div class="title">{{newarticleimg.titleName}}</div>
                                    </li>
                                </ul>
                                <ul class="index-new-article ">
                                    <li class=" clearfix" v-for="(newarc, newart) in newarticle" :key="newart" @click="articleNewDetail(newart)">
                                        <i class="es-icon es-icon-dot color-primary mrs"></i>
                                        <a class="link-dark" href="javascript:;" :title="newarc.tabloid">{{newarc.titleName}}</a>
                                        <span class="date">{{newarc.modifyTime}}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="recommend-teacher ">
            <div class="container">
                <div class="text-line">
                    <h5><span>推荐教师</span>
                        <div class="line"></div>
                    </h5>
                    <div class="subtitle">名师汇集，保证教学质量与学习效果。</div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-xs-6" v-for="(item, index) in teacher" :key="index">
                        <div class="teacher-item" @click="teacherDetail(index)">
                            <div class="teacher-top">
                                <a class="teacher-img" href="javascript:;" >
                                    <img class="avatar-lg" v-if="(item.headImageUrl)" :src="item.headImageUrl" alt="教师头像">
                                    <img class="avatar-lg" v-else src="https://xueyuan-images.oss-cn-beijing.aliyuncs.com/user-default.png" alt="默认图片">
                                </a>
                                <h3 class="title">
                                    <a class="link-dark" href="javascript:;">{{item.userName}}</a>
                                </h3>
                                <div class="position">
                                    {{item.title}}
                                </div>
                            </div>
                            <div class="teacher-bottom">
                                <div class="about position">
                                    {{item.signature}}
                                </div>
                                <div class="metas">
                                    <a class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal" data-backdrop="static" data-url="/message/create/5">查看详情</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-more-btn">
                    <router-link to="/teacher" tag="a" class="btn btn-default btn-lg">
                        更多教师 <i class="mrs-o es-icon es-icon-chevronright"></i>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import Swiper from "swiper";
    import axios from 'axios'
    import Bus from '../../../bus'
    import "../../../node_modules/swiper/dist/css/swiper.min.css";
    import {
        comingclicked,
        articleDetail,
        teacherDetail,
        artcileClasscli,
        articleNewDetail,
        articleHomeDetail
    } from '../../../static/bundles/fitler/fitler'
    import {
        delAtive
    } from '../../../static/assets/libs/echo.js/1.7.0/navMobile.js'
    import {
        teacherList,
        articleList,
        classarticle,
        classList

    } from '../../api/article'
    export default {
        name: "home",
        data() {
            return {
                homeClass: [],
                articleClass: [],
                classArr: [],
                msg: "",
                searchData: "",
                teacher: [],
                article: [],
                hotarticle: [],
                newarticle: [],
                hotarticleimg: [],
                newarticleimg: [],
                list: null,
                listLoading: true,
                isrequest: true,
                isSort: true,
                userToken: this.$store.getters.token,
                tId: 0,
                sort: 1,
            };
        },
        created() {
            //   $(" #homeInput ").val()=e
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
            this.delAtive(),
                this.teacherData(),
                this.articleData(),
                this.classarticleData(),
                this.classListData()
        },
        computed: {
            Newitems() {
                var _this = this;
                var Newitems = [];
                _this.classArr.map(function(item) {
                    if (item.title.search(_this.searchData) != -1) {
                        Newitems.push(item);
                    }
                });
                return Newitems;
            },

        },
        mounted: function() {
            var mySwiper = new Swiper(".swiper-container", {
                pagination: ".swiper-pagination",
                loop: true,
                autoplay: 3000,
                speed: 500,
                paginationClickable :true,
                autoplayDisableOnInteraction : false
            });
        },
        methods: {
            comingclicked,
            artcileClasscli,
            articleDetail,
            teacherDetail,
            articleNewDetail,
            delAtive,
            articleHomeDetail,
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
                classList(this.tId, this.sort, this.userToken).then(response => {
                    this.classArr = response.data.data
                })
            },
            classarticleData() {
                classarticle().then(response => {
                    this.articleClass = response.data.data
                })
            },
            teacherData() {
                this.listLoading = true
                teacherList(4).then(response => {
                    this.teacher = response.data.data
                    this.listLoading = false
                })
            },
            articleData() {
                articleList().then(response => {
                    this.hotarticle = response.data.data.hot.hotlist,
                        this.hotarticleimg = response.data.data.hot.hotImagelist,
                        this.newarticle = response.data.data.new.newlist,
                        this.newarticleimg = response.data.data.new.newImage
                })
            }
        },
    };
</script>
<style lang="scss" scoped>

</style>
