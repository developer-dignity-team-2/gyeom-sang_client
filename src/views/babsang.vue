<template>
  <div class="container">
    <div class="row my-4">
      <!-- 본문영역 -->
      <div class="col-xl-9 col-sm-12">
        <div class="row row-cols-1">
          <!-- 썸네일 -->
          <div class="col">
            <div class="img-wrap rounded">
              <img
                :src="thumbnail"
                :alt="babsangDetailData.restaurant_name"
                style="object-fit: cover"
              />
            </div>
          </div>
          <!-- 타이틀 -->
          <div class="col my-4">
            <div class="title">
              <h3 class="me-4" style="line-height: 1.5em">
                {{ babsangDetailData.dining_table_title }}
              </h3>

              <div class="status babsang-info mb-2">
                <span>#{{ diningStatus }}</span>
                <span>#{{ recruitGender() }}</span>
                <span>#{{ babsangDetailData.dining_count }}인상</span>
              </div>
            </div>
            <ul>
              <li>
                <dl>
                  <dt>식사 장소</dt>
                  <dd>
                    {{ babsangDetailData.restaurant_name }}
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>식사 일시</dt>
                  <dd>
                    {{ String(babsangDetailData.dining_datetime).slice(0, 16) }}
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>모집 기간</dt>
                  <dd>
                    {{
                      String(babsangDetailData.recruit_start_date).slice(0, 10)
                    }}
                    ~
                    {{
                      String(babsangDetailData.recruit_end_date).slice(0, 10)
                    }}
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
          <!-- 소개 내용 -->
          <div class="col">
            <div
              class="border rounded p-3"
              style="max-height: 20rem; overflow-x: hidden; overflow-y: auto"
              v-html="babsangDesciprion"
            ></div>
          </div>
          <!-- 구분선 -->
          <div class="col my-3 px-4">
            <hr style="background-color: #999" />
          </div>
          <!-- 지도 -->
          <div class="col">
            <ul class="mb-2">
              <li>
                <dl>
                  <dt>식당 위치</dt>
                  <dd>{{ babsangDetailData.restaurant_location }}</dd>
                </dl>
              </li>
            </ul>
            <div class="img-wrap map-wrap rounded">
              <BabsangMap
                v-if="
                  babsangDetailData.restaurant_latitude &&
                  babsangDetailData.restaurant_longitude
                "
                :lat="babsangDetailData.restaurant_latitude"
                :long="babsangDetailData.restaurant_longitude"
              />
            </div>
          </div>
          <div class="col d-flex justify-content-center my-5">
            <button
              class="btn btn-secondary mx-2 modify"
              v-if="isLeader"
              :disabled="setButtonDisabled()"
              @click="modifyBabsang"
            >
              수정
            </button>
            <button class="btn btn-secondary mx-2" @click="$goMain">
              목록
            </button>
            <button
              class="btn btn-secondary mx-2 delete"
              @click="deleteBabsang"
              v-if="isLeader"
            >
              삭제
            </button>
          </div>
          <h5>댓글</h5>
          <!-- 구분선 -->
          <!-- <div class="col">
						<hr style="background-color: #999" />
					</div> -->
          <!-- 댓글 -->
          <div class="col my-3">
            <CommentList
              :babsangDetailData="babsangDetailData"
              :buttonDisabled="setButtonDisabled()"
            />
            <CommentCreate :buttonDisabled="setButtonDisabled()" />
          </div>
        </div>
      </div>
      <!-- 정보 영역 -->
      <div class="col-xl-3 col-sm-12">
        <div class="row row-cols-1" style="position: sticky; top: 1rem">
          <!-- 밥장 정보 -->
          <div class="row">
            <UserCard
              v-if="babsangDetailData.dining_score !== undefined"
              :email="babsangDetailData.host_email"
              :gender="babsangDetailData.gender"
              :nickname="babsangDetailData.nickname"
              :profile_image="babsangDetailData.profile_image"
              :age_range="babsangDetailData.age_range"
              :dining_score="babsangDetailData.dining_score"
              :dining_spoons_description="babsangDetailData.profile_description"
            />

            <!-- 숟갈 선택하기 -->
            <div class="col border rounded mt-3 p-3">
              <div class="mb-2">
                <p class="mb-1">지금까지 신청한 숟갈들</p>
                <p style="font-size: 1.5rem">
                  <font-awesome-icon icon="fa-solid fa-spoon" />
                  <span class="ps-3">{{ countAppliedSpoons }}명 !</span>
                </p>
              </div>
              <div v-if="selectedUsers.length !== 0 && isLeader" class="mb-3">
                <p class="mb-1">선택된 숟갈들</p>
                <div class="selected-user">
                  <ul class="d-flex me-1 mb-1">
                    <li
                      v-for="(user, index) in selectedUsers"
                      :key="index"
                      class="me-1"
                    >
                      <div class="d-flex flex-column align-item-center">
                        <div class="thumb-wrap">
                          <img
                            :src="user.spoon_profile_image"
                            :alt="('user', index)"
                          />
                        </div>
                        <div class="nickname">
                          <span>{{ user.spoon_nickname }}</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <button
                class="btn btn-primary me-2 mb-2"
                @click="goSelectPage"
                :disabled="setButtonDisabled()"
                v-if="isLeader"
              >
                숟갈 선택
              </button>
              <div v-else>
                <button
                  class="btn btn-primary me-2 mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#toggleSpoonModal"
                  :disabled="setButtonDisabled()"
                  v-if="!spoonStatus"
                >
                  숟갈 얹기
                </button>
                <button
                  class="btn btn-primary me-2 mb-2"
                  @click="cancelSpoon"
                  :disabled="setButtonDisabled()"
                  v-if="spoonStatus"
                >
                  숟갈 빼기
                </button>
                <!-- <button
									class="btn btn-secondary me-2 mb-2"
									@click="goScorePage"
								>
									매너 평가(임시)
								</button> -->
              </div>
              <!-- <button
								v-if="isLeader"
								class="btn btn-secondary me-2 mb-2"
								@click="goScorePage"
							>
								매너 평가(임시)
							</button> -->
            </div>
          </div>
        </div>
      </div>
      <!-- 숟갈 얹기 모달 -->
      <slot-modal modalId="toggleSpoonModal">
        <template v-slot:title
          >{{ babsangDetailData.restaurant_name }} 밥상에 숟갈 얹기!
        </template>
        <template v-slot:body>
          <textarea
            class="form-control"
            style="resize: none"
            id="applySpoonTextarea"
            rows="3"
            v-model="spoonMessage"
          ></textarea>
        </template>
        <template v-slot:footer>
          <button
            class="btn btn-secondary"
            style="width: 100px; white-space: nowrap"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            취소
          </button>
          <button
            class="btn btn-primary"
            style="width: 100px; white-space: nowrap"
            @click="applySpoon"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            숟갈 얹기
          </button>
        </template>
      </slot-modal>
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/profile/UserCard';
import CommentCreate from '@/components/babsang/CommentCreate';
import CommentList from '@/components/babsang/CommentList';
import BabsangMap from '@/components/kakaoMap/BabsangMap';
import SlotModal from '@/components/common/SlotModal';
import { io } from 'socket.io-client';
import dayjs from 'dayjs';

export default {
  name: 'Babsang',
  components: {
    UserCard,
    CommentCreate,
    CommentList,
    BabsangMap,
    SlotModal,
  },
  data() {
    return {
      babsangDetailData: {},
      spoonStatus: '', // false 밥상에 숟갈 없음, true 밥상에 숟갈 있음
      diningStatus: '',
      countAppliedSpoons: 0,
      spoonMessage: '',
      selectedUsers: '',
      socket: '',
      babsangDesciprion: '',
      thumbnail:
        process.env.VUE_APP_DOMAIN_URL + '/static/images/default_img.jpeg',
    };
  },
  computed: {
    // 밥장/숟갈/게스트 분기처리
    isLeader() {
      // 유저 정보가 없을 때 false
      if (this.$store.state.user.userData === undefined) {
        return false;
      }
      // 현재 유저 정보와 밥상 이메일정보가 일치하면 true
      if (
        this.$store.state.user.userData.email ===
        this.babsangDetailData.host_email
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  async created() {
    setTimeout(() => {
      this.scrollInit();
    }, 100);
    await this.getBabsangDetailData();
    await this.countSpoons(); // doStatusInitial 보다 먼저 실행되어야 함
    await this.currentStatus(); // 현재의 밥상 status
    // await this.doStatusInitial(); // 조건에 따른 현재의 밥상 status
    await this.initialButton(); // 숟갈(얹기/빼기) 새로고침
  },
  mounted() {
    this.socket = io(process.env.VUE_APP_DOMAIN_URL);
    this.socket.on('increment', () => {
      this.countAppliedSpoons = this.countAppliedSpoons + 1;
    });
    this.socket.on('decrement', () => {
      this.countAppliedSpoons = this.countAppliedSpoons - 1;
    });
  },
  methods: {
    scrollInit() {
      window.scrollTo(0, 0);
    },
    // 모집 마감 버튼 처리
    setButtonDisabled() {
      // let nowTime = new Date(
      // 	new Date(+new Date() + 3240 * 10000)
      // 		.toISOString()
      // 		.replace('T', ' ')
      // 		.replace(/\..*/, ''),
      // ).getTime();
      // let nowTime = new Date().getTime();
      // let nowTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
      // let nowTime = dayjs().get('millisecond');
      // let diningTime = new Date(
      // 	this.babsangDetailData.dining_datetime,
      // ).getTime();
      let nowTime = dayjs();
      let diningTime = dayjs(this.babsangDetailData.dining_datetime);
      // console.log('new Date() : ', nowTime);
      // console.log(diningTime);
      // console.log('result : ', nowTime.diff(diningTime, 'ms'));
      let result = nowTime.diff(diningTime, 'ms');
      // if (nowTime - diningTime < 0) {
      // 	return false;
      // } else {
      // 	return true;
      // }
      if (result < 0) {
        return false;
      } else {
        return true;
      }
    },
    modifyBabsang() {
      this.$router.push({
        name: 'BabsangCreate',
        params: {
          babsangId: this.$route.params.babsangId,
        },
      });
    },
    writeMessage() {
      this.spoonMessage = `밥장님, ${this.babsangDetailData.restaurant_name} 밥상(${this.babsangDetailData.dining_datetime})에서 겸상하고 싶어요~`;
    },
    // 숟갈(얹기/빼기) 새로고침 버튼
    async initialButton() {
      let alreadySpoon = await this.alreadySpoon();

      if (alreadySpoon.length > 0) {
        this.spoonStatus = true;
      } else {
        this.spoonStatus = false;
      }
    },
    // 로그인 사용자가 숟갈 얹은 유저인지 확인
    async alreadySpoon() {
      const confirmUsers = (
        await this.$get(
          `/babsang/${this.$route.params.babsangId}/babsangSpoons`
        )
      ).result;
      let user = this.$store.state.user.userData.email;
      let confirmUser = confirmUsers.filter(
        (u) => u.spoon_email === user && u.apply_yn === 'Y'
      );
      return confirmUser;
    },
    // 신청한 숟갈 수 계산
    async countSpoons() {
      const confirmUsers = (
        await this.$get(
          `/babsang/${this.$route.params.babsangId}/babsangSpoons`
        )
      ).result;
      this.countAppliedSpoons = confirmUsers.filter(
        (user) => user.apply_yn === 'Y'
      ).length;
      this.selectedUsers = confirmUsers.filter(
        (user) => user.selected_yn === 'Y' && user.apply_yn !== 'N'
      );
    },

    // 숟갈 얹기 post
    async postSpoon() {
      this.socket.emit('postSpoon');

      await this.$post(
        `/babsang/${this.$route.params.babsangId}/babsangSpoons?type=apply`,
        {
          param: {
            spoon_email: this.$store.state.user.userData.email,
            dining_table_id: this.$route.params.babsangId,
            apply_yn: 'Y',
            selected_yn: 'N',
            dining_spoon_description: this.spoonMessage,
            cancel_date: null,
          },
        }
      );
    },
    // 숟갈 얹기 로직
    async applySpoon() {
      // 이미 숟갈 얹은 경우인지 확인
      let loader = this.$loading.show({ canCancel: false });

      let alreadySpoon = await this.alreadySpoon();

      if (alreadySpoon > 0) {
        this.$swal({
          title: '이미 숟갈 얹은 밥상!',
          text: `${this.$store.state.user.userData.profile.nickname}님은 ${this.babsangDetailData.restaurant_name} 밥상에 이미 숟갈을 얹으셨습니다.`,
          icon: 'warning',
          iconColor: '#ffcb00',
          confirmButtonText: '확인',
          confirmButtonColor: '#ffcb00',
        });
        this.spoonStatus = true;
        return;
      }

      await this.postSpoon(); // 숟갈 얹기
      await this.countSpoons(); // 신청한 숟갈 계산
      await this.initialButton(); // 숟갈 얹기, 빼기 버튼 새로고침

      loader.hide();

      this.$swal({
        title: '숟갈 얹기 성공!',
        text: `${this.$store.state.user.userData.profile.nickname}님은 ${this.babsangDetailData.restaurant_name} 밥상에 숟갈을 얹으셨습니다.`,
        icon: 'success',
        iconColor: '#ffcb00',
        confirmButtonText: '확인',
        confirmButtonColor: '#ffcb00',
      });
    },
    // 숟갈 빼기 로직
    async cancelSpoon() {
      this.socket.emit('cancelSpoon');

      let userEmail = this.$store.state.user.userData.email;

      let loader = this.$loading.show({ canCancel: false });

      // 이미 숟갈 얹은 경우인지 확인
      let alreadySpoon = await this.alreadySpoon();
      let spoonEmail = alreadySpoon[0].spoon_email;

      // 숟갈 얹은 유저이면 숟갈 빼기
      if (spoonEmail === userEmail) {
        await this.$put(
          `/babsang/${this.$route.params.babsangId}/babsangSpoons?type=applyCancel`,
          {
            spoon_email: userEmail,
            param: {
              apply_yn: 'N',
              // cancel_date: '',
            },
          }
        );
        await this.$put(
          `/babsang/${this.$route.params.babsangId}/babsangSpoons?type=pickCancel`,
          {
            spoon_email: userEmail,
            param: {
              selected_yn: 'N',
              // cancel_date: '2022-06-10',
            },
          }
        );
      }

      await this.changeStatus(0); // 밥상 status 모집중 변경
      // await this.countSpoons(); // 신청한 숟갈 계산
      // await this.initialButton(); // 숟갈 얹기, 빼기 버튼 새로고침
      // await this.doStatusInitial(); // 밥상 status 모집중 변경(숟갈이 모두 확정되지 않은 경우, 숟갈이 숟갈 빼기한 경우)

      loader.hide();

      this.$swal({
        title: '숟갈 빼기 완료!',
        text: `${this.$store.state.user.userData.profile.nickname}님은 ${this.babsangDetailData.restaurant_name} 밥상에서 숟갈을 빼셨습니다.`,
        icon: 'warning',
        iconColor: '#ffcb00',
        confirmButtonText: '확인',
        confirmButtonColor: '#ffcb00',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.$router.go(); // 새로고침
        }
      });
    },
    async deleteBabsang() {
      this.$swal({
        title: '밥상을 삭제하시겠습니까?',
        text: '삭제된 밥상은 복원되지 않습니다.',
        icon: 'warning',
        showCancelButton: true,
        iconColor: '#ffcb00',
        confirmButtonColor: '#ffcb00',
        // cancelButtonColor: '#f4f4f4',
        cancelButtonColor: '#d33',
        cancelButtonText: '취소',
        confirmButtonText: '삭제',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const loader = this.$loading.show({ canCancel: false });

          const r = await this.$delete(
            `/babsang/${this.$route.params.babsangId}`
          );

          loader.hide();

          r;

          if (r.status === 200) {
            this.$swal({
              title: '밥상이 삭제되었습니다.',
              icon: 'success',
              iconColor: '#ffcb00',
              confirmButtonText: '확인',
              confirmButtonColor: '#ffcb00',
            });
            this.$router.push({
              path: '/',
            });
          } else if (r.status === 501) {
            this.$swal({
              title: '밥상 삭제 실패!',
              text: `삭제하려는 밥상이 ${r.count}건 존재합니다.`,
              icon: 'warning',
              iconColor: '#ffcb00',
              confirmButtonText: '확인',
              confirmButtonColor: '#ffcb00',
            });
            this.$router.push(`/babsang/${this.$route.params.babsangId}`);
          }
        }
      });
    },
    // 밥상 상태 변경(0-모집 중, 1-모집 완료)
    async changeStatus(status) {
      await this.$put(`/babsang/${this.$route.params.babsangId}`, {
        param: {
          dining_status: status,
        },
      });
      this.currentStatus();
    },
    goSelectPage() {
      this.$router.push({
        name: 'BabsangSelect',
        query: { babsangId: this.$route.params.babsangId },
      });
    },
    // goScorePage() {
    // 	this.$router.push({
    // 		name: 'GiveScore',
    // 		query: { babsangId: this.$route.params.babsangId },
    // 	});
    // },
    async getBabsangDetailData() {
      this.babsangDetailData = (
        await this.$get('/babsang/' + this.$route.params.babsangId)
      ).result[0];
      // textarea 줄바꿈
      this.babsangDesciprion =
        this.babsangDetailData.dining_description.replaceAll(
          /(\n|\r\n)/g,
          '<br>'
        );
      // 이미지 로딩 후 thumbnail에 데이터값 재할당.
      this.thumbnail = `${process.env.VUE_APP_DOMAIN_URL}/static/images/${this.babsangDetailData.dining_thumbnail}`;

      this.writeMessage(); // 숟갈 메시지 초기화
    },
    async currentStatus() {
      // let currentStatus = this.babsangDetailData.dining_status;
      let currentStatus = (
        await this.$get('/babsang/' + this.$route.params.babsangId)
      ).result[0].dining_status;
      this.diningStatus = currentStatus === 0 ? '모집중' : '모집 마감';
    },
    recruitGender() {
      let gender = this.babsangDetailData.gender_check;
      let genderStatus;
      if (gender === 'ALL') {
        genderStatus = '혼성';
      } else if (gender === 'F') {
        genderStatus = '여성';
      } else {
        genderStatus = '남성';
      }
      return genderStatus;
    },
  },
};
</script>
<style scoped lang="scss">
.img-wrap {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.26%;
  overflow: hidden;
  &.map-wrap {
    padding-bottom: 40%;
  }
}
.img-wrap.pf {
  padding-bottom: 100%;
}
.img-wrap img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
ul,
dl {
  padding: 0;
  margin: 0;
  list-style: none;
}
li {
  display: block;
}
dl {
  display: flex;
}
dt {
  margin-right: 1rem;
}
.selected-user {
  .thumb-wrap {
    width: 2rem;
    height: 2rem;
    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
  }
  .nickname {
    font-size: 0.5rem;
  }
}
button {
  &.modify {
    color: #fff;
    background-color: #ffc144;
  }
  &.delete {
    color: #fff;
    background-color: #ff7851;
  }
}
.babsang-info {
  span {
    margin-right: 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: #ffcb00;
  }
}
// Sweetalert
.swal-button {
  padding: 7px 19px;
  border-radius: 2px;
  background-color: #ffcb00;
  //   background-color: #4962B3;
  font-size: 12px;
  border: 1px solid #ffcb00;
  //   border: 1px solid #3e549a;
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
}
</style>
