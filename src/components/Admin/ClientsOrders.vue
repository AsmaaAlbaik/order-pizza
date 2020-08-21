<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h3>Current Orders: {{ numberOfOrders }}</h3>
        <table
          class="table table-hover"
          v-for="(orders, index) in getOrders"
          :key="index"
        >
          <thead class="thead thead-default">
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <div class="order-number">
              <strong
                ><em>Order number: {{ index + 1 }}</em></strong
              >
              <span> created at: {{ orders.createdAt | date }} </span>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="removeOrderItem(orders.id)"
              >
                X
              </button>
            </div>
            <tr v-for="(orderItems,index) in orders.pizzas" :key="index + 'order' + orderItems.name">
              <td>{{ orderItems.name }}</td>
              <td>{{ orderItems.size }}</td>
              <td>{{ orderItems.quantity }}</td>
              <td>{{ orderItems.price | currency }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  components: {
  },
  computed: {
    ...mapGetters(["numberOfOrders", "getOrders"]),
  },
  methods: {
    removeOrderItem(key) {
      this.$store.dispatch("removeOrderItem", key)
    },
  },
  created() {
    this.$store.dispatch("fetchOrderItem");
  },
  filters: {
    date(value) {
      const date = new Date(value);
      return date.toLocaleString(["en-US"], {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
  // beforeRouteEnter: (to, from, next) => {
  //   next(vm => {
  //     alert('Hi '+ vm.name);
  //   });
  // },
};
</script>
