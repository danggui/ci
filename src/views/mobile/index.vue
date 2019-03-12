<template>
  <div class="photo-container ">
    <div class="photo-layout">
  <el-upload
  ref="upload"
  class="avatar-uploader"
  list-type="picture-card"
  action=""
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload"
  :http-request="upload"
  >    
  <img  :src="url" class="avatar">    
  
<el-button type="primary" size="medium">上传图片</el-button>
</el-upload>

    
    </div>
 
  </div>
</template>
<script>

export default {
  name: 'Flow',
  data() {
    return {
     
    }
  },
  computed:{
    url(){
     return this.$store.state.resource.mobile
    }
  },
  methods:{
    beforeAvatarUpload(file){
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
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(URL.createObjectURL(file.raw))
      },
       handleRemove(file, fileList) {
       
       //this.$store.dispatch("deleteSingleImage",{id:file.id,code:this.code})
      },
      upload(params) {
      const formData = new FormData()
      formData.append('file',params.file)
      formData.append('insuredId',this.getQuery("id"))
      formData.append('accessoryType',this.getQuery("type"))
      this.$store.dispatch("uploadMobileImage",formData)
      },
      getQuery(name){
　      let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        let url = location.href;
        let num=url.indexOf("?")
        url=url.substr(num+1); 
        let r = url.match(reg);//从?之后开始匹配如getQuery(courseid)返回一个数组["courseid=8","","8","&",index:0,input:"courseid=8"]
       if (r!=null) return unescape(r[2]); return null; 
      },
      confirmUpload(){
      
      }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.photo-container{
  .photo-layout{
    padding: 50px 0;
    text-align: center;
    .avatar-uploader{
      margin: 150px 0;
    }
    .avatar{
      width: 98%;
      height: 98%;
    }
  }
}

</style>
