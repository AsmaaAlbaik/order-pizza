<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h3>Menu:</h3>
        <table class="table table-hover">
          <thead class="thead thead-default">
            <tr>
              <th>Item</th>
              <th>Delete from Menu</th>
            </tr>
          </thead>
          <tbody v-for="item in getMenuItems" :key="item.id">
            <tr>
              <td>{{ item.name }}</td>
              <td>
                <button
                  class="btn btn-outline-danger btn-sm"
                  @click="removeMenuItem(item.id)"
                >
                  X
                </button>
              </td>
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
    ...mapGetters(["getMenuItems"]),
  },
  methods: {
    removeMenuItem(key) {
      this.$store.dispatch("removeMenuItem", key)
    },
  },
  created() {
    this.$store.dispatch("fetchMenuItem");
  },
};
</script>
