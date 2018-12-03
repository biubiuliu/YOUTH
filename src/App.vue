<template>
  <div id="app">
      <topNav></topNav>
       <router-view/>
      <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import topNav from './components/commons/topNav';
import bottomNav from './components/commons/bottomNav';
  export default {
    name: 'App',
    components:{
      topNav,
      bottomNav,
    }
    
  }

</script>

<style>

</style>
