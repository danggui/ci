
import {showInfo,uploadImage,updateImage,deleteImage,saveApply} from '@/http/interface'
function myMap() {
    return new Map()
            .set(101,0)
            .set(102,1)
            .set(103,2)
            .set(104,3)
            .set(105,4)
            .set(106,0)
            .set(107,1)
            .set(108,2)
            .set(109,3)
            .set(110,4)
            .set(111,5)
    
  }
  

const apply = {
    state: {
        value: '',
        options:[],
        identify:[],
        mobile:[],
        email:[],
        bank_name:[],
        card_num:[],
        card_holder:[],
        pic_list1:[],
        pic_list2:[],
        info:[]
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
            state.info=[],
            data.forEach((item, index)=> {
            state.identify=state.identify.concat(item.idNumber)
            state.mobile=state.mobile.concat(item.mobile)
            state.email=state.email.concat(item.email)
            state.bank_name=state.bank_name.concat(item.bankName)
            state.card_num=state.card_num.concat(item.bankAccount)
            state.card_holder=state.card_holder.concat(item.accountName)
            state.info.push({
                insuredId:item.personId,
                //doctorDate:item.personId,
                personSecurityId:item.id,
                tenantId:item.tenantId
                })
            state.options.push(
                Object.assign({},
                    {value: index },
                    {label:item.name}
                ))
            })
            state.value=state.options[0].label
           //提交前获得数据
           
          },
          UPLOAD_IMAGE:(state,data)=>{
              let type=data.res.accessoryType
              let code=data.code
              let temp=myMap().get(type)
              let newImage= data.res
              if(code==115){
             state.pic_list1[temp].push(newImage)
              }else{
                state.pic_list2[temp].push(newImage)
              }
          },
          DELETE_IMAGE:(state,data)=>{
            let type=data.res.accessoryType
            let code=data.code
            let temp=myMap().get(type)
            let id=data.res.id
            if(code==115){
                state.pic_list1[temp].splice(state.pic_list1[temp].findIndex(item => item.id === id), 1)
                 }else{
                state.pic_list2[temp].splice(state.pic_list1[temp].findIndex(item => item.id === id), 1)
                 }
         },
          UPDATE_IMAGE:(state,data)=>{
           const code=data.code
           const res=data.data
           let pic1= []
           let pic2= []
           let pic3= []
           let pic4= []
           let pic5= []
           let pic6= []
           let pic7= []
           let pic8= []
           let pic9= []
           let pic10= []
           let pic11= []
           let pic12= []
           if(code==115){
            state.pic_list1=[]
            pic1=res.outpatients
            pic2=res.medicals
            pic3= res.costs
            pic4=res.inspects
            pic5= res.others
            pic6= res.summarys       
            state.pic_list1.push(pic1)
            state.pic_list1.push(pic2)
            state.pic_list1.push(pic3)
            state.pic_list1.push(pic4)
            state.pic_list1.push(pic5)
            state.pic_list1.push(pic6)
           }
           else{
            state.pic_list2=[]
            pic7=res.outpatients
            pic8=res.medicals
            pic9= res.costs
            pic10=res.inspects
            pic11= res.others
            pic12= res.summarys  

            state.pic_list2.push(pic7)
            state.pic_list2.push(pic8)
            state.pic_list2.push(pic9)
            state.pic_list2.push(pic10)
            state.pic_list2.push(pic11)
            state.pic_list2.push(pic12)
           }
        },

        SAVE_APPLY:(state,data)=>{

        }
    },
  
    actions: {
          showApply({ commit }, id) {
            showInfo(id).then( (response) => {
               commit('SET_INFO', response.data.familySecurity)
            }).catch((error) => {
                console.log(error);
            })
          },
          uploadSingleImage({commit},data){
            uploadImage(data.formData).then( (response) => {
                commit('UPLOAD_IMAGE',{res:response.data,code:data.code})
             }).catch((error) => {
                 console.log(error);
             })
           
          },

          getImageList({commit},data){
            updateImage(data.id,data.code,data.kind).then( (response) => {
                commit('UPDATE_IMAGE', {data:response.data,code:data.code})
             }).catch((error) => {
                 console.log(error);
             })
          },
          deleteSingleImage({commit},data){
            deleteImage(data.id).then( (response) => {
                commit('DELETE_IMAGE', {res:response.data,code:data.code})
             }).catch((error) => {
                 console.log(error);
             })
          },
         
        saveMyApply({commit},data){
            saveApply(data).then((response) => {
                commit('SAVE_APPLY', response)
             }).catch((error) => {
                 console.log(error);
             })
          },
  
    }
  }
  
  export default apply