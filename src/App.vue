<template>
  <div id="app">
    <keep-alive>
    <router-view/> 
    <router-view name="mobile"/> 
    </keep-alive>
  </div>
</template>

<script>
import { getToken, setToken, removeToken,GetRequest } from '@/utils/auth'
export default{
  name: 'App',
  created(){
       const token = GetRequest()
       setToken(token)
       
  },
  mounted(){
     this.$store.dispatch("checkLogin",getToken())
  }
}
</script>
