<template>
  <div class="q-pa-none">
    <q-drawer v-model="drawer" show-if-above :width="220" :breakpoint="400">
      <div class="q-ml-md q-my-md">
        <q-list dense bordered padding class="rounded-borders">
          <q-item class="text-weight-bold">{{ profile }} 님</q-item>
          <q-item>{{ email }}</q-item>
        </q-list>
      </div>
      <div class="q-ml-md q-my-md">
        <q-list dense bordered padding class="rounded-borders">
          <q-item class="text-weight-bold">내 정보</q-item>
          <q-item clickable v-ripple @click="userProfile()">
            <q-item-section> 프로필 정보 </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="userProfile()">
            <q-item-section> 식사 매너 점수 </q-item-section>
          </q-item>

          <q-item style="margin-top: 20px" class="text-weight-bold"
            >밥상 정보</q-item
          >
          <q-item clickable v-ripple @click="joinBabsang()">
            <q-item-section> 참여한 밥상 </q-item-section>
          </q-item>

          <!-- <q-item active clickable v-ripple @click="wishBabsang()"> -->
          <q-item clickable v-ripple @click="wishBabsang()">
            <q-item-section> 찜한 밥상 </q-item-section>
          </q-item>

          <q-item
            style="margin-top: 20px"
            clickable
            v-ripple
            @click="message()"
          >
            <q-item-section class="text-weight-bold"> 메시지함 </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <!-- <q-page-container> -->
    <q-page padding>
      <router-view />
    </q-page>
    <!-- </q-page-container> -->
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  components: {},
  data() {
    return {
      profile: "개발자의 품격",
      email: "abcd@gmail.com",
    };
  },
  setup() {
    return {
      drawer: ref(false),
    };
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    userProfile() {
      this.$router.push("/mypage/user-profile");
    },
    joinBabsang() {
      this.$router.push("/mypage/join-babsang");
    },
    wishBabsang() {
      this.$router.push("/mypage/wish-babsang");
    },
    message() {
      this.$router.push("/mypage/message");
    },
  },
};
</script>
