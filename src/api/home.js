import request from '@/utils/request.js'

export function reqGetData() {
  return request({
    method: 'get',
    url: '/personalized',
    params: {
      limit: 6,
    },
  })
}

export const reqGetNewData = () =>
  request({
    method: 'get',
    url: '/personalized/newsong',
  })
