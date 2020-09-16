<template>
  <b-alert v-model="showDismissibleAlert" :variant="responseStatus == 'success' ? 'success' : 'danger'" dismissible>
    {{ alertMessage }}
  </b-alert>
</template>
<script>
export default {
  props: ["showDismissibleAlert", "alertMessage","responseStatus"],
  data() {
    return {};
  },
};
</script>
