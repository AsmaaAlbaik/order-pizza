<template>
  <div id="home">
    <header>
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
    </header>

    <div class="container mt-4 mb-4">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <OrderingGuide />
        </div>
        <div class="col-md-4 col-sm-12">
          <Delivery />
        </div>
        <div class="col-md-4 col-sm-12">
          <History />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderingGuide from "@/components/Visitor/OrderingGuide";
import History from "@/components/Visitor/History";
import Delivery from "@/components/Visitor/Delivery";
export default {
  components: {
    OrderingGuide,
    History,
    Delivery,
  },
  methods: {
    goToMenu() {
      this.$router.push({ name: "menuLink" });
    },
  },
};
</script>
<style lang="scss">
.card {
      box-shadow: 2px 2px 20px #ccc;
}
header {
  background: url("../../../src/assets/img/pizza.jpg");
  height: 600px;
  padding: 10%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -100px;
  h1,
  h2 {
    margin: 6%;
    text-transform: capitalize
  }
}
</style>
