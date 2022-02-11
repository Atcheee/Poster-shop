<template>
  <div class="home">
    <Header />
    <router-link
      :to="'/Home/' + poster.id"
      v-for="poster in posters"
      :key="poster.id"
    >
      <SinglePoster />
    </router-link>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SinglePoster from "@/components/Poster.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Header, SinglePoster, Footer },
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
  width: 10%;
}
</style>