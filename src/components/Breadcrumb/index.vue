<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
      <el-breadcrumb-item >
        <span >/// {{ generateTitle(item.meta.title) }}</span>
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
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
