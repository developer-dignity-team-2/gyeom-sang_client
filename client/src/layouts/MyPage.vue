<template>
  <div class="q-pa-md">
    <!-- <q-layout
      view="lHh Lpr lff"
      container
      style="height: 400px"
      class="shadow-2 rounded-borders"
    > -->
    <!-- <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <q-toolbar-title>Header</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header> -->

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
      <!-- <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400"> -->
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple @click="userProfile()">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> 프로필 정보 </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="joinBabsang()">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> 참여한 밥상 </q-item-section>
          </q-item>

          <!-- <q-item active clickable v-ripple @click="wishBabsang()"> -->
          <q-item clickable v-ripple @click="wishBabsang()">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> 찜한 밥상 </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="message()">
            <q-item-section avatar>
              <!-- <q-icon name="drafts" /> -->
              <i
                class="q-icon notranslate material-icons"
                aria-hidden="true"
                role="presentation"
                >chat</i
              >
            </q-item-section>

            <q-item-section> 메시지함 </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../assets/img/profile.png" />
          </q-avatar>
          <div class="text-weight-bold">개발자의품격 님</div>
          <div>abcd@gmail.com</div>
        </div>
      </q-img>
    </q-drawer>
    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  components: {},
  data() {
    return {
      sampleData: "",
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
