<template>
    <div id="user" class="es-wrap">
        <div v-for="(item,index) in teacherDetail" :key="index">
            <div class="user-center-header" :data-href="item.headImageUrl" data-sharpness="40">
                <div class="container clearfix">
                    <div class="blurr-bg" style="background: url(&quot;http://edusoho-demo.b0.upaiyun.com/files/default/2015/05-22/155036c81c6c142598.jpg&quot;) center center / 150%;left: 0px;right: 0px;top: -50px;bottom: -50px;width: 100%;filter: blur(60px);transform: translateZ(0px);position: absolute;"></div>
                    <div class="user-avatar">
                        <div class="avatar-wrap">
                            <img class="avatar-lg" :src="item.headImageUrl">
                            <span class="icon-user-status icon-md"><i class="es-icon es-icon-school"></i></span>
                        </div>
                        <div class="name">
                            {{item.userName}}
                        </div>
                        <div class="position about">
                            <span class="mrm">{{item.title}}</span>
                        </div>
                    </div>
                    <div class="user-about hidden-sm hidden-xs">
                        <div class="user-about-content">
                            暂无签名 </div>
                    </div>
                </div>
                <div class="mask"></div>
            </div>
            <div id="content-container" class="container tabbable">
                <ul class="nav nav-tabs clearfix">
                    <li role="presentation">
                        <a href="#tab1" data-toggle="tab" id="person">个人介绍</a>
                    </li>
                    <li class="presentation active" id="pevClass">
                        <a href="#tab2" data-toggle="tab" type="pevClass">在教课程</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane  " id="tab1">
                        <div class="tab-content course-list" role="tabpanel">
                            <div class="row">
                                {{item.signature}}
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane active" id="tab2">
                        <div class="tab-content course-list" role="tabpanel">
                            <div class="row" v-if="(teacherCurriculumAllArr.length!=0)">
                                <div class="col-lg-3 col-md-4 col-xs-6 " v-for="teach in teacherCurriculumAllArr" :key="teach.cId">
                                    <div class="course-item" @click="comingclicked(teach.cId)">
                                        <div class="course-img">
                                            <img :src="teach.imgPath" :alt="teach.title" class="img-responsive" />
                                        </div>
                                        <div class="course-info">
                                            <div class="title">
                                                <a class="link-dark" target="_blank">
                                                                {{teach.title}}
                                                            </a>
                                            </div>
                                            <div class="metas clearfix">
                                                <span class="num"><i class="es-icon es-icon-people"></i>{{teach.peoCount}}</span>
                                                <span class="comment"><i class="es-icon es-icon-textsms"></i>{{teach.commentCount}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" v-else>
                                <div class="col-lg-3 col-md-4 col-xs-6 ">
                                    暂无相关课程,敬请期待!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        teacherDetail,
        comingclicked
    } from '../../../static/bundles/fitler/fitler'
    import {
        teacherList,
        teacherCurriculumAll
    } from '../../api/article'
    export default {
        data() {
            return {
                teacher: [],
                teacherDetail: [],
                teacherCurriculumAllArr: [],
                teacherHash: 0
            }
        },
        created() {
            $("body").addClass("userpage bg-blank")
            this.teacherListData()
            this.teacherHash = this.$route.params.id
            this.teacherCurriculumAllData()
            // console.log('tag', this.$route.params.id)
        },
        methods: {
            comingclicked,
            teacherListData() {
                teacherList(0).then(response => {
                    this.teacher = response.data.data
                    for (let i = 0; i < this.teacher.length; i++) {
                        const element = this.teacher[i];
                        if (this.$route.params.id == this.teacher[i].userId) {
                            this.teacherDetail.push(element)
                            // console.log(this.teacherDetail[0].userId)          
                        }
                    }
                })
            },
            teacherCurriculumAllData() {
                teacherCurriculumAll(this.teacherHash).then(response => {
                    this.teacherCurriculumAllArr = response.data.data
                    // console.log(this.teacherCurriculumAllArr)
                })
            },
        },
    }
</script>

<style scoped>
    #user {
        margin-bottom: 200px;
    }
</style>