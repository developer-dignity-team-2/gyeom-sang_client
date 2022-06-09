<template>
  <q-page class="flex flex-top">
    <!-- <div class="q-card q-card--bordered q-card--flat no-shadow q-my-lg"> -->
    <div
      style="max-height: 700px"
      class="q-card q-card--bordered q-card--flat no-shadow q-pa-xl"
    >
      <div class="col-12 flex flex-center q-mb-xs">
        <q-avatar size="200px">
          <!-- <img src="../assets/img/profile.png" /> -->
          <img :src="candidate[0].profile_image" />
        </q-avatar>
      </div>
      <div class="col-12 column items-center">
        <div class="q-mb-xs text-center">
          <span class="text-bold text-no-wrap">{{
            candidate[0].nickname
          }}</span>
        </div>
        <div class="q-gutter-sm row items-center q-mb-lg">
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
                <td>{{ candidate[0].gender }}</td>
              </tr>
              <tr>
                <td style="height: 30px; width: 100px; text-align: center">
                  <span class="text-bold text-no-wrap">식사 매너</span>
                </td>
                <td><q-rating v-model="stars" :max="5" size="20px" /></td>
              </tr>
              <tr>
                <td style="height: 30px; width: 100px; text-align: center">
                  <span class="text-bold text-no-wrap">자기 소개</span>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="q-pa-md" style="width: 500px">
                    <q-input
                      v-model="candidate[0].profile_description"
                      filled
                      autogrow
                      type="textarea"
                    />
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
      stars: 0,
      candidate: [
        {
          spoon_email: "abcd@gmail.com",
          gender: "남성",
          nickname: "개발자의 품격",
          profile_image: require("../assets/img/profile.png"),
          profile_description:
            '개발자의 품격 4기 2팀에서 구현 중인 혼밥 매칭 서비스 "겸상"입니다.',
          age_range: "40대",
          mannerScore: 4,
        },
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {
    this.stars = this.candidate[0].mannerScore;
  },
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
