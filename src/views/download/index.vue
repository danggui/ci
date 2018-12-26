<template>
  <div class="download-container ">
    <div class="file-list">
        <div class="file">
        <div class="file-title">
        <div class="file-arrow">
        <svg-icon class-name="theme-color" icon-class="arrow_show" />
        </div>
        <div class="file-name">
        {{ $t('download.team_insurance_apply') }}
        </div>
        </div>
        <div class="file-content">
        
        </div>
        
        </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Download',
  data() {
    return {
     
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scope>
.file{
    border-bottom:1px solid #ededed;
}
.file-title{
    display: flex;
    color: #333333;
    font-size: 16px;
    .file-arrow:first-child{
        margin-right: 10px;
    }
}
.theme-color{
    color:#8289BC
}

</style>
