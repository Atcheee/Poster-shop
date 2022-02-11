<template>
  <div>
    <section v-for="poster in posters" :key="poster.id">
      <img :src="require(`../assets/char-${poster.id}.png`)" alt="Poster" />
      <h1>{{ poster.job }}</h1>
    </section>
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
  background-color: black;
}
img {
  width: 200px;
  padding-top: 40px;
}
section {
  display: grid;
  justify-content: center;
}
h1 {
  color: white;
}

</style>