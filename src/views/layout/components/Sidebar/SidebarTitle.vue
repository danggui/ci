<template>
  <div class="company_title">
     <img src={icon}>
  </div>
</template>
<script>
export default {
  name: 'SidebarTitle',
  props: {
  },
  data() {
      return {
       icon:null
      }
  },
  methods: {

  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.company_title{
    height: 68px;
    line-height: 68px;
    background: #EBEBEB
}
</style>
