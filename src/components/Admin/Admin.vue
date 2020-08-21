<template>
<div class="container">
  <div class="row">
    <div class="col-sm-12 col-lg-6">
      welcom to the admin page
    </div>
  </div>
</div>

</template>
<script>
// import AppLogin from './Login';
import { mapGetters } from 'vuex';

export default {
  components: {
    // AppLogin,
    HiddenAdmin
  },
  computed: {
    // ...mapGetters ([
    //   'currentUser'
    // ])
  },
}
</script>

