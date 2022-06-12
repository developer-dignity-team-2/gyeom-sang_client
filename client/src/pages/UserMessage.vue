<template>
  <div class="row q-mx-xl justify-center">
    <div class="my-card col-2">
      <div>
        <div class="">
          <div class="q-mr-md q-my-md">
            <q-list dense bordered padding class="rounded-borders">
              <q-item class="text-weight-bold">{{ profile }} 님</q-item>
              <q-item>{{ email }}</q-item>
            </q-list>
          </div>
          <div class="q-mr-md q-my-md">
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
                <q-item-section class="text-weight-bold">
                  메시지함
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </div>

    <div class="col-9">
      <h5>메세지함</h5>

      <div align="right">
        <q-btn size="12px">삭제</q-btn>
      </div>

      <!-- 모집중 최신순이 오른쪽 정렬이 되지않음(15줄부터 48줄) -->
      <q-card-actions>
        <q-btn flat style="color: gray" label="받은메세지" />
        <q-btn flat style="color: gray" label="보낸메세지" />

        <q-btn-dropdown
          style="color: gray"
          label="모집중"
          dropdown-icon="change_history"
          size="12px"
        >
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>모집마감</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

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
      </q-card-actions>
      <q-markup-table class="square-Boolean" @click="moveDetailMessage()">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th v-for="th in Headers" :key="th.key" class="text-left">
              {{ th.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr :key="i" v-for="(user, i) in userData">
            <td><input type="checkbox" /></td>
            <td v-for="th in Headers" :key="th.key" class="text-left">
              {{ user[th.key] }}
            </td>
          </tr>
        </tbody>
      </q-markup-table>
      <div class="q-pa-lg flex flex-center">
        <q-pagination v-model="current" :max="5" input />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "UserMessage",
  data() {
    return {
      Headers: [
        {
          title: "닉네임",
          key: "name",
        },
        { title: "내용", key: "message" },
        { title: "장소", key: "place" },
        { title: "날짜", key: "data" },
      ],
      userData: [
        {
          id: 0,
          name: "개발자의품격",
          message: "메세지가 도착했습니다",
          place: "제주 할매 칼국수",
          data: 2022.06,
        },
        {
          id: 1,
          name: "김민수",
          message: "메세지가 도착했습니다",
          place: "제주 할매 칼국수",
          data: 2022.06,
        },
        {
          id: 2,
          name: "원신희",
          message: "메세지가 도착했습니다",
          place: "제주 할매 칼국수",
          data: 2022.06,
        },
        {
          id: 3,
          name: "양세영",
          message: "메세지가 도착하였습니다",
          place: "제주도 할매 칼국수",
          data: "22.06.06",
        },
        {
          id: 4,
          name: "유승완",
          message: "메세지가 도착하였습니다",
          place: "제주도 할매 칼국수",
          data: "22.06.06",
        },
        {
          id: 5,
          name: "윤여진",
          message: "메세지가 도착하였습니다",
          place: "제주도 할매 칼국수",
          data: "22.06.06",
        },
        {
          id: 6,
          name: "김준현",
          message: "메세지가 도착하였습니다",
          place: "제주도 할매 칼국수",
          data: "22.06.06",
        },
        {
          id: 7,
          name: "차은우",
          message: "메세지가 도착하였습니다",
          place: "제주도 할매 칼국수",
          data: "22.06.06",
        },
        {
          id: 8,
          name: "이민형",
          message: "메세지가 도착하였습니다",
          place: "제주도 할매 칼국수",
          data: "22.06.06",
        },
        {
          id: 9,
          name: "정재현",
          message: "메세지가 도착하였습니다",
          place: "제주도 할매 칼국수",
          data: "22.06.06",
        },
        {
          id: 10,
          name: "황민현",
          message: "메세지가 도착하였습니다",
          place: "제주도 할매 칼국수",
          data: "22.06.06",
        },
        {
          id: 11,
          name: "연준",
          message: "메세지가 도착하였습니다",
          place: "제주도 할매 칼국수",
          data: "22.06.06",
        },
        {
          id: 12,
          name: "문세윤",
          message: "메세지가 도착하였습니다",
          place: "제주도 할매 칼국수",
          data: "22.06.06",
        },
        {
          id: 13,
          name: "배고파",
          message: "메세지가 도착하였습니다",
          place: "제주도 할매 칼국수",
          data: "22.06.06",
        },
      ],
    };
  },
  methods: {
    moveDetailMessage() {
      this.$router.push({
        path: "/mypage/message/read",
      });
    },
  },
  setup() {
    return {
      current: ref(1),
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
