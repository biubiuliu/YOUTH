import request from '@/utils/request'
// 课程详情页面头部课程信息
export function queryCurriculum(cId,userToken) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/queryCurriculum',
    method: 'post',
    data:{
      "cId":cId,
    	"userToken":userToken
    }
  })
}
// 课程收藏
export function operationCollect(cId,type,userToken) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/operationCollect',
    method: 'post',
    data:{
      "cId": cId,
      "type": type,
      "userToken": Number(userToken)
    }
  })
}
// 首页课程分类
export function classarticle(query) {
  return request({
    url: '/youth-portal/web/portal/home/v1/queryCurriculumTypeAll',
    method: 'post',
    params: query
  })
}
// 首页课程点击量
export function click(cid) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/click',
    method: 'post',
    data:{
      "cid": Number(cid)
    }
  })
}
//课程
export function classList(tId,sort,userToken) {
  return request({
    url: '/youth-portal/web/portal/home/v1/queryCurriculumAll',
    method: 'post',
    data:{
      "tId":tId,
      "userToken":Number(userToken),
      "type":sort,
      "pageSize":8
    }
  })
}
//课程详情页课时列表
export function courseclassList(cId,userToken) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/queryClassHourList',
    method: 'post',
    data:{
      "cId":cId ,
      "userToken":userToken
    }
  })
}
//课程详情页学员动态
export function dynamic(cId, pageSize) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/dynamic',
    method: 'post',
    data:{
        "cId":cId,
        "pageSize":pageSize
    }
  })
}
//课程详情页面课时学习数据
export function queryClassHour(cId, userToken) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/queryClassHour',
    method: 'post',
    data:{
        "cId":Number(cId),
        "userToken":userToken
    }
  })
}
//课程详情页面课时学习数据
export function queryClassById(cId, userToken) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/queryClassById',
    method: 'post',
    data:{
        "cid":Number(cId)
    }
  })
}
//课时学习开始
export function start(cId,cuId,userToken) {
  return request({
    url: '/youth-portal//web/portal/curriculum/v1/study',
    method: 'post',
    data:{
      "cId":cId,
      "cuId":cuId,
      "userToken":userToken
    }
  })
}
//课时学习完成
export function complete(cId,userToken) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/complete',
    method: 'post',
    data:{
      cId:cId,
      userToken:userToken
    }
  })
}
// 最新学员
export function queryuser(cid) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/queryUser',
    method: 'post',
    data:{
        "cId":cid,
        "pageSize":3
    }
  })
}
// 课程详细页面相似课程
export function identcal(tId,cId) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/identical',
    method: 'post',
    data:{
        "tId":tId,
        "cId":cId,
        "pageSize":3
    }
  })
}
// 查看课程的所有问答
export function communication(cid,userToken,page) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/communication',
    method: 'post',
    data:{
      "cid":cid,
      "userToken":Number(userToken),
      "page":page,
      "pageSize":10
    }
  })
}
// 查看课程的所有文件
export function file(cId,page) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/file',
    method: 'post',
    data:{
      "cId":Number(cId),
      "pageSize":10,
      "page":page
    }
  })
}
// 查看课程的所有评价
export function evaluate(cuid,page) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/evaluate',
    method: 'post',
    data:{
      "cuid":cuid,
      "page":page,
      "pageSize":10
    }
  })
}
// 添加评价
export function addReview(cuid,userToken,content,score) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/saveEvaluate',
    method: 'post',
    data:{
      "cuid":cuid,
      "userToken":Number(userToken),
      "content":content,
      "score":Number(score)
    }
  })
}
// 添加问答
export function saveAsk(content,userToken,cuid) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/saveAsk',
    method: 'post',
    data:{
      "ask":content,
      "userToken":Number(userToken),
      "cuid":cuid
    }
  })
}
// 问答点赞
export function spot(did,userToken) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/spot',
    method: 'post',
    data:{
      "did":did,
      "userToken":Number(userToken)
    }
  })
}

// 授课讲师
export function queryUserDetails(tId) {
  return request({
    url: '/youth-portal/web/portal/user/v1/queryUserDetails',
    method: 'post',
    data:{
    "userId":tId
    }
  })
}

// teacher
export function teacherList(query) {
  return request({
    url: '/youth-portal/web/portal/teacher/v1/teacherAll',
    method: 'post',
    data:{
      "number":query
    }
  })
}
// teacher在教课程
export function teacherCurriculumAll(userId) {
  return request({
    url: '/youth-portal/web/portal/teacher/v1/teacherCurriculumAll',
    method: 'post',
    data:{
      "userId":userId
    }
  })
}
//首页资讯最新最热
export function articleList() {
  return request({
    url: '/youth-portal/web/portal/home/v1/informationAll',
    method: 'get'
  })
}
//资讯首页栏目列表
export function newsArticle() {
  return request({
    url: '/youth-portal/web/portal/information/v1/informationColumnAll',
    method: 'get'
  })
}
//资讯首页最热前6列表 
export function hotInformationAll() {
  return request({
    url: '/youth-portal/web/portal/information/v1/hotInformationAll',
    method: 'post',
    data:{
      "columnId":0
    } 
  })
}
//资讯首页最热带封面前3列表
export function hotInformationImageAll() {
  return request({
    url: '/youth-portal/web/portal/information/v1/hotInformationImageAll',
    method: 'get'
  })
}
//资讯首页列表分页
export function informationAll(columnId,page,pageSize) {
  return request({
    url: '/youth-portal/web/portal/information/v1/informationAll',
    method: 'post',
    data:{
      "columnId": columnId,
      "page": page,
      "pageSize": pageSize
    }
  })
}
//资讯详情 
export function informationDetails(articleId) {
  return request({
    url: '/youth-portal/web/portal/information/v1/informationDetails',
    method: 'post',
    data:{
      "articleId":articleId
    } 
  })
}

//查看试卷详细信息包含试题详细信息
export function obtain(testId,userToken) {
  return request({
    url: '/youth-portal/web/portal/testPaper/obtain',
    method: 'post',
    data:{
      "id":testId,
      "userToken":userToken
    } 
  })
}
//阅卷
export function handOver(data) {
  return request({
    url: '/youth-portal/web/portal/testPaper/handOver',
    method: 'post',
    data
  })
}
//查看考试成绩
export function achievement(tid,eid) {
  return request({
    url: '/youth-portal/web/portal/testPaper/achievement',
    method: 'post',
    data:{
      "tid":tid,
	    "eid":eid
    } 
  })
}
//查看考试做题记录
export function Record(tid,eid) {
  return request({
    url: '/youth-portal/web/portal/testPaper/Record',
    method: 'post',
    data:{
      "tid":tid,
	    "eid":eid
    } 
  })
}