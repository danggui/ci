<template>
  <div class="claim-container ">
   <el-table
    :header-cell-style='styleObj'
    :data="tableData"
    style="width: 100%;"
    :row-class-name="tableRowClassName">
    <el-table-column  align="center" 
      label="日期"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column  align="center" 
      label="姓名"
      >
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column  align="center" 
      label="日期"
      >
      <template slot-scope="scope">
      <span style="margin-left: 10px">{{ scope.row.date2 }}</span>
      </template>
    </el-table-column>
     <el-table-column  align="center" 
      prop="check_num"
      label="发票张数（申请）"
      >
    </el-table-column>
    <el-table-column  align="center" 
      prop="check_amount"
      label="发票总金额（元）"
      >
    </el-table-column>
    <el-table-column  align="center" 
      label="状态"
      :render-header="renderHeader"
     > 
    <template slot-scope="scope">
      <span style="margin-left: 10px">{{ scope.row.status }}</span>
      <i class="el-icon-caret-bottom"></i>
    </template>
    </el-table-column>
    <el-table-column   align="center"  label="操作" v-if="false">
      <template  slot-scope="scope">
        <label @click="handleEdit(scope.$index, scope.row)">
       <svg-icon class-name="edit-icon theme-purple"  icon-class="edit"   />
        </label>
         <label @click="handleDelete(scope.$index, scope.row)">
       <svg-icon class-name="edit-icon"  icon-class="delete"  />  
       </label>
      </template>
      
    </el-table-column>
     <el-table-column   align="center"  label="操作" v-else>
        <template slot-scope="scope" >
      <el-button size="mini" plain>查看明细</el-button>
       </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script>

import LabelLine from "@/components/LabelLine"


export default {
  name: 'Claim',
  components:{LabelLine},
  data() {
   return{
     tableData: [{
          date: '2016-05-02',
          date2: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          check_num: 3,
          check_amount:123213,
          status:"待提交"
        }, {
          date: '2016-05-04',
          date2: '2016-06-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          check_num:5,
          check_amount:32423,
          status:"待提交"
        }, {
          date: '2016-05-01',
          date2: '2016-08-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          check_num:7,
          check_amount:32423,
          status:"已结案"
        }, {
          date: '2016-05-03',
          date2: '2016-11-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          check_num:10,
          check_amount:'-',
          status:"理赔中"
        }],
        styleObj:{
                background:'#F6F6F6',
                fontWeight:'500',
                color:'#999999',
                height:'36px'
        },
        erw:true
   }    
  },
   methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      tableRowClassName(){
          return 'center-row';
      },
      renderHeader (h,{column}) { // h即为cerateElement的简写，具体可看vue官方文档
        return h(
          'div',
          [ 
            h('span', column.label),
            h('i', {
              class:'el-icon-caret-bottom',
              style:'margin-left:5px;'
            })
          ],
        );
       }

   }
}
</script>

<style rel="stylesheet/scss" lang="scss" >
.claim-container{
  margin: 0 0;
     .tableHead{
      background:'#F6F6F6';
      font-weight:'regular'
     }
    .edit-icon{
        margin: 2px;
        width: 18px;
        height: 18px;
     }
}


</style>
