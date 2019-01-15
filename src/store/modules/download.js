
import {downloadMaterial} from '@/http/interface'

const download = {
    state: {
        list:[
            {name:'download.team_insurance_apply',description:'elsa随便写的',isShow:true,isActive:false,src:""},
            {name:'download.insurance_notice',description:'木得需求，你打我呀',isShow:false,isActive:true,src:""},
            {name:'download.pay_approve',description:'略略略略略略',isShow:false,isActive:true,src:""}    
          ] 
    },

    mutations: {
        GET_MATERIAL: (state, data) => {
           state.list.forEach((item,index)=>{
               item.src=data[index].filePath
           })
          }
    },
  
    actions: {
        downloadInfo({ commit }, id){
            downloadMaterial(id).then( (response) => {
                commit('GET_MATERIAL',response.data.claimDatas)
             }).catch((error) => {
                 console.log(error);
             })
        }
       
        

    }
  }
  
  export default download