<template>
    <div id="learn">
        <div class="es-wrap">
            <div class="lesson-dashboard lesson-dashboard-open" id="lesson-dashboard" data-course-id="39" data-course-uri="/course/39" data-dashboard-uri="/course/39/learn" data-watch-limit="" data-starttime="" data-hide-media-lesson-learn-btn="" data-widget-cid="widget-0">
                <div class="dashboard-content">
                    <span class="btn btn-primary  nav-btn back-course-btn" href="javascript:;" @click="comingclicked(courseLearnId)"><span class="glyphicon glyphicon-chevron-left"></span> 返回课程</span>
                    <a class="btn btn-primary  nav-btn prev-lesson-btn" href="javascript:" data-role="prev-lesson" data-placement="right" title="" data-original-title="上一课时" style="display: none;"><span class="glyphicon glyphicon-chevron-up" title="上一课时"></span></a>
                    <a class="btn btn-primary nav-btn next-lesson-btn" href="javascript:" data-role="next-lesson" data-placement="right" title="" data-original-title="下一课时"><span class="glyphicon glyphicon-chevron-down"></span></a>
                    <div class="dashboard-header">
                        <div class="pull-left title-group">
                            <span class="chapter-label" style="display: none;">
                                    第<span data-role="chapter-number"></span>章</span>
                            <span class="divider" style="display: none;">»</span>
                            <span class="chapter-label" style="display: none;">
                                第<span data-role="unit-number"></span>节</span>
                            <span class="divider" style="display: none;">»</span>
                            <span class="item-label">课时<span data-role="lesson-number">1</span></span>
                            <span class="item-title" data-role="lesson-title">学习视频课程</span>
                        </div>
                    </div>
                    <div class="dashboard-body">
                        <div class="lesson-content" id="lesson-video-content" data-role="lesson-content" style="" data-user-id="1" data-balloon-player="1">
                            <!-- 考试按钮 -->
                            <div class="lesson-content-text-body">欢迎参加考试，请点击「开始考试」按钮。
                                <span class="btn btn-primary btn-sm" @click="testDetail(cId)">开始考试</span>
                            </div>
                        </div>
                        <div class="watermarkEmbedded"><input type="hidden" id="videoWatermarkEmbedded" value="0"></div>
                        <div class="lesson-content lesson-content-audio" id="lesson-audio-content" data-role="lesson-content" style="display:none;"></div>
                        <div class="lesson-content" id="lesson-swf-content" data-role="lesson-content" style="display:none;"></div>
                        <div class="lesson-content" id="lesson-iframe-content" data-role="lesson-content" style="display:none;"></div>
                        <div class="lesson-content lesson-content-text" id="lesson-text-content" data-role="lesson-content" style="display:none;">
                            <div class="lesson-content-text-body"></div>
                        </div>
                        <div class="lesson-content lesson-content-document" id="lesson-document-content" data-role="lesson-content" style="display:none;">
                            <div class="lesson-content-document-body"></div>
                        </div>
                        <div class="lesson-content lesson-content-text" id="lesson-live-content" data-role="lesson-content" style="display:none;">
                            <div class="lesson-content-text-body"></div>
                        </div>
                        <div class="lesson-content lesson-content-text" id="lesson-unpublished-content" data-role="lesson-content" style="display:none;">
                            <div class="lesson-content-text-body">当前课时正在编辑中，暂时无法观看。</div>
                        </div>
                        <div class="lesson-content lesson-content-text" id="lesson-testpaper-content" data-role="lesson-content" style="display:none;">
                            <div class="lesson-content-text-body"></div>
                        </div>
                        <div class="lesson-content lesson-content-text" id="lesson-ppt-content" data-role="lesson-content" style="display:none;">
                            <div class="lesson-content-text-body"></div>
                        </div>
                    </div>
                </div>
                <div class="toolbar toolbar-open" id="lesson-dashboard-toolbar" data-widget-cid="widget-1">
                    <div class="toolbar-nav tabbable">
                        <ul class="toolbar-nav-stacked" id="lesson-toolbar-primary">
                            <li data-plugin="lesson" data-noactive="false" class="active"><a href="#tab1" data-toggle="tab"><span class="glyphicon glyphicon-th-list" > </span>目录</a></li>
                            <li data-plugin="question" data-noactive="false"><a href="#tab2" data-toggle="tab"><span class="glyphicon glyphicon-question-sign"> </span>问答</a></li>
                            <li data-plugin="material" data-noactive="false"><a href="#tab3" data-toggle="tab"><span class="glyphicon glyphicon-download-alt"> </span>资料</a></li>
                        </ul>
                        <ul class="toolbar-nav-stacked" id="lesson-toolbar-secondary">
                            <li class="hide-pane" style="">
                                <a href="javascript:"><span class="glyphicon glyphicon-chevron-right"></span></a>
                            </li>
                        </ul>
                    </div>
                    <div class="toolbar-pane-container">
                        <div class="tab-content">
                            <div class="tab-pane active " id="tab1">
                                <div data-pane="lesson" class="lesson-pane" data-widget-cid="widget-2" style="display: block;">
                                    <div class="course-item-list-in-toolbar-pane ps-container">
                                        <!-- 学习完成 -->
                                        <ul class="period-list" id="course-item-list">
                                            <li class="period lesson-item lesson-item-262" data-id="262" data-num="1" v-for="(item ,completeV) in stuVideoArr" :key="item.cId" @click="learnDetail(item.cId,courseLearnId)">
                                                <router-link to="/courseLearn" class="course-lesson" tag="a" title="学习视频课程">
                                                    <i class="es-icon es-icon-done1 color-primary status-icon"></i>
                                                    <span class="title">  
                                                                        课时{{completeV+++1}}：{{item.name}}</span>
                                                    <span class="date" :title="item.duration">{{item.duration}}</span>
                                                    <span class="course-type">
                                                                    <i class="es-icon es-icon-videoclass" data-toggle="tooltip" data-placement="top" title="视频课程"></i>
                                                                </span>
                                                </router-link>
                                            </li>
                                            <li class="period lesson-item lesson-item-263" data-id="263" data-num="2" v-for="(item ,completeT) in stuTestArr" :key="item.cId" @click="startTestDetail(item.cId,courseLearnId)">
                                                <router-link to="/startTest" class="course-lesson" tag="a" title="测试课程的试卷">
                                                    <i class="es-icon es-icon-done1 color-primary status-icon"></i>
                                                    <span class="title"> 课时{{completeT+++1}}：{{item.name}}</span>
                                                    <span class="course-type">
                                                                    <i class="es-icon es-icon-check" data-toggle="tooltip" data-placement="top" title="" data-original-title="试卷"></i>
                                                                </span>
                                                </router-link>
                                            </li>
                                        </ul>
                                        <!-- 正在学习 -->
                                        <ul class="period-list" id="course-item-list">
                                            <li class="period lesson-item lesson-item-262" data-id="262" data-num="1" v-for="(learn,index)  in lVideoArr" :key="learn.cId" @click="learnDetail(learn.cId,courseLearnId)">
                                                <router-link to="/courseLearn" class="course-lesson" tag="a" title="学习视频课程">
                                                    <i class="es-icon es-icon-doing color-primary status-icon"></i>
                                                    <span class="title">  
                                                                        课时{{index+++1}}：{{learn.name}}</span>
                                                    <span class="date" title="视频时长01:12">{{learn.duration}}</span>
                                                    <span class="course-type">
                                                                    <i class="es-icon es-icon-videoclass" data-toggle="tooltip" data-placement="top" title="视频课程"></i>
                                                                </span>
                                                </router-link>
                                            </li>
                                            <li class="period lesson-item lesson-item-263" style="cursor:pointer" data-id="263" data-num="2" v-for="learnTest in lTestArr" :key="learnTest.cId"  @click="startTestDetail(learnTest.cId,courseLearnId)">
                                                    <i class="es-icon es-icon-doing color-primary status-icon"></i>
                                                    <span class="title"> 课时{{learnTest.cId}}：{{learnTest.name}}</span>
                                                    <span class="course-type">
                                                        <i class="es-icon es-icon-check" data-toggle="tooltip" data-placement="top" title="" data-original-title="试卷"></i>
                                                    </span>
                                            </li>
                                        </ul>
                                        <!-- 待学习  @click="intercept(")-->
                                        <ul class="period-list" id="course-item-list">
                                            <li class="period lesson-item lesson-item-262" data-id="262" data-num="1" v-for="(itema,videoI) in unVideoArr" :key="videoI">
                                                <div v-if="itema.cId === nextLearn.cId" @click="learnDetail(itema.cId,courseLearnId)"  class="course-lesson">
                                                    <i class="es-icon es-icon-undone color-primary status-icon"></i>
                                                    <span class="title">  
                                                         课时{{videoI}}：{{itema.name}}
                                                    </span>
                                                    <span class="date" title="视频时长01:12">{{itema.duration}}</span>
                                                    <span class="course-type">
                                                        <i class="es-icon es-icon-videoclass" data-toggle="tooltip" data-placement="top" title="视频课程"></i>
                                                    </span>
                                                </div>
                                                <div v-else  class="course-lesson">
                                                    <i class="es-icon es-icon-undone color-primary status-icon"></i>
                                                    <span class="title">  
                                                         课时{{videoI}}：{{itema.name}}
                                                    </span>
                                                    <span class="date" title="视频时长01:12">{{itema.duration}}</span>
                                                    <span class="course-type">
                                                        <i class="es-icon es-icon-videoclass" data-toggle="tooltip" data-placement="top" title="视频课程"></i>
                                                    </span>
                                                </div>
                                            </li>
                                            <li class="period lesson-item lesson-item-263" data-id="263" data-num="2" v-for="(items,index) in unTestArr" :key="items.cId0" >
                                                <div  v-if="items.cId === nextLearn.cId" @click="startTestDetail(items.cId,courseLearnId)" style="cursor:pointer" class="course-lesson" >
                                                    <i class="es-icon es-icon-undone color-primary status-icon"></i>
                                                    <span class="title"> 课时{{index}}：{{items.name}}</span>
                                                    <span class="course-type">
                                                        <i class="es-icon es-icon-check" data-toggle="tooltip" data-placement="top" title="" data-original-title="试卷"></i>
                                                    </span>
                                                </div>
                                                <div  v-else class="course-lesson" >
                                                    <i class="es-icon es-icon-undone color-primary status-icon"></i>
                                                    <span class="title"> 课时{{index}}：{{items.name}}</span>
                                                    <span class="course-type">
                                                        <i class="es-icon es-icon-check" data-toggle="tooltip" data-placement="top" title="" data-original-title="试卷"></i>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 3px; width: 359px; display: none;">
                                            <div class="ps-scrollbar-x" style="left: 0px; width: 0px;">
                                            </div>
                                        </div>
                                        <div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px; height: 938px; display: none;">
                                            <div class="ps-scrollbar-y" style="top: 0px; height: 0px;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="tab2">
                                <div class="course-detail-content">
                                    <div class="es-piece">
                                    
                                        <div class="piece-body" v-for="item in communicationArr.data" :key="item.pageNum">
                                            <div class="topic-list">
                                                <div class="media topic-item">
                                                    <div class="media-left media-middle">
                                                        <img class="avatar-sm" src="http://edusoho-demo.b0.upaiyun.com/files/default/2015/05-26/0925404c5440489293.jpeg" alt="无图">
                                                    </div>
                                                    <div class="media-body">
                                                        <div class="title">
                                                            <i class="es-icon es-icon-help color-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="问答"></i>
                                                            <a href="javascript:;">{{item.ask}} </a>
                                                        </div>
                                                        <div class="metas text-sm">
                                                            <a href="javascript:;" class="color-gray">{{item.askName}}</a>
                                                            <span>发起了问答</span> • <span>{{item.askTime | dateconversion}}</span>
                                                        </div>
                                                    </div>
                                                    <div class="metas text-sm answer">
                                                        <div class="color-gray">
                                                            <span style="color:#313131">{{item.answerName}} 回复:</span> {{item.answer}}
                                                        </div>
                                                    </div>
                                                    <div class="media-data hidden-xs">
                                                        <span>{{item.spot}}<br>点赞</span>
                                                    </div>
                                                </div>
                                                <v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="tab3">
                            
                                <div class="course-detail-content">
                                    <div class="es-piece">
                                        <div class="piece-body">
                                            <ul class="period-list" id="course-item-list">
                                                <li class="period lesson-item lesson-item-262" data-id="262" data-num="1" v-for="item  in fileArr.data" :key="item.fId">
                                                    <i class="es-icon es-icon-done1 color-primary status-icon"></i>
                                                    <span class="title">{{item.name}}</span>
                                                    <span class="course-type">
                                                        <a :href="item.path" download="资料下载">
                                                            <i class="es-icon es-icon-filedownload" data-toggle="tooltip" data-placement="top" title="资料下载"></i>
                                                        </a>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal" id="course-learned-modal" style="display:none;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 class="modal-title">学习进度提示</h4>
                        </div>
                        <div class="modal-body">
                            <p class="text-success">赞一个，这个课程你已经都学完啦，你可以再回顾一下或者去看看别的课程～～～</p>
                        </div>
                        <div class="modal-footer">
                            <a href="/course/39" class="btn btn-primary">回课程主页</a>
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- /.modal -->
            <div class="modal" id="mediaPlayed-control-modal" style="display:none;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 class="modal-title">媒体课时学习提示</h4>
                        </div>
                        <div class="modal-body">
                            <p class="text-success">此课时设置了必须完整播放完整个课时才能学完～～</p>
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- /.modal -->
            <div class="modal" id="homeworkDone-control-modal" style="display:none;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 class="modal-title">作业未完成提示</h4>
                        </div>
                        <div class="modal-body">
                            <p class="text-success">此课时设置了必须做完本课时作业并提交后才能学完～～</p>
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- /.modal -->
        </div>
        <div id="login-modal" class="modal" data-url="/login/ajax"></div>
        <div id="modal" class="modal"></div>
        <div id="attachment-modal" class="modal"></div>
    </div>
</template>

<script>
    import '../../../../static/assets/libs/jquery/1.11.2/jquery.js'
    import '../../../../static/assets/libs/video/video.js'
    import '../../../../static/assets/libs/video/layer-v3.1.1/layer-v3.1.1/layer'
    import {
        testDetail,
        comingclicked,
        startTestDetail,
        learnDetail
    } from "../../../../static/bundles/fitler/fitler";
    import {
        courseclassList,
        queryCurriculum,
        communication,
        file,
        start
    } from '../../../api/article'
    import pagination from '@/components/articlenav/article/artPage/pagination'
    export default {
        filters: {
            //时间戳转时间
            dateconversion(value) { // 一个时间戳转正常的过滤器
                let date = new Date(value) // nuw 一个时间
                let getHours // 小时
                let getMinutes // 分
                if (date.getHours() < 10) {
                    getHours = "0" + date.getHours()
                } else {
                    getHours = date.getHours()
                }
                // 判断小时是否小于10的补全：加0
                if (date.getMinutes() < 10) {
                    getMinutes = "0" + date.getMinutes()
                } else {
                    getMinutes = date.getMinutes()
                }
                // 判断分是否小于10的补全：加0
                return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + getHours + ":" + getMinutes // 返回转换后的值
            }
        },
        data() {
            return {
                cId: this.$route.query.id,
                courseLearnId: this.$route.query.cid,
                courseclearningList: [],
                coursecunlearnedList: [],
                coursecstudyList: [],
                courseOtherList: [],
                learnElement: [],
                unTestArr: [],
                unVideoArr: [],
                lVideoArr: [],
                lTestArr: [],
                stuVideoArr: [],
                stuTestArr: [],
                objQuery: [],
                discussCountList: [],
                commentCountList: [],
                queryuserArr: [],
                queryClassHourArr: [],
                queryCurriculumArr: [],
                dynamicArr: [],
                identcalArr: [],
                total: 0, // 记录总条数
                pageSize: 5, // 每页显示条数
                current: 1, // 当前的页数==page1
                userToken: this.$store.getters.token,
                communicationArr: [],
                fileArr: [],
                nextLearn:null,
            }
        },
        created() {
            $("body").addClass("lesson-dashboard-page")
            this.courseClassListData()
            this.queryCurriculumData()
            this.communicationData()
            this.fileData()
            this.startLearn()
        },
        mounted() {
            this.isDisplay()
        },
        methods: {
            testDetail,
            learnDetail,
            comingclicked,
            startTestDetail,
             startLearn(){
                start(this.$route.query.cid, this.$route.query.id, this.userToken).then(response => {
                    console.log('开始学习',this.$route.query.cid, this.userToken)
                })
            },
            isDisplay() {
                $("header").css({
                    "display": "none"
                })
                $("footer").css({
                    "display": "none"
                })
                $("#esbar").css({
                    "display": "none"
                })
            },
            queryCurriculumData() {
                queryCurriculum(this.$route.query.id, this.userToken).then(response => {
                    this.queryCurriculumArr = response.data.data
                })
            },
            //分页
            pagechange: function(currentPage) {
                this.current = currentPage
                this.informationAllData();
                // ajax请求, 向后台发送 currentPage, 来获取对应的数据
            },
            //查看课程的所有问答
            communicationData() {
                communication(this.courseLearnId, this.userToken, this.current).then(response => {
                    this.communicationArr = response.data.data
                    this.total = this.communicationArr.total
                    // console.log("问答",this.communicationArr.data)
                })
            },
            //查看课程的所有资料
            fileData() {
                file(this.courseLearnId, this.current).then(response => {
                    this.fileArr = response.data.data
                    console.log("查看课程的所有资料", this.fileArr)
                })
            },
            courseClassListData() {
                //学习中的课时集合 
                this.courseLearnId = this.$route.query.cid
                courseclassList(this.$route.query.cid, this.userToken).then(response => {
                    this.courseclearningList = response.data.data.learningList
                    for (const ikey in this.courseclearningList) {
                        const learnElement = this.courseclearningList[ikey];
                        if (learnElement.type == 1) {
                            this.lVideoArr.push(learnElement)
                        } else {
                            this.lTestArr.push(learnElement)
                        }
                    }
                    // console.log("学习中的课时集合",this.courseclearningList)
                    //还没学习的课时集合
                    this.coursecunlearnedList = response.data.data.unlearnedList;
                    for (const unkey in this.coursecunlearnedList) {
                        const unelement = this.coursecunlearnedList[unkey];
                        if (unelement.type == 1) {
                            this.unVideoArr.push(unelement)
                        } else {
                            this.unTestArr.push(unelement)
                        }
                    }
                    //  console.log("还没学习的课时集合",this.coursecunlearnedList)
                    //学习完的课时集合
                    this.coursecstudyList = response.data.data.studyList;
                    for (const keys in this.coursecstudyList) {
                        const stuElement = this.coursecstudyList[keys];
                        if (stuElement.type == 1) {
                            this.stuVideoArr.push(stuElement)
                        } else {
                            this.stuTestArr.push(stuElement)
                        }
                    }
                    //  console.log("学习完的课时集合",this.coursecstudyList)
                    // 问答
                        if (this.courseclearningList.length>0){
                            this.nextLearn = this.courseclearningList[0]
                        }
                        else if(this.coursecunlearnedList.length>0){
                            this.nextLearn = this.coursecunlearnedList[0]
                        }
                        else if(this.coursecstudyList.length>0){
                            this.nextLearn = this.coursecstudyList[0]
                        }
                        else{
                            this.nextLearn = null
                        }
                    this.discussCountList = response.data.data.discussCount;
                    this.commentCountList = response.data.data.commentCount;
                });
            },
        },
        components: {
            'v-pagination': pagination,
        },
        watch:{
            $route(to,from){
                 this.$router.go(0);
            }
         }
    }
</script>

<style scoped>
    @import url("../../../../static/assets/css/video-js.css");
    #learn {
        margin-bottom: 50%;
    }
</style>