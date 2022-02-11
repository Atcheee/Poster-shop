<template>
  <div class="home">
    <router-link
      :to="'/Home/' + poster.id"
      v-for="poster in posters"
      :key="poster.id"
    >
      <img :src="require(`../assets/char-${poster.id}.png`)" alt="Poster" />
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
  margin: 0;
  background-color: black;
}
.home {
  display: grid;
  justify-content: center;
}
img {
  width: 200px;
  padding-top: 40px;
}
</style>
