<template>
    <div id="article" class="es-wrap">
        <div id="content-container" class="container">
            <div class="es-tabs article-list-header">
                <div class="tab-header">
                    <ul class="clearfix" id="articleall">
                        <li role="presentation" v-for="(item,artNews) in articleNews" :key="artNews" @click="artcileNewsCli(artNews)">
                            <a href="javascript:;">{{item.columnName}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="article-list-header mbl row" v-show="(isShowImg)">
                <!-- 轮播图 -->
                <div class="aricle-carousel col-md-8">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide " v-for="item in elementImg0" :key="item.articleId"  @click="articleHomeDetail(item.articleId)">
                                <a href="javscript:;">
                                    <img class="img-responsive" :src="item.coverPhotoUrl" :alt="item.titleName">
                                    <div class="swiper-cat">资讯频道</div>
                                    <div class="swiper-caption">{{item.titleName}}</div>
                                    <div class="image-overlay"></div>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-pager"></div>
                    </div>
                </div>
                <div class="col-md-4 hidden-sm hidden-xs">
                    <div v-for="item in elementImgOther" :key="item.articleId" @click="articleHomeDetail(item.articleId)"  style="cursor:pointer">
                        <a class="topic-post-small"  >
                            <img class="img-responsive" :src="item.coverPhotoUrl" :alt="item.titleName">
                            <div class="content">
                                <p>资讯频道</p>
                                <h4 class="title">{{item.titleName}}</h4>
                            </div>
                            <div class="image-overlay"></div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="article-list-body row">
                <!-- list主内容-->
                <div class="col-md-8 article-list-main">
                    <section class="es-section">
                        <div class="article-list" v-for="(page, pageI) in informationAllArr" :key="pageI">
                            <article class="article-item">
                                <div class="article-metas clearfix">
                                    <div class="pull-left">
                                        <div class="date">
                                            <div class="day">{{page.modifyTimeDay}}</div>
                                            <div class="month">{{page.modifyTimeMonth}}月</div>
                                        </div>
                                    </div>
                                    <div class="metas-body">
                                        <p>
                                            {{page.columnName}}
                                        </p>
                                        <h2 class="title" @click="articleHomeDetail(page.articleId)" style="cursor: pointer;">
                                            {{page.titleName}}
                                            <!-- <a class="link-dark" href="../../../../static/article/14">世界那么大，后台那么新，教你如何不迷失~</a> -->
                                        </h2>
                                    </div>
                                </div>
                                <div class="content">
                                    {{page.tabloid}}
                                </div>
                            </article>
                        </div>
                        <v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
                    </section>
                </div>
                <aside class="col-md-4 article-sidebar">
                    <!-- 热门资讯 -->
                    <div class="panel panel-default hot-article">
                        <div class="panel-heading">
                            <h3 class="panel-title"><i class="es-icon es-icon-whatshot"></i>热门资讯频道</h3>
                        </div>
                        <div class="panel-body" v-for="(hotArt ,hotArtI) in hotInformationAllArr" :key="hotArtI">
                            <div class="media media-number">
                                <div class="media-left">
                                    <span class="num">{{hotArtI+++1}}</span>
                                </div>
                                <div class="media-body" tag="a" style="cursor: pointer;" @click="articleHotDetail(hotArt.articleId)">
                                    {{hotArt.titleName}}
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
        <div id="articlemask" class="html-mask"></div>
    </div>
</template>
<script>
    import {
        delAtive
    } from '../../../../static/assets/libs/echo.js/1.7.0/navMobile.js'
    import {
        artcileNewsCli,
        articleHomeDetail,
        articleHotDetail
    } from '../../../../static/bundles/fitler/fitler'
    import {
        newsArticle,
        hotInformationAll,
        hotInformationImageAll,
        informationAll,
        informationDetails,
    } from '../../../api//article'
    import pagination from '@/components/articlenav/article/artPage/pagination'
    // import router from ''
    export default {
        data() {
            return {
                articleNews: [],
                hotInformationAllArr: [],
                informationAllArr: [],
                informationColumnAllArr: [],
                artcleArr: [],
                newsArr: [],
                isShowImg: false,
                elementImg: [],
                elementImg0: [],
                elementImgOther: [],
                total: 0, // 记录总条数
                pageSizes: 10, // 每页显示条数
                current: 1, // 当前的页数
                columnId: 0,
            }
        },
        beforeCreate() {
            //   $("#articleall").ready(function(){         
            //     $("#articleall>li").find("a").click(function(){
            //         $("#articleall").find("li").removeClass("active");
            //         $(this).parent("li").addClass("active");
            //     });
            // });
        },
        created() {
            //移动端侧边导航
            this.delAtive(),
                this.newsArticleData(),
                this.hotInformationAllData(),
                this.hotInformationImageAllData()
            this.informationAllData()
        },
        methods: {
            delAtive,
            artcileNewsCli,
            articleHomeDetail,
            articleHotDetail,
            // 资讯首页栏目列表
            newsArticleData() {
                newsArticle().then(resonse => {
                    this.articleNews = resonse.data.data
                })
            },
            //资讯首页最热前6列表
            hotInformationAllData() {
                hotInformationAll().then(resonse => {
                    this.hotInformationAllArr = resonse.data.data
                })
            },
            //资讯首页最热带封面前3列表
            hotInformationImageAllData() {
                hotInformationImageAll().then(resonse => {
                    this.hotInformationImageAllArr = resonse.data.data
                    for (let imgI = 0, len = this.hotInformationImageAllArr.length; imgI < len; imgI++) {
                        this.elementImg = this.hotInformationImageAllArr;
                        switch (imgI) {
                            case 0:
                                this.elementImg0.push(this.elementImg[imgI])
                                break;
                        
                            default:
                                this.elementImgOther.push(this.elementImg[imgI])
                                break;
                        }
                    }
                })
            },
            pagechange: function(currentPage,pageSize) {
                this.current = currentPage
                this.pageSizes = pageSize
                this.informationAllData();
                // ajax请求, 向后台发送 currentPage, 来获取对应的数据
            },
            //资讯首页列表分页      
            informationAllData() {
                this.columnId = this.$route.params.id ? this.$route.params.id : 0
                if (this.columnId == 0) {
                    this.isShowImg = true;
                } else {
                    this.isShowImg = false;
                }
                informationAll(this.columnId, this.current, this.pageSize).then(resonse => {
                    this.informationAllArr = resonse.data.data.data
                    this.total = resonse.data.data.total
                })
            },
        },
        components: {
            'v-pagination': pagination,
        },
        watch: {
            $route(to, from) {
                this.informationAllData();
                this.delAtive()
            }
        },
    }
</script>
<style lang="scss" scoped>

</style>
