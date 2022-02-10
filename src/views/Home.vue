<template>
  <div class="home">
    <h1>Poster Shop</h1>
    <p>Buy posters here</p>
    <router-link
      :to="'/Home/' + poster.id"
      v-for="poster in posters"
      :key="poster.id"
    >
    <img :src="poster.img" alt="Poster">
    <h1>{{ poster.job }}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
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
}
img {
  width: 100%;
}
</style>