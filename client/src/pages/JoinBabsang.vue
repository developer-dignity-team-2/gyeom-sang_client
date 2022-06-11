<template>
  <q-page class="row" style="width: 1100px; margin: 0 auto; flex-wrap: nowrap">
    <profile class="col-3"></profile>

    <div class="col-9 q-ml-md">
      <!-- <div class="row text-h5 q-py-lg" style="width: 1100px; margin: 0 auto"> -->
      <h5>참여한 밥상 목록</h5>

      <!-- **1 밥상 종류 선택 버튼, 필터 -->
      <div class="row justify-between">
        <div>
          <q-btn
            unelevated
            rounded
            color="grey-5"
            label="숟갈 얹은 밥상"
            @click="messageShow()"
          />
          <q-btn
            unelevated
            rounded
            class="q-ml-md"
            color="grey-5"
            label="차려 놓은 밥상"
            @click="messageShow()"
          />
          <q-btn
            unelevated
            rounded
            class="q-ml-md"
            color="grey-5"
            label="선정된 밥상"
            @click="messageShow()"
          />
        </div>
        <!-- 필터  -->
        <div>
          <q-btn-dropdown
            style="color: gray"
            label="최신순"
            dropdown-icon="change_history"
            size="12px"
          >
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>오래된순</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn-dropdown
            style="color: gray"
            label="모집중"
            class="q-ml-md"
            dropdown-icon="change_history"
            size="12px"
          >
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>모집완료</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>

      <!-- **2 밥상 카드 row -->
      <div class="row bab-group q-col-gutter-md q-mt-xs">
        <div class="col-md-4 col-xs-12 bab-card">
          <BabsangCard></BabsangCard>
        </div>
        <div class="col-md-4 col-xs-12 bab-card">
          <BabsangCard></BabsangCard>
        </div>
        <div class="col-md-4 col-xs-12 bab-card">
          <BabsangCard></BabsangCard>
        </div>
        <div class="col-md-4 col-xs-12 bab-card">
          <BabsangCard></BabsangCard>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import profile from "../components/comp-user-profile.vue";
import BabsangCard from "../components/comp-babsang-card";

export default defineComponent({
  name: "JoinBabsang",
  components: {
    profile,
    BabsangCard,
  },
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
});
</script>
