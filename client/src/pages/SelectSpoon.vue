<template>
  <q-page class="row" style="width: 1100px; margin: 0 auto">
    <div class="col">
      <div class="text-h6 q-mb-sm">함께 식사할 숟갈을 선택해 주세요!</div>
      <div>신청한 숟갈</div>
      <div
        class="q-card q-card--bordered q-card--flat no-shadow doc-example q-my-lg row"
      >
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card
            class="my-card text-white"
            style="
              background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
            "
          >
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>

          <q-card dark bordered class="bg-grey-9 my-card">
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-separator dark inset />

            <q-card-section>
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>
        <!-- 숟갈 카드 -->
        <div
          class="items-start col-6"
          :key="spoon.spoon_email"
          v-for="spoon in candidate"
        >
          <q-card class="my-card" flat bordered>
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

    <div class="col">
      <div>함께할 숟갈</div>
      <div
        class="q-card q-card--bordered q-card--flat no-shadow doc-example q-my-lg"
      >
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card
            class="my-card text-white"
            style="
              background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
            "
          >
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>

          <q-card dark bordered class="bg-grey-9 my-card">
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-separator dark inset />

            <q-card-section>
              {{ lorem }}
            </q-card-section>
          </q-card>
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
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
});
</script>
