<template>
  <div class="resource-container ">
      <div class="form-table">
        <table-list :tableData="myData"  :tableStyle="{ width:'100%'}" cellspacing="0" :s_showByRow="3"/>
         <table-list :tableData="familyData"  :tableStyle="{ width:'100%'}" cellspacing="0" :s_showByRow="4"/>
         <table-list :tableData="bankData"  :tableStyle="{ width:'100%'}" cellspacing="0" :s_showByRow="5"/>
         <table-list :tableData="idData"  :tableStyle="{ width:'100%'}" cellspacing="0" :s_showByRow="6"/>
         
      </div>
  </div>
</template>
<script>
import TableList from '@/components/TableList'

export default {
  name: 'Resource',
  components:{TableList},
  data(){
    return {
     
    }
  },
  computed:{
   myData(){
       return this.$store.state.resource.personData
   },
   familyData(){
        return this.$store.state.resource.familyData
   },
   bankData(){
       return this.$store.state.resource.bankData
   },
   idData(){
       return this.$store.state.resource.idData
  
  }
  },
  methods:{
   
   
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scope>



</style>
