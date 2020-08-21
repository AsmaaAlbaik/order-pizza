<template>
  <div class="container">
    <form class="form">
      <h3>Add New Pizza</h3>
      <div class="form-group row">
        <label class="col-sm-3">Name</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" v-model="newPizza.name" />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3">Description</label>
        <div class="col-sm-9">
          <textarea
            type="text"
            class="form-control"
            rows="5"
            v-model="newPizza.description"
          ></textarea>
        </div>
      </div>
      <p><strong>Option 1:</strong></p>
      <div class="form-group row">
        <label class="col-sm-3">Size(")</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            v-model="newPizza.options[0].size"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3">Price</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            v-model="newPizza.options[0].price"
          />
        </div>
      </div>
      <p><strong>Option 2:</strong></p>
      <div class="form-group row">
        <label class="col-sm-3">Size(")</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            v-model="newPizza.options[1].size"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3">Price</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            v-model="newPizza.options[1].price"
          />
        </div>
      </div>
      <div class="form-group row">
        <button
          type="button"
          class="btn btn-success btn-block"
          @click="AddMenuItem"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPizza: {
        name: "Pepperoni",
        description:
          "A delicious tomato based pizza topped with mozzarella and pepperoni",
        options: [
          {
            size: 9,
            price: 7.95,
          },
          {
            size: 12,
            price: 12.95,
          },
        ],
      },
    };
  },
  methods: {
    AddMenuItem() {
      this.$store.dispatch("AddMenuItem", this.newPizza);
    },
  },
};
</script>
