<template>
  <div class="label" :class=theme>{{title}}<span>{{message}}</span></div>
</template>

<script>
export default {
   props: ["title","message"],
   computed: {
    theme() {
      return "theme-"+this.$store.state.app.theme
    }
   }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.label {
  background: #F6F6F6;
  padding: 8px 26px;
  font-size: 14px;
    span {
      margin-left:11px;
      color: #999999
    }
}
.full-size{
    width: 100%;
}
</style>

