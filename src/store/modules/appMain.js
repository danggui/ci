
import {isMaterial,isStatus} from '@/http/interface'

const appMain = {
    state: {
        material:true,
        status:true
      
    },

    mutations: {
        CHECK_MATERIAL: (state, isMaterial) => {
           state.material=isMaterial
          },
          CHECK_STATUS: (state, isStatus) => {
            state.status=isStatus
         },
       
    },
  
    actions: {
        checkMaterial({ commit }, id) {
                isMaterial(id).then( (response) => {
                const isMaterial=response.data.replenishClaimMaterial 
                commit('CHECK_MATERIAL', isMaterial)
            }).catch((error) => {
                console.log(error);
            })
           
          },
          checkStatus({ commit }, id) {
            isStatus(id).then( (response) => {
            const isStatus=response.data.familyCertificate
            commit('CHECK_STATUS', isStatus)
        }).catch((error) => {
            console.log(error);
        })
       
      }
         
  
    }
  }
  
  export default appMain