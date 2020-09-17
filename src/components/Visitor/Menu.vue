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
          <p>Total Order {{ total | currency }}</p>
          <button class="btn btn-block btn-success mb-5" @click="addNewOrder">
            <b-icon
              icon="arrow-clockwise"
              animation="spin"
              font-scale="1"
              v-if="loading"
            ></b-icon>
            <template v-else>place Order</template>
          </button>
        </div>
        <div v-else>
          <alert-app
            :showDismissibleAlert="showDismissibleAlert"
            :responseStatus="responseStatus"
            :alertMessage="BasketText"
          ></alert-app>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AlertApp from "@/components/shared/Alert";
export default {
  data() {
    return {
      BasketText: "your Basket is Empty!",
      Basket: [],
      showDismissibleAlert: false,
      responseStatus: "",
      totalCost: 0,
    };
  },
  computed: {
    ...mapGetters(["getMenuItems", "loading"]),
    total() {
      this.totalCost = 0
        for (let i = 0; i < this.Basket.length;  i++) {
        this.totalCost += Number(this.Basket[i].price * this.Basket[i].quantity)
        // console.log(this.totalCost)
      }
      return this.totalCost;
    },
  },
  methods: {
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
       this.totalCost = 0
      // for (let i = 0; i < this.Basket.length;  i++) {
      //   console.log(this.Basket[i])
      //   // var individualItem = this.Basket[i].price;
      //   this.totalCost = this.totalCost + this.Basket[i].price * this.Basket[i].quantity
      //   console.log(this.totalCost)
      // }
    },
    removeFromBasket(item) {
      this.Basket.splice(this.Basket.indexOf(item), 1); //remove one item from array
    },
    decreaseQuantity(item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.removeFromBasket(item);
      }
      this.total;
    },
    increaseQuantity(item) {
      item.quantity++;
           this.total;
    },
    addNewOrder() {
      // this.$store.commit("addOrder", this.Basket);
      const order = {
        pizzas: { ...this.Basket },
        creareAt: new Date().toISOString(),
      };
      this.$store.dispatch("AddOrderItem", order).then((res) => {
        console.log(res);
        if (res == "success") {
          this.responseStatus = res;
          this.Basket = [];
          this.showDismissibleAlert = true;
          this.BasketText = "Thank you, your order has been placed! :)";
        }
      });
    },
  },
  components: {
    AlertApp,
  },
  created() {
    this.$store.dispatch("fetchMenuItem");
  },
};
</script>
