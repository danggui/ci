
import {showFamily} from '@/http/interface'
import { parseTime } from '@/utils'
const family = {
    state: {
        options:[],
        tableData:[],
        detailData:[] ,
        start:[],
        end:[]
            
    },

    mutations: {
        GET_FAMILY_INFO: (state, data) => {
           state.tableData=[];
           state.detailData=[];
           state.options=data;
        
           data.forEach((item,index)=>{
            let tableDataItem=[] ;
            let detailDataItem=[] ;
            tableDataItem.push({key: '姓名',value:item.personSecurity.name})
            tableDataItem.push({key: '性别',value:item.personSecurity.sex})
            tableDataItem.push({key: '出生日期',value:item.personSecurity.birthDate})
            tableDataItem.push({key: '身份证号',value:item.personSecurity.idNumber})
            tableDataItem.push({key: '手机号码',value:item.personSecurity.mobile})
            tableDataItem.push({key: '电子邮箱',value:item.personSecurity.email})
            tableDataItem.push({key: '银行卡',value:item.personSecurity.bankName+" | "+item.personSecurity.bankAccount+" | "+item.personSecurity.accountName})
            
            item.planInsuranceKinds.forEach((item2,index2)=>{
               detailDataItem.push({
                    type:item2.insuranceKindId,
                    scope:item2.guaranteeComment,
                    amount:item2.amountLimit
                })
              
            })
            state.tableData.push(tableDataItem)
            state.detailData.push(detailDataItem)
            state.start.push(parseTime(item.personSecurity.createdDate))
            state.end.push(parseTime(item.personSecurity.insuredDate))
           })
          }
    },
  
    actions: {
        showFamilyInfo({ commit },data){
            showFamily(data.id,data.type).then( (response) => {
                commit('GET_FAMILY_INFO',response.data)
             }).catch((error) => {
                 console.log(error);
             })
        }
       
        

    }
  }
  
  export default family