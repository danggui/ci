<template>
  <div class="apply-container ">
  <div class="apply-choose">
   <el-select v-model="value" placeholder="请选择" size="small">
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
     <card/>
 </div>
 <div class="apply-label">
     <label-line  :title="title2" :message="photoMessage"></label-line>
 </div>
 <div class="apply-qr"  v-for="(item,index) in label"  :key="index">

      <q-r  :label="item.value" :index="index"/>
         
 </div>
  </div>
</template>
<script>

import LabelLine from "@/components/LabelLine"
import QR from "@/components/QR"
import Card from "@/components/Card"

export default {
  name: 'Apply',
  components:{LabelLine,Card,QR},
  data() {
    return {
      options:[
          {value:'选项1',label:'门急诊'},
          {value:'选项2',label:'住院'} 
          ],
           value: '',
           title:'就诊信息',
           message:'',
           photoMessage:'1. 请上传三个月以内的发票及凭证 | 2. 图片格式：jpg、jpeg、png，单张大小不超过3MB',
           title2:'上传凭证',
           label:[
            { value:'门诊病历本首页及病历'},
           {value:'医疗费用原始凭证'},
           {value:'费用明细'},
           {value:'检查报告'},
           {value:'其他附件'}
           ]}
  },
  created(){
     this.$store.dispatch('showApply',1)
     },
  methods:{
     
   
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.apply-container{
   margin:  20px;
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

</style>
