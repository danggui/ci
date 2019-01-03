<template>
  <table class="myTable" :style="styleObject" v-if="s_showByRow" >
    <tr><th class='theme-purple' colspan="4">被保人信息</th></tr>
    <tr v-for="index in rowCount" :key="index">
      <td class="column">{{tableData[index*2-2].key}}</td>
      <template v-if="tableData[index*2-1] !== undefined">
          <td>{{tableData[index*2-2].value}}</td>
          <td class="column">{{tableData[index*2-1].key}}</td>
           <td >{{tableData[index*2-1].value}}</td>
      </template>
      <template v-else>
          <td colspan="3">{{tableData[index*2-2].value}}</td>
      </template>
    </tr>
  </table>
  <table class="myTable2" :style="styleObject" v-else>
    <tr><th  class='theme-purple ' colspan="4">保单详情</th></tr>
    <tr class="sub-th"><td>险种</td><td>保险范围</td><td>保额</td><td>保险期间</td></tr>
    <tr v-for="index in tableData.length" :key="index">
     <td width="120px">{{tableData[index-1].type}}</td>
     <td class="td-content">{{tableData[index-1].scope}}</td>
     <td width="120px">{{tableData[index-1].amount}}</td>
     <td class="td-content" width="100px" v-if="index==1" :rowspan="tableData.length">{{start}}<br/>至<br/>{{end}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      styleObject: {},
    };
  },
  props: ['tableData', 'tableStyle', 'showByRow','s_showByRow',"start","end"],
  computed: {
    rowCount: function() {
      return Math.ceil(this.tableData.length/2);
    }
  },
  created() {
    this.styleObject = this.tableStyle;
    if(this.showByRow !== undefined){
      this.s_showByRow = this.showByRow;
    }
  },
}
</script>
<style rel="stylesheet/scss" lang="scss" scope>
table.myTable{
    border-collapse:collapse;
    border:1px solid #DEDEDE;
    width:100%;
    font-size: 14px;
    th{
        background: #F6F6F6;
        text-align: left;
        padding-left: 25px;
        font-weight: normal;
        height: 36px;
    }
    td{
        padding: 0 20px;
    }
    tr,td{
        border:1px solid #DEDEDE;
        height: 32px;
    }
    th{
        border-top: none;
    }
     td:nth-child(odd){
         text-align:right;
         color: #999999;
    
     }
}
table.myTable2{
    border-collapse:collapse;
    border:1px solid #DEDEDE;
    width:100%;
    font-size: 14px;
    border-top: none;
    th{
        background: #F6F6F6;
        text-align: left;
        padding-left: 25px;
        font-weight: normal;
        height: 36px;
    }
     .sub-th{
         color: #999999;
    
    }
    tr,td{
        border:1px solid #DEDEDE;
        height: 32px;
        text-align: center;
    }
    tr:first-child{
        border-top: none;
    }
     td{
        padding: 8px 20px;
        word-break: break-all;
       
    }
    .td-content{
        text-align: left;
    }
   
}
</style>