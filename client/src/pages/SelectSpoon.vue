<template>
  <div class="row text-h5 q-py-lg" style="width: 1100px; margin: 0 auto">
    함께 식사할 숟갈을 선택해 주세요!
  </div>
  <q-page class="row" style="width: 1100px; margin: 0 auto">
    <div class="col-7">
      <div class="row text-h6 q-pb-md">
        <q-avatar size="23px">
          <img src="../assets/img/icon-park-solid_spoon.png" />
        </q-avatar>
        신청한 숟갈
      </div>
      <div class="q-card q-card--bordered q-card--flat no-shadow q-pa-md row">
        <!-- 숟갈 카드 -->
        <div
          class="items-start col-6"
          :key="spoon.spoon_email"
          v-for="spoon in candidate"
        >
          <!-- <q-card class="my-card q-ma-xs" flat bordered> -->
          <q-card class="my-card q-ma-md" bordered>
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ spoon.nickname }}</q-item-label>
                <q-item-label caption
                  >{{ spoon.gender }} {{ spoon.age_range }}</q-item-label
                >
              </q-item-section>
              <q-rating v-model="spoon.mannerScore" :max="5" size="20px" />
            </q-item>
            <!-- <q-separator /> -->

            <q-card-section horizontal>
              <!-- <q-separator vertical /> -->
              <q-card-section>
                <q-input
                  v-model="spoon.dining_spoons_description"
                  filled
                  autogrow
                  type="textarea"
                  style="width: 220px"
                />
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="col-5">
      <div class="q-ml-xl">
        <div class="row text-h6 q-pb-md">
          <q-avatar size="23px">
            <img src="../assets/img/icon-park-solid_spoon.png" />
          </q-avatar>
          함께할 숟갈
        </div>
        <div class="q-card q-card--bordered q-card--flat q-py-md no-shadow">
          <div
            class="items-start col-12 flex flex-center"
            :key="spoon.spoon_email"
            v-for="spoon in selected"
          >
            <!-- <q-card class="my-card" flat>
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                  </q-avatar>
                  <q-item-label>{{ spoon.nickname }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-card> -->

            <q-card class="my-card q-ma-md" bordered>
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ spoon.nickname }}</q-item-label>
                  <q-item-label caption
                    >{{ spoon.gender }} {{ spoon.age_range }}</q-item-label
                  >
                </q-item-section>
                <q-rating v-model="spoon.mannerScore" :max="5" size="20px" />
              </q-item>
              <q-card-section horizontal>
                <q-card-section>
                  <q-input
                    v-model="spoon.dining_spoons_description"
                    filled
                    autogrow
                    type="textarea"
                    style="width: 220px"
                  />
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div v-show="messageBoolean === true" class="q-pt-md">
          <div class="row q-py-sm">함께할 숟갈들에게 메세지로 알려주세요!</div>
          <q-input
            v-model="message_description"
            filled
            autogrow
            type="textarea"
          />
        </div>
        <div align="center" class="q-pt-md">
          <q-btn
            v-show="messageBoolean === false"
            unelevated
            rounded
            color="grey-5"
            label="선정"
            @click="messageShow()"
          />
          <q-btn
            v-show="messageBoolean === true"
            unelevated
            rounded
            color="grey-5"
            label="확인"
            @click="messageShow()"
          />
          <q-btn
            class="q-ml-xl"
            unelevated
            rounded
            color="grey-5"
            label="취소"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectSpoon",
  components: {},
  data() {
    return {
      messageBoolean: false,
      message_description: "",
      candidate: [
        {
          spoon_email: "spoon1@gmail.com",
          gender: "여성",
          nickname: "숟갈1",
          profile_image: "",
          profile_description: "숟갈1 20대 여성입니다.",
          age_range: "20대",
          mannerScore: 3,
          dining_spoons_description:
            "저도 그 식당 가고싶었어요! 함께 먹고 싶어요 밥장님",
          selected_yn: "N",
        },
        {
          spoon_email: "spoon2@gmail.com",
          gender: "여성",
          nickname: "숟갈2",
          profile_image: "",
          profile_description: "숟갈2 20대 여성입니다.",
          age_range: "20대",
          mannerScore: 2,
          dining_spoons_description:
            "저도 그 식당 가고싶었어요! 함께 먹고 싶어요 밥장님",
          selected_yn: "N",
        },
        {
          spoon_email: "spoon3@gmail.com",
          gender: "여성",
          nickname: "숟갈3",
          profile_image: "",
          profile_description: "숟갈3 20대 여성입니다.",
          age_range: "20대",
          mannerScore: 4,
          dining_spoons_description:
            "저도 그 식당 가고싶었어요! 함께 먹고 싶어요 밥장님",
          selected_yn: "N",
        },
        {
          spoon_email: "spoon4@gmail.com",
          gender: "여성",
          nickname: "숟갈4",
          profile_image: "",
          profile_description: "숟갈4 20대 여성입니다.",
          age_range: "20대",
          mannerScore: 2,
          dining_spoons_description:
            "저도 그 식당 가고싶었어요! 함께 먹고 싶어요 밥장님",
          selected_yn: "N",
        },
        {
          spoon_email: "spoon5@gmail.com",
          gender: "여성",
          nickname: "숟갈5",
          profile_image: "",
          profile_description: "숟갈5 20대 여성입니다.",
          age_range: "20대",
          mannerScore: 3,
          dining_spoons_description:
            "저도 그 식당 가고싶었어요! 함께 먹고 싶어요 밥장님",
          selected_yn: "N",
        },
        {
          spoon_email: "spoon6@gmail.com",
          gender: "여성",
          nickname: "숟갈6",
          profile_image: "",
          profile_description: "숟갈6 20대 여성입니다.",
          age_range: "20대",
          mannerScore: 4,
          dining_spoons_description:
            "저도 그 식당 가고싶었어요! 함께 먹고 싶어요 밥장님",
          selected_yn: "N",
        },
        {
          spoon_email: "spoon7@gmail.com",
          gender: "여성",
          nickname: "숟갈7",
          profile_image: "",
          profile_description: "숟갈7 20대 여성입니다.",
          age_range: "20대",
          mannerScore: 1,
          dining_spoons_description:
            "저도 그 식당 가고싶었어요! 함께 먹고 싶어요 밥장님",
          selected_yn: "N",
        },
        {
          spoon_email: "spoon8@gmail.com",
          gender: "여성",
          nickname: "숟갈8",
          profile_image: "",
          profile_description: "숟갈8 20대 여성입니다.",
          age_range: "40대",
          mannerScore: 5,
          dining_spoons_description:
            "저도 그 식당 가고싶었어요! 함께 먹고 싶어요 밥장님",
          selected_yn: "N",
        },
      ],
      selected: [
        {
          spoon_email: "spoon1@gmail.com",
          gender: "여성",
          nickname: "숟갈1",
          profile_image: "",
          profile_description: "숟갈1 20대 여성입니다.",
          age_range: "20대",
          mannerScore: 3,
          dining_spoons_description:
            "저도 그 식당 가고싶었어요! 함께 먹고 싶어요 밥장님",
          selected_yn: "N",
        },
        {
          spoon_email: "spoon2@gmail.com",
          gender: "여성",
          nickname: "숟갈2",
          profile_image: "",
          profile_description: "숟갈2 20대 여성입니다.",
          age_range: "20대",
          mannerScore: 2,
          dining_spoons_description:
            "저도 그 식당 가고싶었어요! 함께 먹고 싶어요 밥장님",
          selected_yn: "N",
        },
        {
          spoon_email: "spoon3@gmail.com",
          gender: "여성",
          nickname: "숟갈3",
          profile_image: "",
          profile_description: "숟갈3 20대 여성입니다.",
          age_range: "20대",
          mannerScore: 4,
          dining_spoons_description:
            "저도 그 식당 가고싶었어요! 함께 먹고 싶어요 밥장님",
          selected_yn: "N",
        },
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    messageShow() {
      if (this.messageBoolean === false) {
        this.messageBoolean = true;
      } else {
        this.messageBoolean = false;
      }
    },
  },
});
</script>
