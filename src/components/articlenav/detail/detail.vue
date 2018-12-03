<template>
    <div id="detail" class="es-wrap">
        <div id="content-container" class="container" v-if="(isArticle)">
            <div class="article-detail row" id="detail-content">
                <!-- 主内容 -->
                <div class="col-md-8 article-detail-main">
                    <section class="es-section article-content">
                        <ol class="breadcrumb">
                            <li><a href="/article">资讯频道</a></li>
                            <li><a href="/article/category/news">{{informationDetailsArr.columnName}}</a></li>
                        </ol>
                        <div class="article-metas">
                            <div class="pull-left">
                                <div class="date">
                                    <div class="day">{{informationDetailsArr.modifyTimeDay}}</div>
                                    <div class="month">{{informationDetailsArr.modifyTimeMonth}}月</div>
                                </div>
                            </div>
                            <div class="metas-body">
                                <h2 class="title">
                                    {{informationDetailsArr.titleName}}
                                </h2>
                                <div class="sns">
                                    <span class="views-num">
                                    <i class="es-icon es-icon-visibility"></i>{{informationDetailsArr.readingNumber}}
                                </span>
                                </div>
                            </div>
                        </div>
                        <div class="article-text">
                            <div class="article-text">
                                <p><span style="font-size:16px"><strong> {{informationDetailsArr.titleName}}</strong></span></p>
                                <p>&nbsp;</p>
                                <p v-html="content"></p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                        <div class="well">
                            <p>文章来源: <strong class="mll">之于教育青年大讲堂</strong></p>
                        </div>
                        <div class="article-tags">
                        </div>
                        <div class="article-sns">
                            <span class="es-share right">
                                <a class="dropdown-toggle" href="javascript:;" data-toggle="dropdown">
                                <i class="es-icon es-icon-share"></i>
                                </a>            
                            <div class="dropdown-menu  js-social-share-params" data-title="精品资源共享课程与MOOC的碰撞" data-summary="精品资源共享课程建设背景 由国家教育部主导、全国高等院校广泛参与的精品课程建设，到现在已经有十多年了..." data-message="我正在看「精品资源共享课程与MOOC的碰撞」，关注「EduSoho网络课堂」，分享知识，成就未来。" data-url="http://localhost/article/14" data-picture="">
                            <a href="javascript:;" class="js-social-share" data-cmd="weixin" title="分享到微信" data-share="weixin" data-qrcode-url="/common/qrcode?text=http%3A//localhost/article/14"><i class="es-icon es-icon-weixin"></i></a>
                            <a href="javascript:;" class="js-social-share" data-cmd="tsina" title="分享到新浪微博" data-share="weibo"><i class="es-icon es-icon-weibo"></i></a>
                            <a href="javascript:;" class="js-social-share" data-cmd="qq" title="分享到QQ好友" data-share="qq"><i class="es-icon es-icon-qq"></i></a>
                            <a href="javascript:;" class="js-social-share" data-cmd="qzone" title="分享到QQ空间" data-share="qzone"><i class="es-icon es-icon-qzone"></i></a>
                            </div>
                            </span>
                        </div>
                        <nav class="text-center">
                        </nav>
                    </section>
                </div>
            </div>
        </div>
        <div v-else>
            暂无信息
        </div>
    </div>
</template>

<script>
    import {
        informationDetails
    } from '../../../api//article'
    import {
        articleHomeDetail
    } from '../../../../static/bundles/fitler/fitler'
    export default {
        data() {
            return {
                informationDetailsArr: [],
                content: "",
                detailArr: [],
                elementArr: {},
                articleId: 0,
                isArticle: false
            }
        },
        created() {
            this.articleId = this.$route.params.id
            this.informationDetailsData()
        },
        methods: {
            articleHomeDetail,
            //资讯详情  
            informationDetailsData() {
                informationDetails(this.articleId).then(resonse => {
                    this.informationDetailsArr = resonse.data.data
                    if (this.informationDetailsArr != undefined) {
                        this.content = this.informationDetailsArr.content
                        this.isArticle = true
                    } else {
                        this.isArticle = false
                    }
                })
            },
        },
    }
</script>
<style lang="scss" scoped>

</style>
