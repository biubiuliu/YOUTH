<template>
    <div id="teacher" class="es-wrap">
        <div class="es-banner">
            <div class="container">
                <div class="title">
                    <i class="es-icon es-icon-permcontactcal"></i>所有教师
                </div>
            </div>
        </div>
        <div id="mask" class="html-mask"></div>
        <div id="content-container" class="container">
            <div class="teacher-list row">
                <div class="col-lg-3 col-md-4 col-xs-6" v-for="(item,index) in teacher" :key="index" @click="teacherDetail(index)">
                    <div class="teacher-item">
                        <div class="teacher-top">
                            <a class="teacher-img" href="javascript:;">
                                <img class="avatar-lg" v-if="item.headImageUrl" :src="item.headImageUrl" alt="暂无头像">
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
            <nav class="text-center">
            </nav>
        </div>
    </div>
</template>

<script>
    import '../../../static/assets/libs/jquery/1.11.2/jquery.js'
    import {
        delAtive
    } from '../../../static/assets/libs/echo.js/1.7.0/navMobile.js'
    import {
        teacherDetail
    } from '../../../static/bundles/fitler/fitler'
    import {
        teacherList
    } from '../../api/article'
    export default {
        data() {
            return {
                teacher: [],
            }
        },
        beforeCreate() {
            $("body").addClass("teacherpage bg-blank");
        },
        created() {
            //移动端侧边导航
            this.delAtive(),
                this.teacherData()
        },
        methods: {
            delAtive,
            teacherDetail,
            teacherData() {
                teacherList(0).then(response => {
                    this.teacher = response.data.data
                    // console.log(this.teacher)
                })
            },
        }
    }
</script>
<style lang="scss" scoped>

</style>
