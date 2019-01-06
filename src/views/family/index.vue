<template>
  <div class="family-container ">
   <div class="family-form" v-for="(item,index) in options" :key="index">
      <div class="form-title"><svg-icon class-name="arrow-icon"  icon-class="double-arrow" />保单{{index+1}}</div>
      <div class="form-table">
        <table-list :tableData="tableData[index]"  :tableStyle="{ width:'100%'}" cellspacing="0" :s_showByRow="1" :father="$route.name"/>
        <table-list :tableData="detailData[index]"  :tableStyle="{ width:'100%'}" cellspacing="0" :s_showByRow="2" :start="start[index]" :end="end[index]" :father="$route.name"/>
      </div>
   </div>
  </div>
</template>
<script>
import TableList from '@/components/TableList'
import FamilyCard from "@/components/FamilyCard"
export default {
  name: 'Family',
  components:{TableList,FamilyCard},
  data(){
    return {
      label:[{
          status:"生效中",isActive:true
        },{
          status:"待生效",isActive:false
        },
        {
          status:"已生效",isActive:false
        }]
    }
  },
  computed:{
     options(){
          return this.$store.state.family.options
    },
    tableData(){
        return  this.$store.state.family.tableData
        },
      start(){
        return  this.$store.state.family.start
      },
      end(){
        return  this.$store.state.family.end
      },
      detailData(){
        return this.$store.state.family.detailData
      }
  },


}
</script>

<style rel="stylesheet/scss" lang="scss" scope>

.family-status{
       display: flex;
       margin-left: 2.5%;
     .is-active{
          background: #FFFFFF!important;  
      }
    .family-status-card{
        margin-right: 5px;
        width: 160px;
        height: 42px;
        line-height: 40px;
        text-align: center;
        border-radius:10px 10px 0px 0px;
        background: #F2F2F2;
        color: #666666;

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
