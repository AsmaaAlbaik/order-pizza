<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <div class="container">
      <b-collapse id="nav-collapse-1" is-nav>
        <b-navbar-nav>
          <router-link :to="{ name: 'homeLink' }" tag="li" class="nav-item">
            <a class="nav-link" href="#">home</a>
          </router-link>
          <router-link :to="{ name: 'aboutLink' }" tag="li" class="nav-item">
            <a class="nav-link" href="#">About</a>
          </router-link>
          <router-link :to="{ name: 'menuLink' }" tag="li" class="nav-item">
            <a class="nav-link" href="#">menu</a>
          </router-link>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="userIsAuthonticated">
          <router-link :to="{ name: 'adminLink' }" tag="li" class="nav-item">
            <a class="nav-link" href="#">admin</a>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
export default {
    computed: {
    userIsAuthonticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
  },
}
</script>
<style lang="scss" scoped>
.navbar {
  position: absolute;
  bottom: 0;
  width: 100%;
    .nav-link {
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
