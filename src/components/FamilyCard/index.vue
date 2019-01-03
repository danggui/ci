<template>
   <div class="family-status-card"  :class="{'is-active':isActive,'theme-purple':isActive}" @click="changeStatus">
       {{status}}
      </div>
</template>
<script>
export default {
name: 'FamilyCard',
props: ['isActive', 'index','status'],
methods:{
    changeStatus(){
         this.$emit("labelAction",this.index);
    }
}
}
</script>

<style rel="stylesheet/scss" lang="scss" scope>


</style>