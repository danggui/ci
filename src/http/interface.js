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

export const showFamily =(personId,type) =>{
    return axios(
        {
            url:`/personSecurity/familSecurityDetail/${personId}/${type}`,
            method:'get' ,
            
        }
    )
}

export const showClaim =(personId) =>{
    return axios(
        {
            url:`/claim/myClaim/${personId}/0`,
            method:'get' ,
            
        }
    )
}
export const showResource =(personId) =>{
    return axios(
        {
            url:`/personSecurity/mySecurity/${personId}`,
            method:'get' ,
        }
    )
}


// 默认全部导出
export default {
    isMaterial,
    showInfo,
    downloadMaterial,
    showFamily,
    showClaim,
    showResource
}