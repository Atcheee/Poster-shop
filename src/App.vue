<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Home">
        Home
      </router-link>
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components:{Footer}
}
</script>

<style lang="sass">

</style>
