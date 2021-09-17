import request from '@/utils/request.js'

export const reqGetHotData = () => request({ url: '/search/hot' })

export const reqSearchResultList = (words) =>
  request({
    method: 'get',
    url: '/search',
    params: {
      keywords: words,
      limit: 20,
    },
  })
