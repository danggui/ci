<template>
  <div class="company_title">
      icon: require('@/assets/images/logo.png')
  </div>
</template>
<script>
export default {
  name: 'SidebarTitle',
  props: {
  },
  data() {
      return {
       icon: require('@/assets/images/logo.png')
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
    background: #EBEBEB;
    text-align: center;
    img{
      vertical-align: middle;
    
    }
}
</style>
