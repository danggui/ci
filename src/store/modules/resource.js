
import {showResource,uploadImage} from '@/http/interface'
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
                    sex:myData.sexName,
                    date:parseTime(myData.birthDate),
                    id:myData.idName+' | '+myData.idNumber})
            data.familyInfo.forEach((item,index)=>{
                state.familyData.push({
                    relation:item.relativeName,
                    name:item.name,
                    sex:item.sexName,
                    date:parseTime(item.birthDate),
                    id:item.idName+' | '+item.idNumber
                })
            })
            data.bankAndIdInfo.forEach((item,index)=>{
                state.bankData.push({
                    title:"银行卡照片",
                    name:item.bankName+'| '+item.bankAccount+'| '+item.accountName,
                    pic1:item.idAndBankImages.frontBankImage?item.idAndBankImages.frontBankImage.filePath:"",
                    //accessoryType1:item.images[2]?item.images[2].accessoryType:"",
                    pic2:item.idAndBankImages.reverseBankImage?item.idAndBankImages.reverseBankImage.filePath:"",
                    //accessoryType2:item.images[3]?item.images[3].accessoryType:"",
                    data1:{
                        personId:item.personId,
                        accessoryType:3
                    },
                    data2:{
                        personId:item.personId,
                        accessoryType:4
                    }
                    
                })
                state.idData.push({
                    title:"身份证照片",
                    name:item.idName+'| '+item.idNumber+'| '+item.accountName,
                    pic1:item.idAndBankImages.frontIdImage?item.idAndBankImages.frontIdImage.filePath:"",
                    //accessoryType1:item.images[0]?item.images[0].accessoryType:"",
                    pic2:item.idAndBankImages.reverseIdImage?item.idAndBankImages.reverseIdImage.filePath:"",
                    //accessoryType2:item.images[1]?item.images[1].accessoryType:"",
                    data1:{
                        personId:item.personId,
                        accessoryType:1
                    },
                    data2:{
                        personId:item.personId,
                        accessoryType:2
                    }
                    
                })

            })
           
        },
        UPLOAD_RESOURCE_IMAGE:(state,data)=>{
              const id=data.id
              const type=data.type
              const res=data.res
               if(type==1||type==2){
                   state.idData.forEach((item,index)=>{
                       if(type==1&&id==item.data1.personId){
                        item.pic1=res
                        return
                       }
                       else if(type==2&&id==item.data2.personId){
                        item.pic2=res
                        return
                       }
                   })
               }
               else  if(type==3||type==4){
                state.bankData.forEach((item,index)=>{
                    if(type==3&&id==item.data1.personId){
                     item.pic1=res
                     return
                    }
                    else if(type==4&&id==item.data2.personId){
                     item.pic2=res
                     return
                    }
                })
            }
        }
    },
  
    actions: {
        showAllResource({ commit }, id){
            showResource(id).then( (response) => {
               commit('GET_RESOURCE', response.data)
            }).catch((error) => {
                console.log(error);
            })
          },
          uploadResourseImage({commit},data){
            uploadImage(data.data).then( (response) => {
                commit('UPLOAD_RESOURCE_IMAGE',{res:response.data.filePath,id:data.insuredId,type:data.accessoryType})
             }).catch((error) => {
                 console.log(error);
             })
           
          },

  
    }
  }
  
  export default resource