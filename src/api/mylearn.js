import request from '@/utils/request'
// 课程详情页面头部课程信息
export function queryCurriculum(cId) {
  return request({
    url: '/youth-portal/web/portal/curriculum/v1/queryCurriculum',
    method: 'post',
    data: {
      "cId": cId,
      "userToken": 1
    }
  })
}
// 我的课程
export function learnList(data) {
  return request({
    url: '/youth-portal/web/portal/user/v1/curric',
    method: 'post',
    data
  })
}
//我的考试
export function testList(data) {
  return request({
    url: '/youth-portal/web/portal/user/v1/Examination',
    method: 'post',
    data
  })
}

//我的问答
export function questionList(data) {
  return request({
    url: '/youth-portal/web/portal/user/v1/ask',
    method: 'post',
    data
  })
}
