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
    <div class="col-9 q-mb-md">
      <h5 class="q-mb-md">메세지함</h5>
      <div class="text-center q-pa-xs" style="">
        <q-card-section dark bordered class="bg-grey-3">
          <div class="text-h6">
            개발자의 품격님!<br />
            밥상이 차려졌습니다. 해당 카카오톡 url로 참석해주세요!<br />
            open.kakaotalk.ding-co.com <br />
            같이 맛있는 칼국수 먹어봐요~
          </div>
        </q-card-section>
      </div>
      <div class="q-mt-xs row q-gutter-md">
        <q-card class="my-card col-8" flat bordered>
          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat> 7:30PM </q-btn>
            <q-btn flat color="primary"> 예약 </q-btn>

            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-item clickable>
                  <q-item-section>밥상 상세보기</q-item-section>
                </q-item>
              </q-menu>
            </q-btn>
          </q-card-actions>

          <q-separator />
          <q-card-section horizontal>
            <q-card-section class="col-5 flex flex-center">
              <q-img
                class="rounded-borders"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzEwMjBfODcg%2FMDAxNTA4NDkyMzcyOTY2.aNnmXIrCfDQHskvTKhezqAJFn8m93GJkVfToPElw2kMg.ZIJz_XIHwQuC4nZ4lg4vbHqZSukNtg8AsdwP4bmvXDIg.JPEG.pys0382%2FIMG_0973-1_-_%25BA%25B9%25BB%25E7%25BA%25BB.jpg&type=sc960_832"
              />
            </q-card-section>
            <q-card-section class="">
              <div class="text-h5 q-mt-sm q-mb-xs">제주도 할매 칼국수</div>
              <div class="text-caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
        <q-separator />

        <q-card class="my-card col-3 q-ml-auto">
          <q-btn align:rigth color="grey-7" round flat icon="more_vert">
            <q-menu cover auto-close>
              <q-item clickable>
                <q-item-section>프로필 상세보기</q-item-section>
              </q-item>
            </q-menu>
          </q-btn>

          <q-card-section>
            <div class="text-h6 q-mb-xs">개발자의 품격</div>
            <text>안녕하세요. 같이 밥 먹어요^^~ </text>
            <div class="row no-wrap items-center">
              <q-rating
                size="18px"
                v-model="stars"
                :max="4.36"
                color="primary"
              />
              <span class="text-caption text-grey q-ml-sm">4.26</span>
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img
              class="rounded-borders"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MjNfOTIg%2FMDAxNjUzMjc1MDU0NDk2.sVAdZMhxoLOGnGz8bmafSD51ecnQXDAHgAaDKpnUASQg.YjM7kLsM3pBn3xxyJ5fsScT-6vKoVP8KoPHlyWsfaS4g.JPEG.phr9000%2FIMG_1984.jpg&type=sc960_832"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div align="center">
      <q-btn class="q-mx-xl" unelevated rounded color="grey-5" label="목록" />
      <q-btn unelevated rounded color="grey-5" label="삭제" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MessageDetail",
});
</script>
