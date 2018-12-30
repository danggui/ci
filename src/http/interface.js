import axios from './api'

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出

export const isMaterial = (id) => {
    return axios({
        url: `/claim/claimMaterial/${id}`,
        method: 'get'
    })
}
export const downloadMaterial = (id) => {
    return axios({
        url: `/claim/claimDatas/${id}`,
        method: 'get'
    })
}

export const showInfo = (id) => {
    return axios({
        url: `/personSecurity/familySecurityInfo/${id}`,
        method: 'get'
    })
}


// 默认全部导出
export default {
    isMaterial,
    showInfo,
    downloadMaterial
}