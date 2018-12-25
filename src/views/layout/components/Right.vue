<template>
  <div class="main_page">
    <navbar/>
      <app-main/>
  </div>
</template>

<script>
import {  Navbar,AppMain } from '@/views/layout/components'

export default {
  name: 'Right',
  components: { Navbar,AppMain},
  computed: {

  },
  methods: {
 
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.main_page{
  background:url("/static/images/back.png") no-repeat;
  background-size: cover;
  height: 290px;
}
</style>
