<template>
  <div class="home">
    <router-link
      :to="'/Home/' + poster.id"
      v-for="poster in posters"
      :key="poster.id"
    >
      <SinglePoster />
    </router-link>
  </div>
</template>

<script>
import SinglePoster from "@/components/Poster.vue";

export default {
  components: { SinglePoster },
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
