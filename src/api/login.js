import request from '@/utils/request'

export function loginByUsername(username, password, validateCode, rememberMe) {
  const data = {
    'username': username,
    'password': password,
    'validateCode': validateCode,
    'rememberMe': rememberMe
  }
  return request({
    url: '/youth-sso/login',
    method: 'post',
    data,
    transformRequest: [
      function (data) {
        let params = '';
        for (let index in data) {
          params += index + '=' + data[index] + '&';
        }
        params = params.substr(0, params.length - 1)
        return params;
      }
    ]
  })
}

export function logout() {
  return request({
    url: '/youth-sso/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/youth-portal/web/portal/user/v1/queryUserDetails',
    method: 'post',
    data: {
      'userId': token
    }
  })
}

