<template>
  <header>
    <div class="menu-button">
      <img src="@/assets/navicon.svg" width="30px" height="30px" />
    </div>

    <h1>Poster Shop</h1>

    <div class="ninja-image">
      <img src="@/assets/ninjahead.svg" width="241px" height="152px" />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
}
header {
  background-color: #3de07e;
  width: 100%;
  height: 608px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
h1 {
  margin-top: 10rem;
  color: black;
  font-size: 8rem;
  font-weight: bold;
  font-family: "Roboto";
}
.ninja-image {
  justify-content: center;
}

.menu-button {
  position: absolute;
  top: 10px;
  left: 20px;
  cursor: pointer;
}
</style>
