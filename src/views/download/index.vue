<template>
  <div class="download-container ">
    <div class="file-list">
       <div class="file" v-for="(item,index) in list" :key="index" >
        <div class="file-title">
            <div>
            <span class="file-arrow">
                 <arrow  @arrowAction="toggleInfo" :is-active="item.isActive" :rotate="item.isActive" :index="index"/>
            </span>
            <span class="file-name">{{ $t(item.name) }}</span>
            </div>
            <el-row>
                <el-button size="medium" type="primary" plain > <a :href="item.src" target="_blank" download="123">{{ $t(download) }}</a></el-button>
             </el-row>
        </div>
        <div v-show="item.isShow" class="file-content">
               {{item.description}}
        </div>
        </div>
       

    </div>
  </div>
</template>
<script>
import Arrow from '@/components/Arrow'
export default {
  name: 'Download',
  components: {Arrow},
  data() {
    return {
        download:'download.download',
        isActive:true,
    }
  },
  computed:{
     list(){
         return this.$store.state.download.list
     }
     
  },
 
  methods:{
      toggleInfo(index){
        this.list[index].isActive = !this.list[index].isActive;
         this.list[index].isShow = !this.list[index].isShow;  
      }
    
   
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.download-container{
    padding: 0 50px;
    .file{
    border-bottom:1px solid #ededed;
}
    .file:last-child{
        border: none;
    }
.file-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333333;
    font-size: 16px;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    margin: 30px 0;
    .file-arrow:first-child{
        margin-right: 5px;
    }
}
.file-name{
    vertical-align: top;
}
.file-content{
    margin-bottom: 30px;
    margin-left: 30px;
    word-break: break-word;
}

.middle-size{
    font-size: 20px;
}

}

</style>
