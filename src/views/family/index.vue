<template>
  <div class="family-container ">
   <div class="family-form" v-for="item in options" :key="item">
      <div class="form-title"><svg-icon class-name="arrow-icon"  icon-class="double-arrow" />保单1</div>
      <div class="form-table">
        <table-list :tableData="tableData"  :tableStyle="{ width:'100%'}" cellspacing="0" :s_showByRow="true"/>
        <table-list :tableData="detailData"  :tableStyle="{ width:'100%'}" cellspacing="0" :s_showByRow="false" :period="period"/>
      </div>
   </div>
  </div>
</template>
<script>
import TableList from '@/components/TableList'
export default {
  name: 'Family',
  components:{TableList},
  computed:{
     options(){
          return [1,2,3]
    },
    tableData(){
        return [
        {key: '姓名', value: 'qweq'},
        {key: '性别', value: '男'},
        {key: '出生日期', value: '2017-03-01'},
        {key: '身份证号', value: '34324234324'},
        {key: '手机号码', value: '1232312321321321'},
        {key: '电子邮箱', value: '1232132131@0930.com'},
        {key: '银行卡', value: '12321321321321'},
      ];
        },
      period(){
        return "2312222222222222222222222222222222222"
      },
      detailData(){
        return [
          {
            type:"qqweqw",
            scope:'23423232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323',
            amount:"一年"
          },
          {
            type:"qqweqw",
            scope:'23423232323232323232323232323232323232323233232323232323232323232323233232323232323232323232323233232323232323232323232323233232323232323232323232323233232323232323232323232323233232323232323232323232323233232323232323232323232323233232323232323232323232323233232323232323232323232323233232323232323232323232323233232323232323232323232323233232323232323232323232323233232323232323232323232323233232323232323232323232323233232323232323232323232323233232323232323232323232323233232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323',
            amount:"一年"
          },
          {
            type:"qqweqw",
            scope:'23423232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323',
            amount:"一年"
          }




        ]
      }
  },

  created(){
       this.$store.dispatch('showFamilyInfo',1);
        
  },

  methods:{
    
   
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scope>

.family-status{
     .is-active{
          background: #FFFFFF!important;  
      }
    .family-status-card{
        position: absolute;
        top: 0px;
        width: 160px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        left: 43px;
        top: 31px;
        border-radius:10px 10px 0px 0px;
        background: #F2F2F2;
        color: #666666;
    }
  :nth-child(2){
      left: 208px;
  }
  :nth-child(3){
      left: 373px
  }
}

.family-container{
  color: #333333;
  .arrow-icon{
    color: #666666;
    margin: 0 5px 0 10px;
  }

  .form-table{
    margin: 10px 0 30px;
  }
}



</style>
