<template>
    <div id="course" class="es-wrap">
        <section class="course-detail-header after">
            <div class="container ">
                <ol class="breadcrumb breadcrumb-o">
                    <li><a href="/">首页</a></li>
                    <li class="active">{{objQuery.title}}</li>
                </ol>
                <div class="es-section clearfix ">
                    <div class="course-header-top clearfix">
                        <div class="course-img">
                            <img class="img-responsive" :src="objQuery.imgPath" :alt="objQuery.title">
                            <div class="tags"> </div>
                        </div>
                        <div class="course-info">
                            <h2 class="title">
                                {{objQuery.title}}
                                <span class="es-qrcode top" data-url="/course/39/qrcode">
                                            <i class="es-icon es-icon-qrcode"></i>
                                            <span class="qrcode-popover">
                                            <img src="" alt="">
                                            扫二维码继续学习
                                            二维码时效为半小时
                                            </span>
                                </span>
                            </h2>
                            <div class="subtitle"></div>
                            <div class="metas">
                                <div class="score">
                                    <img src="../../../static/assets/img/raty/star-on.png" alt=" 2" v-for="imgStarOn in startScorse" :key="imgStarOn.cId">
                                    <img src="../../../static/assets/img/raty/star-off.png" alt=" 2" v-for="imgStarOff in 5-startScorse" :key="imgStarOff.cId">
                                    <span>( {{commentCountList}} 评论 )</span>
                                </div>
                            </div>
                        </div>
                        <div class="course-operation">
                            <div class="student-num hidden-xs">
                                <i class="es-icon es-icon-people"></i>{{queryCurriculumArr.peopleNumber }} 人
                            </div>
                            <ul class="course-data clearfix two-col">
                                <li id="unfavorite-btn"    @click="changeCollect()">
                                    <a href="javascript:;" class="color-primary">
                                        <p><i :class="queryCurriculumArr.state|collections" class="es-icon"></i></p>
                                        <p>{{queryCurriculumArr.state|collection}}</p>
                                    </a>
                                </li>
                                <li>
                                    <span class="es-share top" style="display:none">
                                    <a class="dropdown-toggle" href="" data-toggle="dropdown">
                                        <p><i class="es-icon es-icon-share"></i></p>
                                        <p>分享</p>
                                    </a>
                                    <div class="dropdown-menu  js-social-share-params" data-title="测试用的课程" data-summary="1. transient的作用及使用方法我们都知道一个对象只要实现了Serilizable接口，这个..." data-message="我正在学习《测试用的课程》，收获巨大哦，一起来学习吧！" data-url="http://localhost/course/39" data-picture="/files/course/2018/09-05/121213d4c6c6091262.png">
                                    
                                    <a href="javascript:;" class="js-social-share" data-cmd="weixin" title="分享到微信" data-share="weixin" data-qrcode-url="/common/qrcode?text=http%3A//localhost/course/39"><i class="es-icon es-icon-weixin"></i></a>
                                    <a href="javascript:;" class="js-social-share" data-cmd="tsina" title="分享到新浪微博" data-share="weibo"><i class="es-icon es-icon-weibo"></i></a>
                                    <a href="javascript:;" class="js-social-share" data-cmd="qq" title="分享到QQ好友" data-share="qq"><i class="es-icon es-icon-qq"></i></a>
                                    <a href="javascript:;" class="js-social-share" data-cmd="qzone" title="分享到QQ空间" data-share="qzone"><i class="es-icon es-icon-qzone"></i></a>
                                    </div>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="progress progress-sm">
                        <div class="progress-bar" role="progressbar" style="width: 0%" data-toggle="tooltip" data-placement="right" title="0%">
                        </div>
                    </div>
                    <div class="course-header-bottom clearfix">
                        <span class="pull-left">完成课时： {{queryClassHourArr.complete}}/{{queryClassHourArr.classHourCount}}</span>
                        <button class="btn btn-primary btn-lg " @click="learnDetail(nextLearn.cId,cId)">继续学习</button >
                                    <span v-if="(nextLearn != null)" class="next-class hidden-xs" @click="eve()">下一课时：<a href="javascript:;">{{nextLearn.name}}</a></span>
                                    </div>
                                    </div>
                                 </div>
                                 
                </section>
                    <div id="content-container" class="container">    
                        <div class="course-detail row">
                            <div class="col-lg-9 col-md-8  course-detail-main">
                                <section class="tabbable es-section ">
                                      <ul class="nav nav-tabs">
                                        <li class="active"><a href="#tab1" data-toggle="tab">课时列表</a></li>
                                        <li><a href="#tab2" data-toggle="tab" @click="askFun()">问答区 <small class="text-muted">( {{this.discussCountList}}  )</small></a></li>
                                        <li><a href="#tab3" data-toggle="tab" @click="filesFun()">资料区</a></li>
                                        <li><a href="#tab4" data-toggle="tab" @click="takingkFun()">评价<small class="text-muted">( {{this.commentCountList}} )</small></a></li>
                                        <li><a href="#tab5" data-toggle="tab" @click="textFun()">概览</a></li>
                                      </ul>
                                      <div class="tab-content">
                                        <div class="tab-pane active " id="tab1">
                                            <div class="course-detail-content">
                                                <div class="es-piece">
                                                    <div class="piece-body">
                                                        <!-- 学习完成 -->
                                                        <ul class="period-list" id="course-item-list"> 
                                                            <li class="period lesson-item lesson-item-262" data-id="262" data-num="1"  v-for="item  in stuVideoArr" :key="item.cId"  @click="learnDetail(item.cId,courseLearnId)">
                                                                <router-link to="/courseLearn"  class="course-lesson"  tag="a" title="学习视频课程">
                                                                    <i class="es-icon es-icon-done1 color-primary status-icon"></i>
                                                                        <span class="title">  
                                                                            课时{{item.cId}}：{{item.name}}</span>
                                                                        <span class="date" :title="item.duration">{{item.duration}}</span>
                                                                    <span class="course-type">
                                                                        <i class="es-icon es-icon-videoclass" data-toggle="tooltip" data-placement="top" title="视频课程"></i>
                                                                    </span>
                                                                </router-link>
                                                            </li> 
                                                            <li class="period lesson-item lesson-item-263" data-id="263" data-num="2"  v-for="(item ,completeT) in stuTestArr" :key="completeT" @click="startTestDetail(item.cId,courseLearnId)">
                                                                <router-link to="/startTest"  class="course-lesson" tag="a" title="测试课程的试卷">
                                                                    <i class="es-icon es-icon-done1 color-primary status-icon"></i>
                                                                    <span class="title"> 课时{{item.cId}}：{{item.name}}</span>
                                                                        <span class="course-type">
                                                                        <i class="es-icon es-icon-check" data-toggle="tooltip" data-placement="top" title="" data-original-title="试卷"></i>
                                                                    </span>
                                                                </router-link>
                                                            </li> 
                                                        </ul>
                                                        <!-- 正在学习 -->
                                                         <ul class="period-list" id="course-item-list"> 
                                                            <li class="period lesson-item lesson-item-262" data-id="262" data-num="1"  v-for="learn  in lVideoArr" :key="learn.cId"  @click="learnDetail(learn.cId,courseLearnId)">
                                                                    <i class="es-icon es-icon-doing color-primary status-icon"></i>
                                                                        <span class="title">  
                                                                            课时{{learn.cId}}：{{learn.name}}</span>
                                                                        <span class="date" title="视频时长01:12">{{learn.duration}}</span>
                                                                    <span class="course-type">
                                                                        <i class="es-icon es-icon-videoclass" data-toggle="tooltip" data-placement="top" title="视频课程"></i>
                                                                    </span>
                                                            </li> 
                                                            <li class="period lesson-item lesson-item-263" data-id="263" data-num="2" v-for="(learnTest,doingT) in lTestArr" :key="doingT" style="cursor:pointer" @click="startTestDetail(learnTest.cId,courseLearnId)">
                                                                    <i class="es-icon es-icon-doing color-primary status-icon"></i>
                                                                    <span class="title"> 课时{{learnTest.cId}}：{{learnTest.name}}</span>
                                                                        <span class="course-type">
                                                                        <i class="es-icon es-icon-check" data-toggle="tooltip" data-placement="top" title="" data-original-title="试卷"></i>
                                                                    </span>
                                                            </li> 
                                                        </ul>
                                                        <!-- 待学习  @click="intercept(")-->
                                                         <ul class="period-list" id="course-item-list" > 
                                                            <li class="period lesson-item lesson-item-262" data-id="262" data-num="1"   v-for="itema in unVideoArr" :key="itema.cId">
                                                                <div v-if="itema.cId === nextLearn.cId" @click="learnDetail(itema.cId,courseLearnId)" style="cursor:pointer"><i class="es-icon es-icon-undone color-primary status-icon"></i>
                                                                        <span class="title">  
                                                                            课时{{itema.cId}}：{{itema.name}}
                                                                            </span>
                                                                        <span class="date" title="视频时长01:12">{{itema.duration}}</span>
                                                                    <span class="course-type">
                                                                        <i class="es-icon es-icon-videoclass" data-toggle="tooltip" data-placement="top" title="视频课程"></i>
                                                                    </span>
                                                                </div>
                                                                <div v-else><i class="es-icon es-icon-undone color-primary status-icon"></i>
                                                                        <span class="title">  
                                                                            课时{{itema.cId}}：{{itema.name}}
                                                                            </span>
                                                                        <span class="date" title="视频时长01:12">{{itema.duration}}</span>
                                                                    <span class="course-type">
                                                                        <i class="es-icon es-icon-videoclass" data-toggle="tooltip" data-placement="top" title="视频课程"></i>
                                                                    </span>
                                                                </div>
                                                            </li> 
                                                            <li class="period lesson-item lesson-item-263" data-id="263" data-num="2" v-for="items in unTestArr" :key="items.cId">
                                                                <div v-if="items.cId === nextLearn.cId" @click="startTestDetail(items.cId,courseLearnId)" style="cursor:pointer"><i class="es-icon es-icon-undone color-primary status-icon"></i>
                                                                <span class="title"> 课时{{items.cId}}：{{items.name}}</span>
                                                                    <span class="course-type">
                                                                    <i class="es-icon es-icon-check" data-toggle="tooltip" data-placement="top" title="" data-original-title="试卷"></i>
                                                                </span>
                                                                </div>
                                                                 <div v-else><i class="es-icon es-icon-undone color-primary status-icon"></i>
                                                                    <span class="title"> 课时{{items.cId}}：{{items.name}}</span>
                                                                        <span class="course-type">
                                                                        <i class="es-icon es-icon-check" data-toggle="tooltip" data-placement="top" title="" data-original-title="试卷"></i>
                                                                    </span>
                                                                    </div>
                                                            </li> 
                                                        </ul>
                                                       
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
                                                            <div class="media-left media-middle" >                       
                                                                <img class="avatar-sm" src="http://edusoho-demo.b0.upaiyun.com/files/default/2015/05-26/0925404c5440489293.jpeg" alt="无图">
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="title">
                                                                        <i class="es-icon es-icon-help color-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="问答"></i>
                                                                        <a href="javascript:;">{{item.ask}}</a>
                                                                </div>
                                                                
                                                                <div class="metas text-sm">
                                                                <a href="javascript:;" class="color-gray">{{item.askName}}</a>
                                                                <span>发起了问答</span>
                                                                        
                                                                • <span>{{item.askTime | dateconversion}}</span>
                                                                </div>
                                                            </div>
                                                            <div class="metas text-sm answer" v-if="(item.answer != null)">
                                                            <div class="color-gray">
                                                               <span style="color:#313131">{{item.answerName}} 回复:</span> {{item.answer}}
                                                            </div>
                                                            </div>
                                                            <div class="media-data hidden-xs" @click="handSpot(item.did,item.state)">
                                                                <span>{{item.spot}}<br><i :class="item.state | spotFittler" class="fa " aria-hidden="true"></i></span>
                                                            </div>
                                                            </div>
                                                            </div>
                                                            
                                                        </div>
                                                </div>
                                            </div>
                                            <div id="askbtn" class="clearfix">
                                                <button class="btn btn-primary btn-sm pull-right" @click="showAsk()">发起问答</button>
                                            </div>
                                                <form id="ask-form" method="post" style="display:none;">
                                                    <div class="form-group controls">
                                                        <textarea class="form-control" rows="8" data-display="评价详细内容" v-model="asked.content">这是一个问答</textarea>
                                                    </div>
                                                    <div class="form-group clearfix">
                                                        <span class="text-success pull-left" style="display: none;">问答已保存！</span>
                                                        <a class="btn btn-primary pull-right js-btn-save" data-loading-text="正在保存..." autocomplete="off" @click="handelAddAsk">保存</a>
                                                        <a href="javascript:;" class="btn btn-link pull-right" @click="handelcancelAsk">取消</a>
                                                    </div>
                                                </form>
                                              <v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
                                        </div>
                                        <div class="tab-pane" id="tab3"  v-if="(fileArr.data)!=[]">
                                          <div class="course-detail-content">
                                                <div class="es-piece">  
                                                    <div class="piece-body"   v-if="(fileArr.data)!=''">
                                                          <ul class="period-list" id="course-item-list"> 
                                                            <li class="period lesson-item lesson-item-262" data-id="262" data-num="1"  v-for="item  in fileArr.data" :key="item.fId">
                                                                    <i class="es-icon es-icon-done1 color-primary status-icon"></i>
                                                                        <span class="title" >{{item.name}}</span>
                                                                        <span class="course-type">
                                                                            <a :href="item.path" download="资料下载">
                                                                               <i class="es-icon es-icon-filedownload" data-toggle="tooltip" data-placement="top" title="资料下载"></i>
                                                                            </a>
                                                                        </span>
                                                            </li> 
                                                        </ul>
                                                    </div>
                                                    <div class="piece-body" v-else>
                                                          <h3>暂无资料╭(╯^╰)╮</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="tab4">
                                          <div class="course-detail-content">
                                                <div class="es-piece">
                                                    <div class="piece-body" >
                                                        <div class="js-reviews" data-widget-cid="widget-4" v-for="items in evaluateArr.data" :key="items.cId">
                                                            <div class="media media-evaluate">
                                                            <div class="media-left">
                                                                <span class=" js-user-card"  data-user-id="1">
                                                                    <img  v-if="items.path" class="avatar-sm" :src="items.path" alt="喔噢! 图片丢失了">
                                                                     <img v-else class="avatar-sm" src="https://xueyuan-images.oss-cn-beijing.aliyuncs.com/user-default.png">
                                                                </span>
                                                        
                                                            </div>
                                                            <div class="media-body thread-post">
                                                                <div class="title">    <span class="link-dark ">{{items.userName}}</span>
                                                        &nbsp;&nbsp;
                                                                {{items.time | dateconversion}}
                                                                </div>
                                                                <span class="score" v-for="item in items.score" :key="item.content">
                                                                <i class="es-icon es-icon-star color-warning"></i>
                                                                </span>
                                                                <div class="content">
                                                                <div class="short-content">{{items.content}}
                                                                </div>
                                                                </div>
                                                                <div class="thread-subpost-container subcomments clearfix hide">
                                                                <div class="thread-subpost-content">
                                                                    
                                                        <ul class="media-list thread-post-list thread-subpost-list">
                                                        </ul>
                                                                </div>
                                                                
                                                                            <div class="thread-subpost-morebar clearfix hide">
                                                                    <button class="btn btn-default btn-xs pull-right js-toggle-subpost-form">回复</button>
                    </div>
                    <form method="post" action="/course/39/review/1/post" class="thread-subpost-form ">
                        <div class="form-group">
                            <div class="controls">
                                <textarea class="form-control" name="content" data-display="内容"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="hidden" name="_csrf_token" value="BeBAmHww9nKD_p3egJlJ70rQ_hB7r15rdF7PFE1Uftg">
                            <button type="submit" data-loading-text="正在发表" class="btn btn-primary btn-sm pull-right">发表</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
    </div>
    <div style="margin-top:20px"></div>
    <div id="reviewbtn" class="clearfix">
        <button class="btn btn-primary btn-sm pull-right" @click="showReview(score)">发表评价</button>
    </div>
    <v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
    <form id="review-form" method="post" style="display:none;">
        <div class="star-ratings"><span style="float:left">请打分：</span>
            <div class="stars stars-example-bootstrap">
                <select id="example-bootstrap" v-model="score">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>
        <div class="form-group controls">
            <textarea class="form-control" rows="8" data-display="评价详细内容" v-model="review.content">课程很实用，老师讲的很好很易懂，赞！</textarea>
        </div>
        <div class="form-group clearfix">
            <span class="text-success pull-left" style="display: none;">评价已保存！</span>
            <a class="btn btn-primary pull-right js-btn-save" data-loading-text="正在保存..." autocomplete="off" @click="handelAddReview">保存</a>
            <a href="javascript:;" class="btn btn-link pull-right" @click="handelcancel">取消</a>
        </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    <div class="tab-pane" id="tab5">
        <div class="course-detail-content">
            <div class="es-piece">
                <div class="piece-body">
                    <ul class="media-list">
                        <li class="empty tac text-muted mvl" v-html="objQuery.introduce">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title"><i class="es-icon es-icon-explore"></i>相关课程</h3>
        </div>
        <div class="panel-body">
            <div class="course-list no-shadow no-margin">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-xs-6 " v-for="indent  in identcalArr" :key="indent.cId" @click="comingclicked(indent.cId)">
                        <div class="course-item">
                            <div class="course-img">
                                <a href="javascript:;" target="_blank">
                                    <img :src="indent.imgPath" alt="课程发布指南" class="img-responsive" />
                                </a>
                            </div>
                            <div class="course-info">
                                <div class="title">
                                    <a class="link-dark" href="javascript:;" target="_blank">
                                        {{indent.title}}
                                    </a>
                                </div>
                                <div class="metas clearfix">
                                    <span class="num"><i class="es-icon es-icon-people"></i>{{indent.peoCount}}</span>
                                    <span class="comment"><i class="es-icon es-icon-textsms"></i>{{indent.commentCount }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="col-lg-3 col-md-4  course-sidebar">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title"> <i class="es-icon es-icon-assignmentind"></i> 授课教师
                </h3>
            </div>
            <div class="panel-body">
                <div class="media media-default">
                    <div class="media-left">
                        <a class=" js-user-card" href="javascript:;" data-user-id="1">
                            <img class="avatar-md" v-if="(queryUserDetailsArr.path)" :src="queryUserDetailsArr.path">
                            <img class="avatar-md" v-else src="https://xueyuan-images.oss-cn-beijing.aliyuncs.com/user-default.png">
                        </a>
                    </div>
                    <div class="media-body">
                        <div class="title">
                            <a class="link-dark link-light" href="javascript:;">{{queryUserDetailsArr.nickName}}</a>
                        </div>
                        <div class="content">
                            {{queryUserDetailsArr.userName}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">
                    <i class="es-icon es-icon-personadd"></i> 最新学员
                </h3>
            </div>
            <div class="panel-body">
                <ul class="user-avatar-list clearfix">
                    <li v-for="user in this.queryuserArr" :key="user.u_id">
                        <img v-if="user.head_img_url" class="avatar-sm" :src="user.head_img_url" :alt="user.u_id">
                        <img v-else class="avatar-sm" src="https://xueyuan-images.oss-cn-beijing.aliyuncs.com/user-default.png" :alt="user.u_id">
                    </li>
                </ul>
            </div>
        </div>
        <div class="panel panel-default student-dynamic">
            <div class="panel-heading">
                <h3 class="panel-title"><i class="es-icon es-icon-recentactors"></i>学员动态</h3>
            </div>
            <div class="panel-body">
                <div class="media media-number-o color-gray text-overflow" v-for="(dynamic,stuDynamic) in  this.dynamicArr" :key="stuDynamic">
                    <a class="link-dark " href="javascript:;">{{dynamic.userName}}</a> {{dynamic.state | statusFiltercn}}
                    <a class="link-dark" href="javascript:;" title="来自《测试用的课程》">{{dynamic.name}}</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div data-v-7c66a6a2="" id="mask" class="html-mask"></div>
    </div>
</template>
<script>
    import "../../../static/assets/libs/jquery/1.11.2/jquery";
    import "../../../static/assets/libs/jquery.barrating";
    require('../../../static/assets/css/bootstrap-stars.css');
    import {
        comingclicked,
        startTestDetail,
        learnDetail
    } from "../../../static/bundles/fitler/fitler";
    import {
        delAtive
    } from "../../../static/assets/libs/echo.js/1.7.0/navMobile.js";
    import {
        classList,
        courseclassList,
        queryuser,
        identcal,
        dynamic,
        queryClassHour,
        queryCurriculum,
        communication,
        file,
        evaluate,
        queryUserDetails,
        addReview,
        saveAsk,
        spot,
        click,
        operationCollect
    } from "../../api/article";
    import pagination from '@/components/articlenav/article/artPage/pagination'
    export default {
        filters: {
            statusFiltercn(status) {
                const statusMap = {
                    1: '已完成学习了',
                    0: '开始学习'
                }
                return statusMap[status]
            },
            //收藏
            collection(status) {
                const statusCollection = {
                    1: '已收藏',
                    0: '收藏'
                }
                return statusCollection[status]
            },
            collections(status) {
                const statusCollection = {
                    1: ' es-icon-bookmark',
                    0: ' es-icon-bookmarkoutline'
                }
                return statusCollection[status]
            },
            spotFittler(status) {
                const statusCollection = {
                    0: ' fa-thumbs-o-up',
                    1: ' fa-thumbs-up'
                }
                return statusCollection[status]
            },
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
                courseclearningList: [],
                coursecunlearnedList: [],
                coursecstudyList: [],
                learnElement: [],
                unTestArr: [],
                unVideoArr: [],
                lVideoArr: [],
                lTestArr: [],
                stuVideoArr: [],
                stuTestArr: [],
                evaluateArr: [],
                objQuery: [],
                discussCountList: [],
                commentCountList: [],
                queryuserArr: [],
                queryClassHourArr: [],
                queryCurriculumArr: [],
                dynamicArr: [],
                identcalArr: [],
                communicationArr: [],
                queryUserDetailsArr: [],
                DATE: 0,
                review: {
                    content: '课程很实用，老师讲的很好很易懂，赞！',
                },
                asked: {
                    content: '这是一个问答',
                },
                score: 5,
                fileArr: [],
                nextLearn: null,
                dismiss: false,
                userToken: this.$store.getters.token,
                startScorse: 0,
                cId: parseInt(this.$route.params.id),
                tIds: 0,
                uId: 0,
                total: 0, // 记录总条数
                pageSize: 10, // 每页显示条数
                current: 1, // 当前的页数==page1
                pagegroup: 0, //页码
                //传入courseLearn 课程 的id 
                courseLearnId: parseInt(this.$route.params.id),
                isAsk:false
            };
        },
        beforeCreate() {
            this.courseLearnId = parseInt(this.$route.params.id)
        },
        created() {
            this.delAtive();
            this.courseClassListData();
            this.queryuserData();
            this.dynamicData();
            this.queryClassHourData();
            this.queryCurriculumData();
            this.clickData()
            // console.log(this.homeClass[index]);
        },
        mounted() {
            this.isDisplay()
        },
        methods: {
            comingclicked,
            startTestDetail,
            delAtive,
            learnDetail,
            communication,
            //点赞
            handSpot(did,state){
                if(state == 0){
                    spot(did,this.userToken).then(response=>{
                        this.communicationData();
                     })
                }
                // console.log( state)
                

            },

            changeCollect(){
                operationCollect(this.courseLearnId,this.queryCurriculumArr.state,this.userToken).then(response=>{
                    if(response.data.code == 200){
                        this.queryCurriculumArr.state == 1 ?  this.queryCurriculumArr.state =0: this.queryCurriculumArr.state = 1
                    }
                })

            },
            handleDownload(url, filename) {
                var eleLink = document.createElement('a')
                eleLink.download = filename
                eleLink.style.display = 'none'
                // 字符内容转变成blob地址
                eleLink.href = url
                // 触发点击
                document.body.appendChild(eleLink)
                eleLink.click()
                // 然后移除
                document.body.removeChild(eleLink)
            },
            isDisplay() {
                $("header").css({
                    "display": "block"
                })
                $("footer").css({
                    "display": "block"
                })
                $("#esbar").css({
                    "display": "block"
                })
            },
            //点击量
            clickData() {
                click(this.cId).then(response => {
                })
            },
            courseClassListData() {
                //学习中的课时集合 
                this.cId = parseInt(this.$route.params.id)
                courseclassList(this.cId, this.userToken).then(response => {
                    this.courseclearningList = response.data.data.learningList
                    for (const ikey in this.courseclearningList) {
                        const learnElement = this.courseclearningList[ikey];
                        if (learnElement.type == 1) {
                            this.lVideoArr.push(learnElement)
                        } else {
                            this.lTestArr.push(learnElement)
                        }
                    }
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
                    this.coursecstudyList = response.data.data.studyList;
                    for (const keys in this.coursecstudyList) {
                        const stuElement = this.coursecstudyList[keys];
                        if (stuElement.type == 1) {
                            this.stuVideoArr.push(stuElement)
                        } else {
                            this.stuTestArr.push(stuElement)
                        }
                    }
                    // 问答
                    if (this.courseclearningList.length > 0) {
                        this.nextLearn = this.courseclearningList[0]
                    } else if (this.coursecunlearnedList.length > 0) {
                        this.nextLearn = this.coursecunlearnedList[0]
                    } else if (this.coursecstudyList.length > 0) {
                        this.nextLearn = this.coursecstudyList[0]
                    } else {
                        this.nextLearn = null
                    }
                    this.discussCountList = response.data.data.discussCount;
                    this.commentCountList = response.data.data.commentCount;
                });
            },
            //最新学员
            queryuserData() {
                queryuser(this.courseLearnId).then(response => {
                    this.queryuserArr = response.data.data
                })
            },
            //课程详情页面头部课程信息
            queryCurriculumData() {
                this.cId = parseInt(this.$route.params.id)
                queryCurriculum(this.cId, this.userToken).then(response => {
                    this.queryCurriculumArr = response.data.data
                    this.objQuery = this.queryCurriculumArr.curriculum
                    this.startScorse = Math.round(this.queryCurriculumArr.avgScore)
                    this.tIds = this.objQuery.tId
                    this.uId = this.objQuery.uId
                    this.identcalData(this.tIds)
                    this.queryUserDetailsData(this.tIds);
                })
            },
            //相关课程
            identcalData() {
                this.cId = parseInt(this.$route.params.id)
                identcal(this.tIds, this.cId).then(response => {
                    this.identcalArr = response.data.data
                })
            },
            //学员动态
            dynamicData() {
                dynamic(this.courseLearnId, 8).then(response => {
                    this.dynamicArr = response.data.data
                })
            },
            //课程详情页面课时学习数据
            queryClassHourData() {
                queryClassHour(this.courseLearnId, this.userToken).then(response => {
                    this.queryClassHourArr = response.data.data
                })
            },
            //查看课程的所有问答
            communicationData() {
                communication(this.courseLearnId, this.userToken, this.current).then(response => {
                    this.communicationArr = response.data.data
                    this.total = this.communicationArr.total
                    this.pagegroup = this.communicationArr.pageNum
                    this.pageSizes = this.communicationArr.pageSize
                })
            },
            //查看课程的所有资料
            fileData() {
                file(this.courseLearnId, this.current).then(response => {
                    this.fileArr = response.data.data
                })
            },
            //查看课程的所有评价
            evaluateData() {
                evaluate(this.courseLearnId, this.current).then(response => {
                    this.evaluateArr = response.data.data
                    this.total = this.evaluateArr.total
                    this.pagegroup = this.evaluateArr.pageNum
                    this.pageSizes = this.evaluateArr.pageSize
                    console.log('查看课程的所有评价', this.total)
                })
            },
            //查看课程的授课讲师
            queryUserDetailsData() {
                queryUserDetails(this.uId).then(response => {
                    this.queryUserDetailsArr = response.data.data
                })
            },
            //分页
            pagechange: function(currentPage, pageSize) {
                this.current = currentPage
                this.pageSizes = pageSize
                if(this.isAsk){
                    this.evaluateData();
                }else{
                     this.communicationData();
                }
               
                // ajax请求, 向后台发送 currentPage, 来获取对应的数据
            },
            askFun() {
                this.communicationData();
                this.isAsk = false
            },
            filesFun() {
                this.fileData();
            },
            takingkFun() {
                this.evaluateData();
                this.isAsk = true
            },
            textFun() {},
            showReview() {
                var _self = this
                $("#review-form").css({
                    "display": "block"
                })
                $("#reviewbtn").css({
                    "display": "none"
                })
                $('#example-bootstrap').barrating({
                    theme: 'bootstrap-stars',
                    onSelect: function(el) {
                        _self.score = el
                    },
                });
            },
            showAsk() {
                var _self = this
                $("#ask-form").css({
                    "display": "block"
                })
                $("#askbtn").css({
                    "display": "none"
                })

            },
            handelcancel() {
                $("#review-form").css({
                    "display": "none"
                })
                $("#reviewbtn").css({
                    "display": "block"
                })
            },
            handelcancelAsk() {
                $("#ask-form").css({
                    "display": "none"
                })
                $("#askbtn").css({
                    "display": "block"
                })
            },
            handelAddReview() {
                if (this.review.content == '' || this.score == '') {
                    alert("评价内容不能为空")
                }
                addReview(this.cId, this.userToken, this.review.content, this.score).then(response => {
                    if (response.data.code == 200) {
                        this.evaluateData()
                        $("#review-form").css({
                            "display": "none"
                        })
                        $("#reviewbtn").css({
                            "display": "block"
                        })
                    }
                })
            },
            handelAddAsk() {
                if (this.asked.content == '') {
                    alert("问答不能为空")
                }
                saveAsk( this.asked.content, this.userToken,this.cId).then(response => {
                    if (response.data.code == 200) {
                         this.communicationData();
                        $("#ask-form").css({
                            "display": "none"
                        })
                        $("#askbtn").css({
                            "display": "block"
                        })
                    }
                })
            }
        },
        components: {
            'v-pagination': pagination,
        },
        watch: {
            $route(to, from) {
                this.courseClassListData();
                this.queryuserData();
                this.dynamicData();
                this.queryClassHourData();
                this.queryCurriculumData();
                this.$router.go(0);
            }
        }
    };
</script>
<style scoped>
    .answer {
        background-color: #eee;
        margin-top: 10px;
        margin-left: 50px;
        padding: 10px;
    }
    @font-face {
        font-family: 'Glyphicons Halflings';
        src: url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/fonts/glyphicons-halflings-regular.eot');
        src: url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/fonts/glyphicons-halflings-regular.woff') format('woff'), url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/fonts/glyphicons-halflings-regular.svg#glyphicons-halflingsregular') format('svg');
    }
</style>
