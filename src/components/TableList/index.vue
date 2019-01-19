<template>
  <table class="myTable" :style="styleObject" v-if="s_showByRow==1" >
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
  <table class="myTable2" :style="styleObject" v-else-if="s_showByRow==2">
    <tr><th  class='theme-purple ' colspan="4">保单详情</th></tr>
    <tr class="sub-th"><td>险种</td><td>保险范围</td><td>保额</td><td>保险期间</td></tr>
    <tr v-for="index in tableData.length" :key="index">
     <td width="120px">{{tableData[index-1].type}}</td>
     <td class="td-content">{{tableData[index-1].scope}}</td>
     <td width="120px">{{tableData[index-1].amount}}</td>
     <td class="td-content" width="100px" v-if="index==1" :rowspan="tableData.length">{{start}}<br/>至<br/>{{end}}</td>
    </tr>
  </table>
  <table class="myTable3" :style="styleObject" v-else-if="s_showByRow==3" >
    <tr><th  class='theme-purple ' colspan="4">个人信息</th></tr>
    <tr class="sub-th"><td>姓名</td><td>性别</td><td>出生日期</td><td>身份证件</td></tr>
    <tr v-for="index in tableData.length" :key="index">
     <td>{{tableData[index-1].name}}</td>
     <td>{{tableData[index-1].sex}}</td>
     <td>{{tableData[index-1].date}}</td>
     <td>{{tableData[index-1].id}}</td>
    </tr>
  </table>
   <table class="myTable3" :style="styleObject" v-else-if="s_showByRow==4" >
    <tr><th  class='theme-purple ' colspan="5">家庭信息</th></tr>
    <tr class="sub-th"><td>关系</td><td>姓名</td><td>性别</td><td>出生日期</td><td>身份证件</td></tr>
    <tr v-for="(item,index) in tableData" :key="index">
     <td>{{item.relation}}</td>
     <td>{{item.name}}</td>
     <td>{{item.sex}}</td>
     <td>{{item.date}}</td>
     <td>{{item.id}}</td>
    </tr>
  </table>
   <table class="myTable3" :style="styleObject" v-else >
    <tr><th  class='theme-purple ' colspan="2">上传凭证</th></tr>
    <template  v-for="(item,index) in tableData" >
    <tr :key="index" >
        <td width="150" v-if="index==0" :rowspan="tableData.length">{{item.title}}</td>
        <td class="file-content">
            <div class="card-title">{{item.name}}</div>
            <div class="flex-layout-word"><div>正面</div><div>反面</div></div>
            <div class="flex-layout">
               <div class="card-layout" > 
            <el-upload
                    :data="item.data1"
                    class="avatar-uploader"
                    list-type="picture-card"
                    action=""
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :http-request="upload">
             <img v-if="item.pic1" :src="item.pic1" class="avatar">
             <template v-else>
                 <i  class="el-icon-plus avatar-uploader-icon"></i>
                 <vue-qr class="QRImage"  :text="config.value" :size="110" :margin="5"  @click.native.stop></vue-qr> 
             </template>
            </el-upload>
                </div>
              <div class="card-layout"> 
                    <el-upload
                    :data="item.data2"
                    class="avatar-uploader"
                    list-type="picture-card"
                    action=""
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :on-remove="handleRemove"
                    :before-upload="beforeAvatarUpload"
                    :http-request="upload">
             <img v-if="item.pic2" :src="item.pic2" class="avatar">
             <template v-else>
                 <i  class="el-icon-plus avatar-uploader-icon"></i>
                 <vue-qr class="QRImage"  :text="config.value" :size="110" :margin="5"  @click.native.stop></vue-qr> 
             </template>
            </el-upload>
                </div>
            </div>
        </td>
    </tr>
    </template>
   
  </table>
</template>
<script>
import VueQr from 'vue-qr'
export default {
  name:"TableList",
  components: { VueQr },
  data() {
    return {
      styleObject: {},
       imageUrl: '',
       config: {
          value: 'http://192.168.102.234:8080/#/mobile?1233294723',//显示的值、跳转的地址
          logo:'',
        }
    };
  },
  props: ['tableData', 'tableStyle', 'showByRow','s_showByRow',"start","end","father"],
  computed: {
    rowCount: function() {
      return Math.ceil(this.tableData.length/2);
    },
  },
  created() {
    this.styleObject = this.tableStyle;
    if(this.showByRow !== undefined){
      this.s_showByRow = this.showByRow;
    }
  },
  methods:{
      beforeAvatarUpload(res, file){
    
      },
      handleAvatarSuccess(res, file) {
       
        this.imageUrl = URL.createObjectURL(file.raw);
      },
       handleRemove(file, fileList) {
       
       //this.$store.dispatch("deleteSingleImage",{id:file.id,code:this.code})
      },
     upload(params) {
      const formData = new FormData()
      formData.append('file',params.file)
       console.log(params);
      formData.append('insuredId',params.data.personId)
      formData.append('accessoryType',params.data.accessoryType)
      this.$store.dispatch("uploadResourseImage",{data:formData,insuredId:params.data.personId,accessoryType:params.data.accessoryType})
     
      }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
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
table.myTable3{
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
    td.file-content{
         padding: 17px 32px;
    }
     td:first-child{
           color: #999999
       
     }
     .card-title{
         text-align: left;
         color: #333333;
     }
     .flex-layout-word{
        display: flex;
        color: #999999;
        line-height: 17px;
        margin: 10px 0;
        text-align: left;
        div{
            width: 50%;
        }
         
     }
     .flex-layout{
         display: flex;
         .card-layout{
             display: flex;
             width: 50%;
             img{
             width: 98%;
             max-width: 109px;
             max-height: 109px;
             height:98%;
         }
         }
        
     } 
}
 .file-content .el-upload--picture-card{
         width: 110px;
         height:110px;
         position: relative;
         .QRImage{
            border: 1px solid #c0ccda;
            border-radius: 6px;
            position: absolute;
            width: 110px;
            height: 110px;
            left:143px;
            top: 0
            }
            i{
            position: absolute;
            top: 50%;
            margin-top: -14px;
            left: 50px;
            margin-left: -10px;
            }
     }
</style>