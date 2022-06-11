<template>
  <div class="">
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">제주 최강 햄버거</div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">김민수</div>
        <div class="text-caption text-grey">06.11~06.14</div>
      </q-card-section>
      <q-separator />

      <q-card-actions>
        <!--              <q-btn flat round icon="event" />-->
        <q-btn
          rounded
          color="white"
          text-color="black"
          style="width: 60px"
        >
          모집중
        </q-btn>
        <q-btn
          rounded
          color="white"
          text-color="black"
          style="width: 60px"
        >
          혼성
        </q-btn>
        <q-btn
          rounded
          color="white"
          text-color="black"
          style="width: 60px"
        >
          1/4
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>
<script>
export default {
  name:'comp-babsang-card',
  components: {},
  data() {
    return {
    };
  },
};
</script>
