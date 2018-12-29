<template>
  <div class="label" :class=theme>{{title}}</div>
</template>

<script>
export default {
   props: ["title"],
   computed: {
    theme() {
      return "theme-"+this.$store.state.app.theme
    }
   }
}
</script>

<style scoped>
.label {
  background: #F6F6F6;
  padding: 8px 26px;
  font-size: 14px;
}
.full-size{
    width: 100%;
}
</style>

