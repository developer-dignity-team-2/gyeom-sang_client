<template>
  <q-page class="q-pb-xl" style="width: 1100px; margin: 0 auto">
    <div class="row">
      <!-- 본문 영역 -->
      <div class="col-8">
        <div class="column q-pa-md">
          <!-- 썸네일 -->
          <div class="col">
            <q-img
              style="border-radius: 15px; height: 450px"
              src="https://cdn.pixabay.com/photo/2016/09/23/23/23/restaurant-1690696_1280.jpg"
              :ratio="16 / 9"
            />
          </div>
          <!-- 밥상 제목 및 정보-->
          <div class="col q-mb-md">
            <div>
              <div class="row q-mt-md" style="align-items: center">
                <div class="text-h6 q-mr-md">제주 연돈</div>
                <div>
                  <q-chip rounded color="orange-2" text-color="">
                    모집중
                  </q-chip>
                  <q-chip rounded color="orange-2" text-color=""> 3/4 </q-chip>
                  <q-chip rounded color="orange-2" text-color=""> 혼성 </q-chip>
                </div>
              </div>
              <div class="period">
                <ul>
                  <li>
                    <dl>
                      <dt>식사 일시</dt>
                      <dd>2022.06.15</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>모집 기간</dt>
                      <dd>2022.06.10~2022.06.13</dd>
                    </dl>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 밥상 소개글 -->
          <div class="col">
            <q-card>
              <q-card-section style="height: 300px">
                안녕하세요! 연돈 같이 가실분 구해요ㅎㅎ
              </q-card-section>
            </q-card>
          </div>

          <q-separator class="q-mt-xl" />

          <!-- 지도 -->
          <div class="col period q-my-md">
            <div class="q-my-md">
              <dl>
                <dt>식당 위치</dt>
                <dd>제주 서귀포시 일주서로 968-10</dd>
              </dl>
            </div>

            <q-img
              style="height: 300px"
              src="~/assets/img/map.png"
              :ratio="16 / 9"
            />
          </div>

          <!-- 버튼 영역 -->
          <div class="col q-my-xl">
            <div class="" style="display: flex; justify-content: center">
              <q-btn class="q-mx-md">삭제</q-btn>
              <q-btn class="q-mx-md">목록</q-btn>
              <q-btn class="q-mx-md">수정</q-btn>
            </div>
          </div>

          <q-separator class="q-mb-xl" />

          <!-- 댓글 -->
          <div class="col">
            <q-card>
              <q-card-section> 댓글 </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <!-- 사이드 정보 영역 -->
      <div class="col-4">
        <div class="column q-pa-md">
          <!-- 밥장 프로필 -->
          <div class="col">
            <q-card class="my-card" bordered>
              <q-card-section>
                <div class="text-subtitle1 period">
                  <dl>
                    <dt>밥장 |</dt>
                    <dd>김민수</dd>
                  </dl>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- 신청한 숟갈 -->
          <div class="col">
            <q-card>
              <q-card-section>
                <q-btn @click="moveSelectPage()">숟갈 선택하기</q-btn>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
// import { defineComponent } from 'vue'

export default {
  name: "ReadBabsang",
  date() {
    return {};
  },
  methods: {
    moveSelectPage() {
      this.$router.push({
        path: "/select-spoon",
      });
    },
  },
};
</script>
<style scoped lang="scss">
ul,
dl,
dd {
  margin: 0;
  padding: 0;
}
.period {
  ul {
    list-style: none;
    margin: 5px 0 0;
  }
  dl {
    display: flex;
    dt {
      color: #888;
    }
    dd {
      padding-left: 11px;
    }
  }
}
</style>
