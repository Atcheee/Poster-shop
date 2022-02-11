<template>
  <div class="home">
    <Header />
    <!--   <img alt="Vue logo" src="../assets/char-1.png"> -->
    <h1>Poster Shop</h1>
    <p>Buy posters here</p>
    <router-link
      :to="'/Home/' + poster.id"
      v-for="poster in posters"
      :key="poster.id"
    >
      <img :src="poster.img" alt="Poster" />
      <h1>{{ poster.job }}</h1>
    </router-link>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from '@/components/Footer.vue'
export default {
  components: { Header, Footer },
  computed: {
    posters() {
      return this.$store.state.Posters;
    },
  },
};
</script>

<style scoped>
* {
  color: white;
  text-decoration: none;
  margin: 0;
  background-color: black;
}
img {
  width: 100%;
}
</style>