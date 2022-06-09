<template>
  <q-page class="flex flex-top">
    <div dense bordered padding class="rounded-borders">
      <div class="col-12 flex flex-center q-mb-lg">
        <q-avatar size="200px">
          <img src="../assets/img/profile.png" />
        </q-avatar>
      </div>
      <div class="col-12 column items-center">
        <div class="q-pb-lg text-center">
          <span class="text-bold text-no-wrap">{{ profile }}</span>
        </div>
        <div class="q-gutter-sm row items-center">
          <q-btn outline rounded color="grey-7" size="xs" label="수정" />
        </div>
      </div>
      <div class="col-12 column items-center">
        <div class="q-pb-lg">
          <table>
            <tbody>
              <tr>
                <td style="height: 30px; width: 100px; text-align: center">
                  <span class="text-bold text-no-wrap">성별</span>
                </td>
                <td>{{ gender }}</td>
              </tr>
              <tr>
                <td style="height: 30px; width: 100px; text-align: center">
                  <span class="text-bold text-no-wrap">식사 매너</span>
                </td>
                <td>{{ mannerScore }}</td>
              </tr>
              <tr>
                <td style="height: 30px; width: 100px; text-align: center">
                  <span class="text-bold text-no-wrap">자기 소개</span>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="q-pa-md" style="width: 500px">
                    <q-input v-model="text" filled autogrow type="textarea" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
      gender: "남자",
      mannerScore: "★★★★☆",
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

table {
  border-collapse: collapse;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
