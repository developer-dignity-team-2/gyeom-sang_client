<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lFf">
      <!-- <q-header elevated style="color: #3a1d1d; background: #f7e600"> -->
      <q-header reveal class="bg-grey-4">
        <q-toolbar>
          <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
          <q-toolbar-title>
            <router-link to="/">겸상</router-link>
          </q-toolbar-title>
          <ul class="flex q-gutter-lg">
            <li class=""><router-link to="/">1</router-link></li>
            <li class=""><router-link to="/create-babsang">2</router-link></li>
            <li class=""><router-link to="/read-babsang">3</router-link></li>
            <li class=""><router-link to="/select-spoon">4</router-link></li>
            <li class="">
              <router-link to="/mypage/user-profile">5</router-link>
            </li>
            <li class="">
              <router-link to="/mypage/join-babsang">6</router-link>
            </li>
            <li class="">
              <router-link to="/mypage/wish-babsang">6</router-link>
            </li>
            <li class=""><router-link to="/mypage/message">7</router-link></li>
            <li class="">
              <router-link to="/mypage/message/read">8</router-link>
            </li>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </ul>
          <div class="q-gutter-sm row items-center no-wrap">
            <!-- <q-btn
              round
              dense
              flat
              color="grey-8"
              icon="message"
              v-if="$q.screen.gt.sm"
            >
              <q-tooltip>Messages</q-tooltip>
            </q-btn> -->
            <q-btn round dense flat color="grey-8" icon="notifications">
              <q-badge color="red" text-color="white" floating> 2 </q-badge>
              <q-tooltip>Notifications</q-tooltip>
            </q-btn>
            <q-btn round flat>
              <q-avatar size="26px">
                <img src="../assets/img/profile.png" />
              </q-avatar>
              <q-tooltip>Account</q-tooltip>
            </q-btn>
          </div>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink
  },
  data() {
    return {
      profile: "개발자의 품격",
    };
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
