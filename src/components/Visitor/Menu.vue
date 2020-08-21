<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <table class="table table-hover">
          <thead class="thead-default">
            <tr>
              <!-- <th>#</th> -->
              <th>Size</th>
              <th>Price</th>
              <th>Add to Basket</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in getMenuItems" :key="item.id">
            <tr>
              <td class="d-none">{{ index }}</td>
              <td>
                <strong>{{ item.name }}</strong>
              </td>
            </tr>
            <tr v-for="option in item.options" :key="option.price">
              <td>{{ option.size }}</td>
              <td>{{ option.price | currency }}</td>
              <td>
                <button
                  class="btn btn-sm btn-outline-success"
                  type="button"
                  @click="addToBasket(item, option)"
                >
                  +
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-sm-12 col-md-6">
        <div v-if="Basket.length > 0">
          <table class="table">
            <thead class="thead-default">
              <tr>
                <th>Quantity</th>
                <th>Item</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody v-for="(item, index) in Basket" :key="index">
              <tr>
                <td>
                  <button class="btn btn-sm" @click="decreaseQuantity(item)">
                    -
                  </button>
                  <span>{{ item.quantity }} -</span>
                  <button class="btn btn-sm" @click="increaseQuantity(item)">
                    +
                  </button>
                </td>
                <td>{{ item.name }} {{ item.size }}</td>
                <td>{{ (item.price * item.quantity) | currency }}</td>
              </tr>
            </tbody>
          </table>
          <p>Total Order {{ total | currency }}:</p>
          <button class="btn btn-block btn-success" @click="addNewOrder">
            place Order
          </button>
        </div>
        <div v-else>
          <p>{{ BasketText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      BasketText: "your Basket is Empty!",
      Basket: [],
    };
  },
  computed: {
    ...mapGetters(["getMenuItems"]),
    total() {
      var totalCost = 0;
      for (var item in this.Basket) {
        var individualItem = this.Basket[item];
        totalCost = +individualItem.price * individualItem.quantity;
      }
      return totalCost;
    },
    // getMenuItems() {
    //   return this.$store.state.menuItems
    // }
  },
  methods: {
    //  async addToBasket(item, option) {
    //    const pizzaExists = await this.Basket.find (
    //      pizza => pizza.name === item.name && pizza.size === option.size
    //    )
    //    if (pizzaExists) {
    //      pizzaExists.quantity++;
    //      return;
    //     //  to prevent push to array
    //    }
    addToBasket(item, option) {
      const pizzaExists = this.Basket.find(
        (pizza) => pizza.name === item.name && pizza.size === option.size
      );
      if (pizzaExists) {
        pizzaExists.quantity++;
        return;
        //  to prevent push to array
      }
      this.Basket.push({
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1,
      });
    },
    removeFromBasket(item) {
      this.Basket.splice(this.Basket.indexOf(item), 1); //remove one item from array
    },
    decreaseQuantity(item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.removeFromBasket(item);
      }
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    addNewOrder() {
      // this.$store.commit("addOrder", this.Basket);
      const order = {
        pizzas: { ...this.Basket },
        creareAt: new Date().toISOString(),
      };
      this.$store.dispatch("AddOrderItem", order);
      this.Basket = [];
      this.BasketText = "Thank you, your order has been placed! :)";
    },
  },
  created() {
    this.$store.dispatch("fetchMenuItem");
  },
};
</script>
