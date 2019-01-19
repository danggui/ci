<template>
  <div v-if="!item.hidden" class="menu-wrapper">
      <el-menu-item-group v-if="item.title" index="resolvePath(item.path)" class="menu-title"> 
      <template slot="title">
        <svg-icon  :icon-class="item.label" /><span>{{item.title}}</span>
      </template>
      </el-menu-item-group>
    

    <template v-else-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link :to="resolvePath(onlyOneChild.path)"  @clickItem="dispatchEvent" >
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <item v-if="onlyOneChild.meta" :icon="onlyOneChild.meta.icon||item.meta.icon"  :title="generateTitle(onlyOneChild.meta.title)"  />
        </el-menu-item>
      </app-link>
    </template>
     

    <el-submenu v-else ref="submenu" :index="resolvePath(item.path)">
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta.icon"  :title="generateTitle(item.meta.title)" />
      </template>

      <template v-for="child in item.children">
        <sidebar-item
          v-if="child.children&&child.children.length>0"
          :is-nest="true"
          :item="child"
          :key="child.path"
          :base-path="resolvePath(child.path)"
          class="nest-menu" />

        <app-link v-else :to="resolvePath(child.path)" :key="child.name" @clickItem="dispatchEvent">
          <el-menu-item :index="resolvePath(child.path)">
            <item v-if="child.meta" :icon="child.meta.icon"  :title="generateTitle(child.meta.title)"  />
          </el-menu-item>
        </app-link>
      </template>
    </el-submenu>

  </div>
</template>

<script>
import path from 'path'
import { generateTitle } from '@/utils/i18n'
import { isExternal } from '@/utils'
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'
import {getPerson} from "@/utils/auth"
export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild(children, parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (this.isExternalLink(routePath)) {
        return routePath
      }
      return path.resolve(this.basePath, routePath)
    },
    isExternalLink(routePath) {
      return isExternal(routePath)
    },
    generateTitle,
    dispatchEvent(to){
      if(to=="/apply"){ 
    const status = this.$store.state.appMain.status
    if(!status){
      this.$alert('首次申请，需完成全部证照上传', '提示', {
      confirmButtonText: '确定',
      callback: action => {
            this.$message({
              type: 'info',
              message: `请补充材料`
            });  
      }
       
      });
      return 
      }
  
      if(Storage.get("isEditting")==1){
      this.$confirm('编辑内容未保存，是否离开？','提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
         }).then(()=>{   
          this.$store.dispatch('showApply',getPerson())
          //this.$store.dispatch('getImageList',{id:getPerson(),code:115,kind:0})
          //this.$store.dispatch('getImageList',{id:getPerson(),code:116,kind:0})
           }  ).catch( ()=> {  })
        }
        else{
          this.$store.dispatch('showApply',getPerson())
         // this.$store.dispatch('getImageList',{id:getPerson(),code:115,kind:0})
          //this.$store.dispatch('getImageList',{id:getPerson(),code:116,kind:0})
        } 
      }else{
        Storage.set("isEditting",0)
      if(to=="/family"){
        this.$store.dispatch('showFamilyInfo',{id:getPerson(),type:1});
      }
      if(to=="/download"){
         this.$store.dispatch('downloadInfo',getPerson())
      }
       if(to=="/claim"){
         this.$store.dispatch('showMyClaim',getPerson())
      }
        if(to=="/resource"){
         this.$store.dispatch('showAllResource',getPerson())
      }
    
      }
 
    }
    
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.el-menu-item{
    color:#666666
  }
.menu-wrapper{
  .menu-title .el-menu-item-group__title{
  height: 70px;
  line-height: 70px;
  color: #333333;
  padding: 0;
  font-size:18px;
  .svg-icon{
    margin-right: 10px;
  }
    i{
      color: #666666;
      margin-right: 10px;
    }
}
}

</style>
