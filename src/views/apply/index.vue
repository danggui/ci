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
     <label-line  :title="title"></label-line>
 </div>
 <div class="apply-card">
     <card/>
 </div>
  </div>
</template>
<script>

import LabelLine from "@/components/LabelLine"
import Card from "@/components/Card"

export default {
  name: 'Apply',
  components:{LabelLine,Card},
  data() {
    return {
      options:[
          {value:'选项1',label:'门急诊'},
          {value:'选项2',label:'住院'} 
          ],
           value: '',
           title:'就诊信息'
    }
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

</style>
