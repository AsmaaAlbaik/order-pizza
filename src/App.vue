<template>
  <div id="app">
    <app-header></app-header>
    <!-- <div class="container"> -->
    <div class="content">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>

    <!-- </div> -->
    <div class="container" style="padding-bottom: 7rem !important;">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <router-view name="ordering-guide"></router-view>
        </div>
        <div class="col-md-4 col-sm-12">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-md-4 col-sm-12">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  created() {
    // this.$store.dispatch('setMenuRef', dbMenuRef);
    // this.$store.dispatch('setOrdersRef', dbOrdersRef);
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: slide-out 0.3s ease-out forwards;
  transition: opacity 0.5s;
  opacity: 0;
}
.slide-enter {
  opacity: 0;
}
@keyframes slide-in {
  form {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  form {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
#app {
  position: relative;
  background: #f1f1f1;
}
.content {
  padding-top: 100px;
  padding-bottom: 50px;
}
.background {
  background: rgba(238, 238, 238, 0.8);
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
}
</style>
