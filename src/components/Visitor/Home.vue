<template>
  <div id="home">
    <div class="row">
      <div class="col-sm-12 text-center">
        
        <div class="background container">
          <h1>welcome to Pizze planet</h1>
          <h2>Feeling Hungry ?</h2>
          <button class="btn btn-success" @click="goToMenu()">
            Let's Order!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToMenu() {
      this.$router.push({ name: "menuLink" });
    },
  },
};
</script>
<style lang="scss">
#home {
  background: url("../../../src/assets/img/pizza.jpg");
  height: 600px;
  padding: 10%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -100px;
  h1,
  h2 {
    margin: 6%;
  }
}
</style>
