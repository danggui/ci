<template>
  <div class="detail-container"   @click="hideOrShow">
     <div> <svg-icon  class-name="warning" icon-class="warning"/> 
       保险公司反馈的案件补充材料的内容说明
     </div>
      <div v-if="hide" :style="style">{{content}}</div>
  </div>
</template>

<script>

  export default {
    props: {
      content: {
        type: String
      },
      
    },
    data() {
      return {
       hide:false,
       style:{
         "margin":"10px 20px",
         "word-break":" break-all"
       }
      
      };
    },
    computed:{
     
    },
    watch: {
     
   },
    methods: {
     hideOrShow(){
        this.hide=!this.hide;
     }
    },
  
    
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  .detail-container{
       color: #DF8804;
       background:	#FDF5E6;
       border-radius:0px 0px 18px 18px;
       padding: 10px 16px;
       font-size: 12px;
       .warning{
         width: 14px;
         height: 14px;
         margin-right: 5px
       }
  }


</style>