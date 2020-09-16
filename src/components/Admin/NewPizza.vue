<template>
  <div class="container">
    <form class="form">
      <h3>Add New Pizza</h3>
      <AlertApp
        :showDismissibleAlert="showDismissibleAlert"
        :responseStatus="responseStatus"
        :alertMessage="alertMessage"
      />
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
        <div class="col-md-9 offset-md-3">
          <button
            type="button"
            class="btn btn-success btn-block"
            @click="AddMenuItem"
          >
            <b-icon
              icon="arrow-clockwise"
              animation="spin"
              font-scale="1"
              v-if="loading"
            ></b-icon>
            <template v-else> Add New Pizza</template>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AlertApp from "@/components/shared/Alert";

export default {
  data() {
    return {
      showDismissibleAlert: false,
      responseStatus: "",
      alertMessage: "",
      newPizza: {
        name: "",
        description: "A delicious pizza",
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
  computed: {
    ...mapGetters(["loading", "error"]),
  },
  methods: {
    AddMenuItem() {
      this.$store.dispatch("AddMenuItem", this.newPizza).then((res) => {
        this.newPizza.name = "";
        this.newPizza.description = "";
        this.newPizza.options[0].size = "";
        this.newPizza.options[0].price = "";
        this.newPizza.options[1].size = "";
        this.newPizza.options[1].price = "";
        
        if (res == "success" || this.error != null) {
          this.showDismissibleAlert = true;
          this.responseStatus = "success";
          this.alertMessage = "A new item have been added !";
        } else {
          this.showDismissibleAlert = true;
          this.responseStatus = res.message;
          this.alertMessage = res.message;
        }
      });
    },
  },
  components: {
    AlertApp,
  },
};
</script>
