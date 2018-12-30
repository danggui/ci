<template>
   <section class="app-main">
     <div v-if="material" class="apply_notice">
        <svg-icon class-name="main-icon" icon-class="biandongtongzhi" />你的理赔缺少申请材料，请点击【这里】补充材料。
     </div>
     <div v-else class="apply_notice_no">
     </div>
     <el-card class="box-card app_content">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews" >
        <router-view :key="key"/>
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
export default {
  name: 'AppMain',
  created(){
     this.$store.dispatch('checkMaterial', 1)
     
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
    }
  },
 

}
</script>

<style scoped>
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
  margin: 50px;
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
</style>

