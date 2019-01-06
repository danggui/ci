<template>
  <div class="claim-container ">
   <el-table
    :header-cell-style='styleObj'
    :data="tableData"
    style="width: 100%;"
    row-key="id"       
    :row-class-name="getRowClass"
    :expand-row-keys="expands"
    >
    <el-table-column  align="center" 
      label="申请日期"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.data }}</span>
      </template>
    </el-table-column>
    <el-table-column  align="center" label="就诊人">
      <template slot-scope="scope">
         <span style="margin-left: 10px">{{ scope.row.name}}</span>
      </template>
    </el-table-column>
    <el-table-column  align="center" 
      label="日期"
      >
      <template slot-scope="scope">
      <span style="margin-left: 10px">{{ scope.row.data2 }}</span>
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
      prop="pay_amount"
      label="赔付总金额（元）"
      >
    </el-table-column>
    <el-table-column  align="center" 
      label="状态"
       :filters="[{ text: '理赔中', value: '1' }, { text: '已结案', value: '2' },{ text: '待提交', value: '3' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
      :filter-multiple="isTure"
     > 
    <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p v-for="(item,index) of claimLog[scope.$index]" :key="index">{{item.time}} {{item.comment}}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.status }}<i class="el-icon-caret-bottom"></i></el-tag>
          </div>
        </el-popover>
    </template>
    </el-table-column>
     <el-table-column   align="center"  label="操作">
      <template  slot-scope="scope">
        <template  v-if="!isDraft[scope.$index]">
        <label @click="handleEdit(scope.$index, scope.row)">
            <svg-icon class-name="edit-icon theme-purple"  icon-class="edit"   />
        </label>
         <label @click="handleDelete(scope.$index, scope.row)">
            <svg-icon class-name="edit-icon"  icon-class="delete"  />  
       </label>
       </template>
        <template   v-else>
      <el-button plain @click="showDetail(scope.$index, scope.row)"> 查看明细</el-button>
        </template>
       </template>
    
    </el-table-column>
    <el-table-column   align="center"   width="20px" type="expand" >
      <template  slot-scope="scope">
        <el-form label-position="left" inline class="table-detail">
          <el-form-item label="附件" class="attatchment">
          </el-form-item>
          <file-list/>
          <el-form-item label="发票赔付明细" >
          </el-form-item>
          <ul class="instruction">
             <li>
                 <div>发票： 34444444444</div>
                 <div>发票金额：|第三方支付： |理赔金额： |赔付金额：</div>
                 <div>拒赔原因：         333333333333333333333333333</div>
             </li>
             <li></li>
         </ul>
        </el-form>
      </template>
     
    </el-table-column>
 


  </el-table>
  </div>
</template>
<script>

import LabelLine from "@/components/LabelLine"
import FileList from "@/components/FileList"
import Detail from "./Detail"


export default {
  name: 'Claim',
  components:{LabelLine,FileList,Detail},
  data() {
   return{
        styleObj:{
                background:'#F6F6F6',
                fontWeight:'500',
                color:'#999999',
                padding:'0',
                height:'36px',
                lineHeight:'36px',

        },
        isTure:false,
        expands:[]
        
        
       
   }    
  },
  computed:{
      tableData(){
          return this.$store.state.claim.tableData
          },
      claimLog(){
          return this.$store.state.claim.claimLog
          },
      isDraft(){
          return this.$store.state.claim.isDraft
          },
     getRowKeys() {
       var d = new Date().getTime();
       var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    console.log(uuid)
    return uuid;
},
       
      
  },
   methods: {
      handleEdit(index, row) {
       this.$router.push({path: '/apply'});
       this.$store.dispatch('showApply',1);

      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      showDetail(index, row) {
         if (this.expands.indexOf(row.id) < 0) {
                    this.expands = []
                    this.expands.push(row.id);
                } else {
                    this.expands=[]
                }
        console.log(row.id);
          console.log(this.expands.indexOf(row.id));
      },
      getRowClass(item,index){
        //console.log(item.row)
        if (item.row.code==120)//即改行没有子元素时，添加row-expand-cover类
        {return 'row-expand-cover'}
            
    /* if (row.operate == 2)
      res.push('hide-row')
    return res.join(' ') */
       
      },
  
       filterTag(value, row) {
        return row.tag === value;
      },
      /*
      renderHeader (h,{column}) { // h即为cerateElement的简写，具体可看vue官方文档
        return h(
          'label',
          [ 
            h('span', column.label),
            h('i', {
              class:'el-icon-caret-bottom',
              style:'margin-left:5px;'
            })
          ],
        );
       }
       */

   }
}
</script>

<style rel="stylesheet/scss" lang="scss"  scope>
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
     .table-detail .el-form-item{
         width: 100%;
         margin: 0
     }

    .table-detail label {
        font-size:12px;
        color: #333333;
    }
    .instruction{
        color: #666666;
        line-height: 20px;
        font-size: 12px;
        padding: 0
    }
}


</style>
<style rel="stylesheet/scss" lang="scss">
/*
.claim-container{
    .el-table__expand-icon >i{
        display:none;
    }
}
*/
.row-expand-cover .el-table__expand-column .el-icon{
 //visibility:hidden;
 //display:none;
}
</style>
