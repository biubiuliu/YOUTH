import request from '@/utils/request'

export function getUserInfo(token) {
  return request({
    url: '/youth-portal/web/portal/user/v1/queryUserDetails',
    method: 'post',
    data: {
      'userId': token
    }
  })
}

export function updateUser(data) {
  return request({
    url: '/youth-portal/web/portal/user/v1/UpdateUser',
    method: 'post',
    data
  })
}

export function uploadFile(data) {
  return request({
    url: '/youth-portal/web/portal/user/v1/uploadImage',
    method: 'post',
    data
  })
}
