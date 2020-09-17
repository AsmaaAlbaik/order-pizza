<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-lg-6 offset-lg-3">
        <h2 class="text-center">welcom to the admin page</h2>
        <div class="router-button d-flex justify-content-center">
          <button class="btn btn-info" @click="$router.push('/admin/new-pizza')">Add New Pizza</button>
          <button class="btn btn-danger"  @click="$router.push('/admin/manege-menu')">Manege Your Menu</button>
          <button class="btn btn-success"  @click="$router.push('/admin/clients-orders')">Your Clients's Orders</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import AppLogin from './Login';
import { mapGetters } from "vuex";

export default {
  components: {},
  computed: {
    // ...mapGetters ([
    //   'currentUser'
    // ])
  },
};
</script>

<style lang="scss" scoped>
.router-button {
  margin: 40px 0;
button {
  margin-right: 10px;
}
}

h2 {
  text-transform: capitalize;
}
</style>
