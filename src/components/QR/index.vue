<template>
 <div class="qr-container">
     <div class="title"><span v-if="must">*</span>{{label}}</div>
     <div class="content">
 <el-upload
  action=""
  
  list-type="picture-card"
  :before-upload="beforeUpload"
  :before-remove="beforeRemove"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove"
  :file-list="list"
  :http-request="upload"
  >
  <i class="el-icon-plus"></i>
  <vue-qr class="QRImage" v-if="isSelect" :text="config.value" :size="143" :margin="5"  @click.native.stop></vue-qr> 
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
</div>
 </div>
</template>

<script>
import VueQr from 'vue-qr'
import {getPerson} from "@/utils/auth"
export default {
   props: ["label","type","must","list","code","id"],
   components: { VueQr },
   computed: {
  
   },
   data() {
      return {
        uploadUrl:'',
        dialogImageUrl: '',
        dialogVisible: false,
        
        
      };
    },
    computed:{
        config(){
          return{
          value: `http://192.168.102.234:8082/#/mobile?&type=${this.type}&id=${this.$store.state.apply.insuredId}`,//显示的值、跳转的地址
          logo:'',
          }
        },
        isSelect(){
          return this.$store.state.apply.insuredId
        }
    },
    methods: {
      beforeUpload(file){
        if(!this.isSelect){
           this.$message.error('请先选择就诊人');
           return false;
        }
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isLt3M = file.size / 1024 /1024  < 1;
        if (!(isJPG||isPNG)) {
          this.$message.error('上传图片只能是 JPG 或者 PNG 格式');
        }
        if (!isLt3M) {
          this.$message.error('图片大小不能超过 3MB');
        }
        return (isJPG||isPNG) && isLt3M;
      },
      beforeRemove(file, fileList) {
        const isType = file.fileName?true:false
        if(isType){
        return this.$confirm(`确定移除 ${ file.fileName}？`);
        }
      },
      handleRemove(file, fileList) {
        const isType = file.fileName?true:false
        if(isType){
        this.$store.dispatch("deleteSingleImage",{id:file.id,code:this.code})
        }
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      upload(params) {  
      const formData = new FormData()
      formData.append('file',params.file)
      //formData.append('insuredId',this.id)
      //formData.append('accessoryType',this.type)
      formData.append('insuredId',this.id)
      formData.append('accessoryType',this.type)
      
      this.$store.dispatch("uploadSingleImage",{formData:formData,type:this.type,id:this.id,code:this.code})
     
      }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" >
.qr-container{
.title{
    height: 20px;
    display: flex;
    align-items: center;
    font-size: 14px;
    span{
        color: red;
        margin-right: 6px;
    }
}
.content{
    margin: 12px 0 25px;
}
.el-upload--picture-card{
  position: relative
}
.QRImage{
  border: 1px solid #c0ccda;
  border-radius: 6px;
  position: absolute;
  left:155px;
  width: 148px;
  height: 147px;
  top: 0
}

}

</style>

