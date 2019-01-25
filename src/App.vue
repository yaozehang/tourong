<template>
  <div id="app">
    <keep-alive>
    <router-view v-if = "$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if = "!$route.meta.keepAlive"></router-view>   
  </div>
</template>

<script>
import * as Cookies from 'js-cookie'

export default {
  name: "App",
  // mounted(){
  //   this.$router.afterEach((to, from, next) => {
  //       window.scrollTo(0, 0)
  //   })

  // }
  // created(){
  //   if(!Cookies.get('userKey')){
  //     if(this.$route.meta.authority){
  //       this.$router.push('/home')
  //     }
  //   }
  // }
};
</script>

<style>
</style>
