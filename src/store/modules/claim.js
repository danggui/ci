
import {showClaim} from '@/http/interface'
import { parseTime } from '@/utils'

const claim = {
    state: {
        tableData:[],
        claimLog:[],
        isDraft:[]

    },

    mutations: {
        GET_CLAIM: (state, data) => {
            state.tableData=[]
            state.claimLog=[]
            state.isDraft=[]
            data.forEach((item,index)=>{
                let logItem=[] ;
                state.tableData.push({
                    data: parseTime(item.createdDate),
                    data2: parseTime(item.doctorDate),
                    name: item.name,
                    check_num: item.invoiceNumber,
                    check_amount:item.invoiceAmount,
                    pay_amount:item.compensationAmount,
                    status:"待提交",
                    code:item.claimStatus,
                    id:item.id
                })
                state.isDraft.push(item.claimStatus===(117||122)?true:false)
                item.claimStatusLogs.forEach((item2,index)=>{
                    logItem.push({
                        time:parseTime(item2.createdDate),
                        comment:item2.claimChangeComment
                    })
                })
                state.claimLog.push(logItem)

            })
        }
           
    },
  
    actions: {
        showMyClaim({ commit }, id) {
            showClaim(id).then( (response) => {
               commit('GET_CLAIM', response.data)
            }).catch((error) => {
                console.log(error);
            })

          }
  
    }
  }
  
  export default claim