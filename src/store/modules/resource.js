
import {showResource} from '@/http/interface'
import { parseTime } from '@/utils'

const resource = {
    state: {
        personData:[],
        familyData:[],
        bankData:[],
        idData:[]
       

    },

    mutations: {
        GET_RESOURCE: (state, data) => {
            state.personData=[]
            state.familyData=[]
            state.bankData=[]
            state.idData=[]
            let myData=data.personSecurityInfo
                state.personData.push( 
                {
                    name:myData.name,
                    sex:myData.sex,
                    date:parseTime(myData.birthDate),
                    id:myData.idName+' | '+myData.idNumber})
            data.familyInfo.forEach((item,index)=>{
                state.familyData.push({
                    relation:item.relativeName,
                    name:item.name,
                    sex:item.sex,
                    date:parseTime(item.birthDate),
                    id:item.idName+' | '+item.idNumber
                })
            })
            data.bankAndIdInfo.forEach((item,index)=>{
                state.bankData.push({
                    title:"银行卡照片",
                    name:item.bankName+'|'+item.bankAccount+'|'+item.accountName,
                    pic1:item.images[2].filePath?item.images[2].filePath:item.images[2].qrCodeUrl,
                    pic2:item.images[3].filePath?item.images[3].filePath:item.images[3].qrCodeUrl,
                    
                })
                state.idData.push({
                    title:"身份证照片",
                    name:item.idName+'|'+item.idNumber+'|'+item.accountName,
                    pic1:item.images[0].filePath?item.images[0].filePath:item.images[0].qrCodeUrl,
                    pic2:item.images[1].filePath?item.images[1].filePath:item.images[1].qrCodeUrl,
                    
                })

            })
           
        }
    },
  
    actions: {
        showAllResource({ commit }, id){
            showResource(id).then( (response) => {
               commit('GET_RESOURCE', response.data)
            }).catch((error) => {
                console.log(error);
            })
          }
  
    }
  }
  
  export default resource