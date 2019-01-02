
import {downloadMaterial} from '@/http/interface'

const download = {
    state: {
        link:[]
    },

    mutations: {
        GET_MATERIAL: (state, data) => {
           state.link=data
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