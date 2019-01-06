<template>
  <div class="resource-container ">
      <div class="form-table">
        <table-list :tableData="myData"  :tableStyle="{ width:'100%'}" cellspacing="0" :s_showByRow="3"/>
         <table-list :tableData="familyData"  :tableStyle="{ width:'100%'}" cellspacing="0" :s_showByRow="4"/>
         <table-list :tableData="photoData"  :tableStyle="{ width:'100%'}" cellspacing="0" :s_showByRow="5"/>
         
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
        return [
           {relation:'父亲',name:"123",sex:"male",date:"23423-92-1",id:"23423423423423"},
           {relation:'mum',name:"123",sex:"male",date:"23423-92-1",id:"23423423423423"}
       ]
   },
   photoData(){
       return []
   }
   
  },

 

  methods:{
   
   
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.resource-container {



}


</style>
