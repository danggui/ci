
import {downloadMaterial} from '@/http/interface'

const download = {
    state: {
        list:[
            {name:'download.team_insurance_apply',description:'32423sfsdafadsfs222222222222',isShow:true,isActive:false,src:""},
            {name:'download.insurance_notice',description:'2ewerwerwerwe22',isShow:false,isActive:true,src:""},
            {name:'download.pay_approve',description:'2werewrwe232423444444444442342',isShow:false,isActive:true,src:""}    
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