<template>
   <section class="app-main">
     <div class="apply_notice">
       你的理赔缺少申请材料，请点击【这里】补充材料。
     </div>
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews" >
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </section>
</template>
<script>
export default {
  name: 'AppMain',
  computed: {
     cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
.app-main {
  /*84 = navbar + tags-view = 50 +34 */
  min-height: calc(100vh - 68px);
  width: 100%;
  position: relative;
  overflow: hidden;
 
}
.apply_notice{
  color: #ffffff;
  font-size: 12px;
  background:rgba(255,255,255,0.1);
  opacity: 0.9;
  width:350px;
  height: 40px;
  line-height: 40px;
  margin-left: 50px;
  margin-top: 20px;
  padding-left: 20px;

}
</style>

