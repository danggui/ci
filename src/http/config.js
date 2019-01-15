const API_HOST = process.env.API_HOST;
export default {
    method: 'get',
    // 基础url前缀
    baseURL: `http://${API_HOST}/ecosaasci/api/ecosaas/ci`,
    
    // 请求头信息
    headers: {
      'Authorization' : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJsb2NhbGVcIjpcInpoX0NOXCIsXCJ1c2VySWRcIjpcIjVcIixcInVzZXJuYW1lXCI6XCJhZG1pblwifSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1NDgzMTg5MjN9.QG5FTvInBN0X7v5z8OHrWxU2LrfNye91pOwSoFL-jmb0pfbDd43yKH3kKhW8-r-umgoijKzUHsxS-1u80JkPnw",
      'TenantId':  1
    },
    // 参数
    data: {},
    // 设置超时时间
    timeout: 10000,
    // 携带凭证
    withCredentials: true,
    // 返回数据类型
    responseType: 'json'
  }
  