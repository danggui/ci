<template>
   <section class="app-main">
     <div v-if="material&&words" class="apply_notice">
        <el-badge is-dot class="item red-item"><svg-icon class-name="main-icon" icon-class="biandongtongzhi" /></el-badge>你的理赔缺少申请材料，请点击
        <label @click="handleEdit">
            【这里】 
        </label>
        补充材料。
     </div>
     <div v-else class="apply_notice_no">
     </div>
     <div class="family-label" v-if="family">
      <div class="family-status">
        <family-card v-for="(item,index) in label" :status="item.status" :key="index" :index="index" :isActive="item.isActive" @labelAction="changeStatus" :type="index+1"/>
      </div>
     </div>
     <el-card class="box-card app_content">
      <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews" >
        <router-view v-if="download" :key="key" :link="list"/>
        <router-view v-else :key="key"/>
      </keep-alive>
    </transition>
     </el-card>

    <div class="copyright">
       Copyright <svg-icon  icon-class="copyright" /> 2004-2017 CDP Group Ltd. 苏ICP备17003361号
     </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import FamilyCard from "@/components/FamilyCard"
import { getPerson } from '@/utils/auth'
export default {
  name: 'AppMain',
  components:{FamilyCard},
  data(){
    return {
      label:[{
          status:"生效中",isActive:true
        },{
          status:"待生效",isActive:false
        },
        {
          status:"已失效",isActive:false
        }]
    } 
  },
  computed: {
     cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath 
    },
    material(){
       return this.$store.state.appMain.material
    },
    words(){
      return this.$route.meta.words
    },
    family(){
       return this.$route.meta.title=="family"
    },
    download(){
       return this.$route.meta.title=="download"
    },
    list(){
      return this.$store.state.download.link
    }
    
   
  },
  methods:{
     changeStatus(index,type){
      this.label.forEach(item =>{
        item.isActive=false
      })
        this.label[index].isActive=true
      this.$store.dispatch('showFamilyInfo',{id:getPerson(),type:type});    
    },
    handleEdit(){
        this.$router.push({path: '/claim'});
          this.$store.dispatch('showMyClaim',1)
    }
  }
 

}
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.app-main {
  /*84 = navbar + tags-view = 50 +34 */
  min-height: calc(100vh - 68px);
  width: 100%;
  position: relative;
  overflow: hidden;
  position: relative;
 
}
.apply_notice{
  color: #ffffff;
  font-size: 12px;
  background:rgba(255,255,255,0.1);
  opacity: 0.9;
  width:350px;
  height: 40px;
  line-height: 40px;
  margin: 20px 50px;
  display: flex;
  align-items:center;

}
.apply_notice_no{
  margin: 30px;
}
.main-icon{
  font-size: 22px;
  margin: 0 10px
}
.app_content{
 width: 95%;
 margin: 0 auto;
 margin-bottom: 50px
}
.copyright{
  position: absolute;
  bottom: 13px;
  left: 50%;
  font-size: 12px;
  color: #999999;
  width: 500px;
  text-align: center;
  margin-left: -250px;
}
.el-card__body{
  padding: 36px 44px;
}
.family-label{
  height: 40px;
}


</style>

