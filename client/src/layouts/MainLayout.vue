<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="/">Gyeom-sang</router-link>
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
        </ul>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink
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
