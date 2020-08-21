<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <app-newPizza></app-newPizza>
      </div>
    </div>
  </div>
</template>
<script>
import AppNewPizza from "./NewPizza";
import { mapGetters } from "vuex";
export default {
  components: {
    AppNewPizza,
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
   
  },
  created() {

  },
};
</script>
