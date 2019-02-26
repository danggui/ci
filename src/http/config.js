const API_HOST = process.env.API_HOST;
export default {
    method: 'get',
    // 基础url前缀
    baseURL: `${API_HOST}/api/ecosaas/ci`,
  
    // 请求头信息
    headers: {
      'Authorization' :  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJlbWFpbFwiOlwiMUAxLmNvbVwiLFwiaWROdW1iZXJcIjpcIjExMTExMTExMTExMTExMTExMVwiLFwibG9jYWxlXCI6XCJ6aF9DTlwiLFwicGVyc29uSWRcIjpcIjVjMjQ4YmVlMzU0YjAxM2IzNDk1MDVhZFwiLFwicGhvbmVcIjpcIjExMTExMTExMTExXCIsXCJ1c2VySWRcIjpcIjMzYmI3OGUwLTA5YmEtMTFlOS1hYjY1LTAwMGMyOWNhYTRmYVwiLFwidXNlcm5hbWVcIjpcImFkbWluXCJ9IiwiYXV0aCI6IiIsImV4cCI6MTU1MzY1MDY3M30.Poy-Vouv5DNTexadxWwZ7c8cZFCcuUyZ4xul415HDEAqeYas_GLXPPu35ONA9JiU8LcOfDwsfVuiPaFYHvz8ZA",
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
  