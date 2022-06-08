<template>
  <q-page class="flex flex-center">
    <h2>5 UserProfile</h2>
    <div class="q-pa-md" style="max-width: 300px">
      <q-input v-model="text" filled type="textarea" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserProfile",
  components: {},
  data() {
    return {
      text: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
});
</script>
