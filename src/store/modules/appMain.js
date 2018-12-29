
import {isMaterial} from '@/http/interface'

const appMain = {
    state: {
        material:true
    },

    mutations: {
        CHECK_MATERIAL: (state, isMaterial) => {
           state.material=isMaterial
          }
    },
  
    actions: {
        checkMaterial({ commit }, id) {
                isMaterial(id).then( (response) => {
                const isMaterial=response.data.replenishClaimMaterial 
                commit('CHECK_MATERIAL', isMaterial)
            }).catch((error) => {
                console.log(error);
            })
           
          
          }
  
    }
  }
  
  export default appMain