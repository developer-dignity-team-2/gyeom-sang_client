<template>
  <q-page style="width: 800px; margin: 0 auto" class="">
    <!-- **1 파일 업로드 -->
    <div class="q-my-md" style="position: relative">
      <q-img
        style="border-radius: 15px"
        src="https://cdn.pixabay.com/photo/2016/09/23/23/23/restaurant-1690696_1280.jpg"
        :ratio="16 / 9"
      />
      <q-btn
        color="white"
        text-color="orange"
        round
        icon="image"
        style="position: absolute; bottom: 15px; right: 15px"
      />
    </div>
    <!-- **2 밥상 정보 입력 -->
    <div class="column">
      <div class="q-pa-md" style="border: 1px solid gray; border-radius: 15px">
        <div class="col">
          <q-input color="orange" v-model="text" label="식당 이름" />
        </div>
        <div class="col">
          <q-input color="orange" v-model="text" label="식당 위치 검색하기">
            <template v-slot:prepend>
              <q-icon name="pin_drop" />
            </template>
          </q-input>
        </div>
        <div class="col">
          <q-input color="orange" v-model="text" label="식당 일시">
            <template v-slot:prepend>
              <q-icon name="calendar_month" />
            </template>
          </q-input>
        </div>
        <div class="col">
          <q-input color="orange" v-model="text" label="모집 기간">
            <template v-slot:prepend>
              <q-icon name="schedule" />
            </template>
          </q-input>
        </div>

        <div
          class="col q-mt-xs"
          style="border-bottom: 1px solid rgba(0, 0, 0, 0.24)"
        >
          <p style="font-size: 25px" class="q-ma-none">
            <span style="margin-right: 10px">
              <q-icon name="wc"></q-icon>
            </span>
            <span class="q-field__label">성별 선택</span>
          </p>
          <div class="q-gutter-sm">
            <q-radio
              v-model="shape"
              checked-icon="task_alt"
              color="orange"
              unchecked-icon="panorama_fish_eye"
              val="mix"
              label="혼성"
            />
            <q-radio
              v-model="shape"
              checked-icon="task_alt"
              color="orange"
              unchecked-icon="panorama_fish_eye"
              val="man"
              label="남성"
            />
            <q-radio
              v-model="shape"
              checked-icon="task_alt"
              color="orange"
              unchecked-icon="panorama_fish_eye"
              val="woman"
              label="여성"
            />
          </div>
        </div>
        <div
          class="col q-pb-md"
          style="border-bottom: 1px solid rgba(0, 0, 0, 0.24)"
        >
          <p style="font-size: 25px" class="q-ma-none">
            <span style="margin-right: 10px">
              <q-icon name="groups"></q-icon>
            </span>
            <span class="q-field__label">모집 인원</span>
          </p>
          <q-input
            v-model.number="model"
            color="orange"
            type="number"
            filled
            style="max-width: 200px"
          />
        </div>
        <div class="col q-pb-md">
          <p style="font-size: 25px" class="q-ma-none">
            <span style="margin-right: 10px">
              <q-icon name="rice_bowl"></q-icon>
            </span>
            <span class="q-field__label">밥상 소개하기</span>
          </p>
          <q-input
            v-model="text"
            color="orange"
            filled
            type="textarea"
            placeholder="함께하고 싶은 밥상을 소개해 주세요!"
            :input-style="{ resize: 'none' }"
          />
        </div>
      </div>
    </div>
    <!-- **3 버튼 -->
    <div class="q-mb-xl" style="display: flex; justify-content: center">
      <q-btn class="q-ma-lg" style="width: 150px">밥상 엎기</q-btn>
      <q-btn class="q-ma-lg" style="width: 150px">밥상 차리기</q-btn>
    </div>
  </q-page>
</template>

<script>
// import { defineComponent } from "vue";

export default {
  name: "CreateBabsang",
  data() {
    return {
      text: "",
      shape: "",
      model: 4,
    };
  },
};
</script>
