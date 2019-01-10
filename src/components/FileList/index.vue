<template>
    <div class="file-list-flex" >
    <img v-for="(item,index) in list" :key="index" :src="item" />
    </div>
</template>

<script>

export default {
    name:'FileList',
    props:{
        list:{
            type: Array, 
            default:[]
        }
    }
}


</script>

<style rel="stylesheet/scss" lang="scss" scope>
  .file-list-flex{
      display: flex;
      flex-wrap: wrap;
      img{
          width: 80px;
          height: 80px;
          margin-right: 20px;
          margin-bottom: 20px;
      }
  }
</style>
