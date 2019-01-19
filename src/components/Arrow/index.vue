<template>
     <svg
      :class="{'is-active':isActive,'is-rotate':rotate}"
      t="1492500959545"
      class="arrow theme-color"
      style=""
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1691"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="64"
      height="64"
      @click="changeStatus"
      >
    <path d="M0 512c0 283.733333 228.266667 512 512 512s512-228.266667 512-512S795.733333 0 512 0 0 228.266667 0 512zM405.333333 206.933333l275.2 275.2c8.533333 8.533333 12.8 19.2 10.666667 29.866667 0 10.666667-4.266667 21.333333-10.666667 29.866667L405.333333 817.066667c-14.933333 14.933333-40.533333 14.933333-55.466666 0l-4.266667-4.266667c-14.933333-14.933333-14.933333-40.533333 0-55.466667L588.8 512 343.466667 266.666667c-14.933333-14.933333-14.933333-40.533333 0-55.466667l4.266666-4.266667c14.933333-14.933333 40.533333-14.933333 57.6 0z" p-id="6481"></path></svg>
</template>

<script>
export default {
  name: 'Arrow',
  props: ["isActive","index","rotate"],
  methods:{
      changeStatus(){
         this.$emit("arrowAction",this.index);
      }
  }
}
</script>

<style scoped>
.arrow {
  display: inline-block;
  cursor: pointer;
  width: 20px;
  height: 20px;
  transform: rotate(90deg);
  transition: .38s;
  transform-origin: 50% 50%;
}
.arrow.is-rotate {
  transform: rotate(-90deg);
}

.arrow.is-active {
  transform: rotate(0deg);
}
.theme-color{
    fill:#8289BC
}
</style>
