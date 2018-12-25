<template>
<div>
  <sidebar-title/>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      class=" el-menu-light"
    >
    <sidebar-item v-for="route in routers" :key="route.path" :item="route"/>
    </el-menu>
  </el-scrollbar>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import SidebarTitle from './SidebarTitle'
import { constantRouterMap } from '@/router'



export default {
  components: { SidebarItem,SidebarTitle },
  data:function(){
      return {
       routers: constantRouterMap
      }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .sidebar-container .el-menu{
    background-color: #FFFFFF!important;
  }
</style>