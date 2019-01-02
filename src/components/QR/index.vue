<template>
 <div>
     <div class="title"><span>*</span>{{label}}</div>
     <div class="content">
 <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
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
      }
    
      
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

