<template>
  <div class="family-container ">
      <div class="family-status">
     
      <family-card v-for="(item,index) in label" :status="item.status" :key="index" :index="index" :isActive="item.isActive" @labelAction="changeStatus"/>

    </div>
   <div class="family-form" v-for="(item,index) in options" :key="index">
      <div class="form-title"><svg-icon class-name="arrow-icon"  icon-class="double-arrow" />保单1</div>
      <div class="form-table">
        <table-list :tableData="tableData[index]"  :tableStyle="{ width:'100%'}" cellspacing="0" :s_showByRow="true"/>
        <table-list :tableData="detailData[index]"  :tableStyle="{ width:'100%'}" cellspacing="0" :s_showByRow="false" :start="start[index]" :end="end[index]"/>
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

 

  methods:{
    changeStatus(index){
      this.label.forEach(item =>{
        item.isActive=false
      })
        this.label[index].isActive=true
         
    }
   
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
