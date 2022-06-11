<template>
  <q-page class="row" style="width: 1100px; margin: 0 auto; flex-wrap: nowrap">
    <profile class="col-3"></profile>

    <h2>6 JoinBabsang</h2>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import profile from "components/comp-user-profile.vue";

export default defineComponent({
  name: "JoinBabsang",
  components: {
    profile,
  },
});
</script>
