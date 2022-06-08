'
<template>
  <q-page class="flex flex-center">
    <table class="center">
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td>
            <q-item round flat>
              <q-avatar size="200px">
                <img src="../assets/img/profile.png" />
              </q-avatar>
            </q-item>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <q-item class="text-weight-bold">{{ profile }}</q-item>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <q-btn rounded color="primary" size="xs" label="수정" />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr></tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
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
      profile: "개발자의 품격",
      text: '개발자의 품격 4기 2팀에서 구현 중인 혼밥 매칭 서비스 "겸상"입니다.',
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
});
</script>
<style scoped>
.center {
  width: 100%;
}

tr,
td {
  text-align: center;
  border: 1px solid #ddd;
}

table {
  border-collapse: collapse;
  /* border-spacing: 0; */
  width: 100%;
  border: 1px solid #ddd;
  margin-left: auto;
  margin-right: auto;
}
</style>
