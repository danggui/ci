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

export const isStatus = (id) => {
    return axios({
        url: `/personSecurity/familyCertificateStatus/${id}`,
        method: 'get'
    })
}
export const downloadMaterial = (id) => {
    return axios({
        url: `/claim/claimDatas/${id}`,
        method: 'get'
    })
}

//apply
export const showInfo = (id) => {
    return axios({
        url: `/personSecurity/familySecurityInfo/${id}`,
        method: 'get'
    })
}

export const showEditInfo = (id) => {
    return axios({
        url: `/claim/claim/${id}`,
        method: 'get'
    })
}
export const uploadImage = (data) => {  
    return axios({
        url: `/upload/imageUpload`,
        method: 'post',
        data
    })
}


export const choosePeople = (data) => {  
    return axios({
        url: `/personSecurity/effectivePersonSecuritys/${data.id}/${data.date}/${data.type}`,
        method: 'get',
       
    })
}


/*
export const uploadImage = (data,type,id) => {    
    return axios({
        url: `http://192.168.96.79:7002/api/ecosaas/ci/upload/imageUpload?accessoryType=${type}&insuredId=${id}`,
        method: 'post',
        data
    })
}
*/

export const updateImage = (id,code,kind) => {   
    return axios({
        url: `/claim/claimImages/${id}/${code}/${kind}`,
        method: 'get',
    })
}
export const  deleteImage = (id) => {   
    return axios({
        url: `/accessory/accessoryFile/${id}`,
        method: 'delete',
    })
}

export const  saveApply = (data) => {  
    return axios({
        url: `/claim/claim`,
        method: 'post',
        data:data
    })
}

export const  saveEdit = (data,id) => {  
    return axios({
        url: `/claim/claim/${id}`,
        method: 'put',
        data:data
    })
}


//family
export const showFamily =(personId,type) =>{
    return axios(
        {
            url:`/personSecurity/familSecurityDetail/${personId}/${type}`,
            method:'get' ,
        }
    )
}

//claim
export const showClaim =(personId) =>{
    return axios(
        {
            url:`/claim/myClaim/${personId}/0`,
            method:'get' ,
            
        }
    )
}

export const deleteClaim =(claimId) =>{
    return axios(
        {
            url:`/claim/claim/${claimId}`,
            method:'delete' ,
            
        }
    )
}
export const getClaimDetail =(id) =>{
    return axios(
        {
            url:`/claim/claimInvoiceAndImages/${id}`,
            method:'get' ,
            
        }
    )
}

//resource
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
    downloadMaterial,
    showInfo,
    showEditInfo,
    uploadImage,
    updateImage,
    deleteImage,
    saveApply,
    saveEdit,
    showFamily,
    showClaim,
    deleteClaim,
    showResource
}