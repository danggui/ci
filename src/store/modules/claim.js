import {showClaim,deleteClaim} from '@/http/interface'
import { parseTime } from '@/utils'
const claim = {
    state: {
        tableData:[],
        claimLog:[],
        isDraft:[],
        total:0

    },
    mutations: {
        GET_CLAIM: (state, data) => {
            state.tableData=[]
            state.claimLog=[]
            state.isDraft=[]
            state.total=data.length
            data.forEach((item,index)=>{
                let logItem=[] ;
                let detail={};
                let image=[];
                let des=[];
                //存在详情
                if(item.accessorys){
                    item.accessorys.forEach((item2,index2)=>{
                        image.push(
                           item2.thumbPath
                        )
                    })
                }
               
                if(item.claimInvoices){
                    item.claimInvoices.forEach((item2,index2)=>{
                        des.push({name:item2.invoiceCode,
                            value:item2.invoiceValue,
                            third_pay:item2.thirdPay,
                            apply_amount:item2.lisuanAmount,
                            compensation:item2.compensationAmount,
                            reson:item2.compensationNote})
                    })
                }
                detail=Object.assign(detail,{image:image},{des:des})
                
                state.tableData.push({
                    data: parseTime(item.createdDate),
                    data2: parseTime(item.doctorDate),
                    name: item.name,
                    check_num: item.invoiceNumber,
                    check_amount:item.invoiceAmount,
                    pay_amount:item.compensationAmount,
                    status:item.typeName,
                    code:item.claimStatus,
                    type:item.type,
                    id:item.id,
                    detail:detail,
                    showOrHide:"查看明细"   
                })
                state.isDraft.push(item.type==3?true:false)
                item.claimStatusLogs.forEach((item2,index)=>{
                    logItem.push({
                        time:parseTime(item2.createdDate),
                        comment:item2.claimStatusName
                    })
                })
                state.claimLog.push(logItem)
            })
        },
        DELETE_CLAIM:(state, data) => {
            state.tableData.splice(data,1)
        }
           
    },
  
    actions: {
        showMyClaim({ commit }, id) {
            showClaim(id).then( (response) => {
               commit('GET_CLAIM', response.data)
            }).catch((error) => {
                console.log(error);
            })

          },
        deleteMyClaim({commit},data) {
            deleteClaim(data.id).then((response) => {
               commit('DELETE_CLAIM', data.index)
            }).catch((error) => {
                console.log(error);
            })

          },
  
    }
  }
  
  export default claim