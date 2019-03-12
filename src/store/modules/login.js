import {isLogin} from '@/http/login'

const login = {
  state: {
    personId:undefined,
    token:"",
    tenantId:""
  },
  mutations: {
    GET_PERSON_ID: (state,data) => {
     state.personId=data.personId
     state.token = data.authorization
     state.tenantId=data.tenantId
    }
},
  actions: {
    checkLogin({ commit }, token){
        isLogin(token).then( (response) => {
            commit('GET_PERSON_ID', response.data.data)
        }).catch((error) => {
            console.log(error);
            
        })
    }
  }
}

export default login
