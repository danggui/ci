
import {showInfo,showEditInfo,uploadImage,updateImage,deleteImage,saveApply,saveEdit} from '@/http/interface'
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
        isOK:false,
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
        info:[],
        edit_id:"",
        isUpdate:false,
        time:'',
       
    },

    mutations: {
        SET_INFO: (state, res) => {
            Storage.set("isEditting",1)
            state.isUpdate=false,
            state.options=[],
            state.identify=[],
            state.mobile=[],
            state.email=[],
            state.bank_name=[],
            state.card_num=[],
            state.card_holder=[],
            state.info=[],
            state.isOk=res.status,
            res.data.forEach((item, index)=> {
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
          SET_EDIT_INFO: (state, data) => {
           Storage.set("isEditting",1)
           const code=data.code
           const res=data.res
           const img=data.img
            
            state.edit_id=data.id
            state.isUpdate=true,
            state.options=[],
            state.identify=[],
            state.mobile=[],
            state.email=[],
            state.bank_name=[],
            state.card_num=[],
            state.card_holder=[],
            state.info=[],
            state.pic_list1=[],
            state.pic_list2=[],
            state.identify.push(res.idNumber)
            state.mobile.push(res.mobile)
            state.email.push(res.email)
            state.bank_name.push(res.bankName)
            state.card_num.push(res.bankAccount)
            state.card_holder.push(res.accountName)
            state.info.push({
                insuredId:res.personId,
                //doctorDate:item.personId,
                personSecurityId:res.id,
                tenantId:res.tenantId
                })
            state.value=res.name
            state.time=data.time


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
            pic1=img.outpatients
            pic2=img.medicals
            pic3= img.costs
            pic4=img.inspects
            pic5= img.others
            pic6= img.summarys       
            state.pic_list1.push(pic1)
            state.pic_list1.push(pic2)
            state.pic_list1.push(pic3)
            state.pic_list1.push(pic4)
            state.pic_list1.push(pic5)
            state.pic_list1.push(pic6)
           }
           else{
            state.pic_list2=[]
            pic7=img.outpatients
            pic8=img.medicals
            pic9= img.costs
            pic10=img.inspects
            pic11= img.others
            pic12= img.summarys  

            state.pic_list2.push(pic7)
            state.pic_list2.push(pic8)
            state.pic_list2.push(pic9)
            state.pic_list2.push(pic10)
            state.pic_list2.push(pic11)
            state.pic_list2.push(pic12)
           }
           
            
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
            Storage.set("isEditting",0)
            if(data.status==118){
                if(Storage.get("code")==115){
                state.pic_list1=[]
                }else{
                    state.pic_list2=[]
                }
            }
            
        },
        SAVE_EDIT:(state,data)=>{
            Storage.set("isEditting",0)
          
        }
    },
  
    actions: {
          showApply({ commit }, id) {
            showInfo(id).then( (response) => {
               commit('SET_INFO', {data:response.data.familySecurity,status:response.data.replenishData})
            }).catch((error) => {
                console.log(error);
            })
          },
          showEditApply({ commit }, id) {
            showEditInfo(id).then( (response) => {
               commit('SET_EDIT_INFO', {res:response.data.personSecurity,img:response.data.claimImages,time:response.data.doctorDate,code:response.data.chargeType,id:response.data.id})
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
            saveApply(data.data).then((response) => {
                commit('SAVE_APPLY', {res:response,status:data.status})
             }).catch((error) => {
                 console.log(error);
             })
          },

          saveMyEdit({commit},data){
            saveEdit(data.data,data.id).then((response) => {
                commit('SAVE_EDIT', {res:response.data,code:data.code})
             }).catch((error) => {
                 console.log(error);
             })
          },
  
    }
  }
  
  export default apply