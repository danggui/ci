<template>
   <div class="family-status-card"  :class="{'is-active':isActive,'theme-purple':isActive}" @click="changeStatus">
       {{status}}
      </div>
</template>
<script>
export default {
name: 'FamilyCard',
props: ['isActive', 'index','status','type'],
methods:{
    changeStatus(){
         this.$emit("labelAction",this.index,this.type);
    }
}
}
</script>

<style rel="stylesheet/scss" lang="scss" scope>


</style>