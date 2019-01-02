
import {showFamily} from '@/http/interface'

const family = {
    state: {
        link:[]
    },

    mutations: {
        GET_FAMILY_INFO: (state, data) => {
           state.link=data
          }
    },
  
    actions: {
        showFamilyInfo({ commit }){
            showFamily().then( (response) => {
                commit('GET_FAMILY_INFO',response.data)
             }).catch((error) => {
                 console.log(error);
             })
        }
       
        

    }
  }
  
  export default family