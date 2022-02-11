<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {Header, Footer},
};

</script>