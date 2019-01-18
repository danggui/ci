<template>
  <div class="apply-container ">
  <div class="apply-choose">
   <el-select v-model="department" placeholder="请选择" size="small" @change="chooseDepart">
        <el-option
         v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>
 </div>
 <div class="apply-label">
     <label-line  :title="title" :message="message"></label-line>
 </div>
 <div class="apply-card">
     <card :update="isUpdate" :time="defaultTime" :num="num" @getTime="doctorTime"  @getPerson="personNum"/>
 </div>
 <div class="apply-label">
     <label-line  :title="title2" :message="photoMessage"></label-line>
 </div>
 <template v-if="isOutpatient==1">
 <div class="apply-qr"  v-for="(item,index) in label1"  :key="index" >
      <q-r  :label="item.value"  :must="item.must" :type="type1[index]" :list="fileList1[index]" :code="code[0]" :id="insuredId"/>      
 </div>
 </template>
  <template v-else>
  <div class="apply-qr"  v-for="(item,index) in label2"  :key="index" >
      <q-r  :label="item.value"  :must="item.must" :type="type2[index]"  :list="fileList2[index]" :code="code[1]"  :id="insuredId"/>      
 </div>
  </template>
 <div class="apply-upload">
     <div class="check-label">
      <el-checkbox v-model="checked">我已阅读并同意理赔须知内容</el-checkbox>
      </div>
      <div v-if="!isUpdate">
           <el-button type="primary" :disabled="!checked" @click="submitForm">确认提交</el-button>
           <el-button  plain  :disabled="!checked"  @click="submitDraft">保存草稿</el-button>
      </div>
      <div v-else>
           <el-button type="primary" :disabled="!checked" @click="editForm">确认提交</el-button>
           <el-button  plain  :disabled="!checked"  @click="editDraft">保存草稿</el-button>
      </div>
 </div>
  </div>
</template>
<script>

import LabelLine from "@/components/LabelLine"
import QR from "@/components/QR"
import Card from "@/components/Card"
import Storage from "@/utils/storage"
import {getPerson} from "@/utils/auth"
export default {
  name: 'Apply',
  components:{LabelLine,Card,QR},
  data() {
    return {
      options:[
          {value:115,label:'门急诊'},
          {value:116,label:'住院'} 
          ],
           department: Storage.get("department")||'门急诊',
           isOutpatient:Storage.get("isOutpatient")||1,
           title:'就诊信息',
           message:'',
           photoMessage:'1. 请上传三个月以内的发票及凭证 | 2. 图片格式：jpg、jpeg、png，单张大小不超过3MB',
           title2:'上传凭证',
           label1:[
           {value:'门诊病历本首页及病历',index:1,must:1},
           {value:'医疗费用原始凭证',index:2,must:1},
           {value:'费用明细',index:3,must:1},
           {value:'检查报告',index:4,must:0},
           {value:'其他附件',index:5,must:0}
           ],
           label2:[
           {value:'门诊病历本首页及病历',index:6,must:1},
           {value:'医疗费用原始凭证',index:7,must:1},
           {value:'住院明细清单',index:8,must:1},
           {value:'出院小结',index:9,must:1},
           {value:'检查报告',index:10,must:0},
           {value:'其他附件',index:11,must:0}
           ],
           checked: false,
           checkFilled:true,
           type1:["101","102","103","104","105"],
           type2:["106","107","108","109","110","111"],
           code:[115,116],
           defaultTime:new Date() ,
           num:0
           }
          
  },
  computed:{
      fileList1(){
          return this.$store.state.apply.pic_list1
      },
      fileList2(){
          return this.$store.state.apply.pic_list2
      },
      isUpdate(){
          return this.$store.state.apply.isUpdate
      },
      insuredId(){
          return this.$store.state.apply.info[this.num].insuredId
      }
     
  },
  mounted(){
      //this.getIntervalList();
      //setInterval(this.getIntervalList, 500000);
  },
  methods:{
    doctorTime(time){
        this.defaultTime=time
    },
    personNum(item){
       this.num=item
        this.$store.dispatch('getImageList',{id:this.insuredId,code:115,kind:0})
        this.$store.dispatch('getImageList',{id:this.insuredId,code:116,kind:0})
    },
     getIntervalList(){
         this.$store.dispatch('getImageList',{id:getPerson(),code:115,kind:0})
         this.$store.dispatch('getImageList',{id:getPerson(),code:116,kind:0})
     },
     chooseDepart(val){
         if(val==115){
          this.isOutpatient=1
          Storage.set("isOutpatient",1)
          Storage.set("department",'门急诊') 
          Storage.set("code",115) 
         }
          else if(val==116){
              this.isOutpatient=2
              Storage.set("isOutpatient",2)
              Storage.set("department",'住院')
              Storage.set("code",116) 
          }
     },
        submitForm(){
         if(!this.checkFilled){
         this.$message({
          message: '请补充图片',
          type: 'warning'
        }); }
        const data={
            'personId':getPerson(),
            "insuredId":this.insuredId,
            "chargeType":Storage.get("code")||115,
            "submitWay":"PC",
            "doctorDate":this.defaultTime,
            "claimStatus":118,
            "personSecurityId":this.$store.state.apply.info[this.num].personSecurityId,
            "tenantId":this.$store.state.apply.info[this.num].tenantId
        }
        console.log(data)
        this.$store.dispatch("saveMyApply",{data:data,status:118})
        },
        submitDraft(){
        const data={
            'personId':getPerson(),
            "insuredId":this.insuredId,
            "chargeType":Storage.get("code")||115,
            "submitWay":"PC",
            "doctorDate":new Date(this.defaultTime),
            "claimStatus":117,
            "personSecurityId":this.$store.state.apply.info[this.num].personSecurityId,
            "tenantId":this.$store.state.apply.info[this.num].tenantId
        }
       
        this.$store.dispatch("saveMyApply",{data:data,status:117})
        },
        editForm(){
            let id= this.$store.state.apply.edit_id
            const data={
            'personId':11,
            "insuredId":this.insuredId,
            "chargeType":Storage.get("code")||115,
            "submitWay":"PC",
            "doctorDate":new Date(this.defaultTime),
            "claimStatus":118,
            "personSecurityId":this.$store.state.apply.info[this.num].personSecurityId,
            "tenantId":this.$store.state.apply.info[this.num].tenantId
        }
            this.$store.dispatch("saveMyEdit",{data:data,id:id})
        },
        editDraft(){
            let id= this.$store.state.apply.edit_id
            const data={
            'personId':11,
            "insuredId":this.insuredId,
            "chargeType":Storage.get("code")||115,
            "submitWay":"PC",
            "doctorDate":new Date(this.defaultTime),
            "claimStatus":117,
            "personSecurityId":this.$store.state.apply.info[this.num].personSecurityId,
            "tenantId":this.$store.state.apply.info[this.num].tenantId
        }
            this.$store.dispatch("saveMyEdit",{data:data,id:id})
        }
   
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.apply-container{
   margin: 0 20px;
}

.apply-label{
 margin:  28px 0;
}
.apply-card{
    margin:  0 80px;
    line-height: 50px;
}
.apply-qr{
     margin:  0 90px;
}
.apply-upload{
     margin:  50px 90px;
     .check-label{
         margin: 30px 0;
     }
     button{
         margin-right: 20px;
     }
}

</style>
