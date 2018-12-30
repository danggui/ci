<template>
 <div>
     <div class="title"><span>*</span>{{label}}</div>
     <div class="content">
 <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>

     </div>
 </div>
</template>

<script>
export default {
   props: ["label","index"],
   computed: {
  
   },
   data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {  
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      beforeAvatarUpload(file) {
        const isImage = file.type === 'image/png'||'image/jpeg';
        const isLt3M = file.size / 1024 / 1024 < 3;

        if (!isImage) {
          this.$message.error('上传头像图片只能是 JPG 或者 PNG 格式!');
        }
        if (!isLt3M) {
          this.$message.error('上传头像图片大小不能超过 3MB!');
        }
        return isImage && isLt3M;
      },
      
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
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
</style>

