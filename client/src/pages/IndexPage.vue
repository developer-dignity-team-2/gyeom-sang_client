<template>
  <q-page class="q-pb-xl" style="width: 1100px; margin: 0 auto">
    <!-- **1 Search bar -->
    <div class="q-py-md">
      <div class="" style="max-width: 100%">
        <q-input
          outlined
          v-model="search"
          debounce="500"
          placeholder="원하는 밥상을 검색해 주세요 :)"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>

    <!-- **2 필터, 밥상차리기 배너 row -->
    <div class="row q-pb-md">
      <!-- 필터  -->
      <div class="col-md-3 col-xs-12">
        <div class="q-pr-md">
          <q-card class="my-card" style="height: 210px">
            <q-card-section>
              <p>성별을 선택해 주세요.</p>
              <div class="row q-gutter-md">
                <q-btn
                  rounded
                  class="col"
                  color="white"
                  text-color="black"
                  label="여성"
                />
                <q-btn
                  rounded
                  class="col"
                  color="white"
                  text-color="black"
                  label="남성"
                />

                <q-btn
                  rounded
                  class="col"
                  color="white"
                  text-color="black"
                  label="혼성"
                />
              </div>
            </q-card-section>
            <q-card-section>
              <p>기간을 선택해 주세요.</p>
              <div class="row q-gutter-md">
                <q-btn
                  rounded
                  class="col"
                  color="white"
                  text-color="black"
                  label="기간 선택"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- **3 밥상차리기 배너 -->
      <div class="col-md-9 col-xs-12">
        <div class="">
          <q-card class="my-card" style="height: 210px">
            <q-card-section class="q-pa-lg">
              <h5 class="q-ma-none" style="margin-bottom: 68px">
                밥장님이 원하는 <br />밥상을 차려보세요!
              </h5>
              <q-btn
                rounded
                class="col"
                color="white"
                text-color="black"
                label="밥상 차리기"
                style="width: 150px"
                @click="movePage()"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- 밥상 카드 row -->
    <div class="row bab-group q-col-gutter-md">
      <div class="col-md-3 col-xs-12 bab-card">
        <BabsangCard @click="moveReadPage()"></BabsangCard>
      </div>
      <div class="col-md-3 col-xs-12 bab-card">
        <BabsangCard @click="moveReadPage()"></BabsangCard>
      </div>
      <div class="col-md-3 col-xs-12 bab-card">
        <BabsangCard @click="moveReadPage()"></BabsangCard>
      </div>
      <div class="col-md-3 col-xs-12 bab-card">
        <BabsangCard @click="moveReadPage()"></BabsangCard>
      </div>
      <div class="col-md-3 col-xs-12 bab-card">
        <BabsangCard></BabsangCard>
      </div>
      <div class="col-md-3 col-xs-12 bab-card">
        <BabsangCard></BabsangCard>
      </div>
      <div class="col-md-3 col-xs-12 bab-card">
        <BabsangCard></BabsangCard>
      </div>
      <div class="col-md-3 col-xs-12 bab-card">
        <BabsangCard></BabsangCard>
      </div>
    </div>
  </q-page>
</template>

<script>
// import { defineComponent } from "vue";
// import { ref } from "vue";
import BabsangCard from "../components/comp-babsang-card";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "IndexPage",
  components: {
    BabsangCard,
  },
  data() {
    return {
      text: "",
      search: "",
    };
  },
  computed: {
    ...mapGetters({
      mainData: "getMainData",
    }),
  },
  methods: {
    ...mapActions({
      loadMainData: "loadMainData",
    }),
    onLoadMainData(res) {
      console.log("OnLoadMainData : ", this.mainData);
    },
    movePage() {
      this.$router.push({
        path: "/create-babsang",
      });
    },
    moveReadPage() {
      this.$router.push({
        path: "/read-babsang",
      });
    },
  },
  created() {
    this.loadMainData({
      onLoad: this.onLoadMainData,
    });
  },
};
</script>
<style scoped lang="scss"></style>
