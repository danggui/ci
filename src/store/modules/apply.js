
import {showInfo} from '@/http/interface'

const apply = {
    state: {
        value: '',
        options:[],
        identify:[],
        mobile:[],
        email:[],
        bank_name:[],
        card_num:[],
        card_holder:[]

    },

    mutations: {
        SET_INFO: (state, data) => {
            state.options=[],
            state.identify=[],
            state.mobile=[],
            state.email=[],
            state.bank_name=[],
            state.card_num=[],
            state.card_holder=[],
            data.forEach((item, index)=> {
            state.identify=state.identify.concat(item.idNumber)
            state.mobile=state.mobile.concat(item.mobile)
            state.email=state.email.concat(item.email)
            state.bank_name=state.bank_name.concat(item.bankName)
            state.card_num=state.card_num.concat(item.bankAccount)
            state.card_holder=state.card_holder.concat(item.accountName)
            state.options.push(
                Object.assign({},
                    {value: item.id },
                    {label:item.name}
                ))
            })
            state.value=state.options[0].label
          }
    },
  
    actions: {
          showApply({ commit }, id) {
            showInfo(id).then( (response) => {
               commit('SET_INFO', response.data.familySecurity)
            }).catch((error) => {
                console.log(error);
            })

          }
  
    }
  }
  
  export default apply