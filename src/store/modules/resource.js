
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
            let myData=data.personSecurityInfoResponse
                state.personData.push( 
                {
                    name:myData.name,
                    sex:myData.sex,
                    date:parseTime(myData.birthDate),
                    id:myData.idNumber})
            data.familyInfo.forEach((item,index)=>{

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