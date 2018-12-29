<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
      <el-breadcrumb-item >
        <span ><img src="/static/images/start.png">{{ generateTitle(item.meta.title) }}</span>
      </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { generateTitle } from '@/utils/i18n'
import pathToRegexp from 'path-to-regexp'

export default {
  data() {
    return {
      item: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    generateTitle,
    getBreadcrumb() {
       this.item = this.$route
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 18px;
    line-height: 68px;
    margin-left: 10px;
    margin-left: 2.5%;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
    .icon_label{
      margin-right: 10px;
    }
    span{
      color: white!important;
    }
    img{
      margin-right: 10px;
    }
  }

</style>
