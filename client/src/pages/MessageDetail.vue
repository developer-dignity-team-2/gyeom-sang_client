<template>
  <q-page class="row" style="width: 1100px; margin: 0 auto; flex-wrap: nowrap">
    <profile class="col-3"></profile>

    <h2>8 Message Detail</h2>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import profile from "../components/UserProfile.vue";

export default defineComponent({
  name: "MessageDetail",
  components: {
    profile,
  },
});
</script>
