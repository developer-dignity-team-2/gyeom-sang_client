<template>
	<div class="container mb" style="max-width: 900px">
		<!-- 썸네일 추가 -->
		<div class="row my-4">
			<div class="col">
				<div class="img-wrap rounded">
					<div
						class="image-input"
						:style="{ 'background-image': `url(${imageData})` }"
						@click="chooseImage"
					>
						<input
							type="file"
							class="form-control file-control"
							ref="fileInput"
							accept="image/png, image/jpeg, image/jpg"
							@change="onSelectFile"
						/>
						<div class="upload-background" v-if="!imageData">
							<font-awesome-icon
								icon="fa-regular fa-image"
								style="color: rgba(0, 0, 0, 0.3); font-size: 2rem"
							/>
							<span
								class="mt-2"
								style="
									font-weight: bold;
									color: rgba(0, 0, 0, 0.5);
									display: block;
								"
								>밥상 사진을 업로드 해주세요 !</span
							>
							<small style="font-weight: light; color: rgba(0, 0, 0, 0.5)"
								>(이미지 용량 1M 제한입니다.)</small
							>
						</div>
					</div>
				</div>
			</div>
			<div v-if="v$.dining_thumbnail.$error" class="error-msg">
				밥상에 대한 사진을 업로드해주세요.
			</div>
		</div>

		<!-- 신청폼 -->
		<div class="row" style="margin-bottom: 4rem">
			<div class="col">
				<form class="border rounded p-4">
					<fieldset>
						<div class="form-group">
							<label for="title" class="form-label mt-4">밥상 제목</label>
							<input
								type="text"
								class="form-control"
								id="title"
								placeholder="밥상 제목"
								v-model.trim="title"
							/>
						</div>
						<div class="error-msg" v-if="v$.title.$error">
							밥상 제목을 입력해주세요.
						</div>
						<div v-show="!isModify" class="form-group" @click="mapToggle">
							<label for="place-address" class="form-label mt-4"
								>식당 이름</label
							>
							<input
								type="text"
								class="form-control"
								id="place-address"
								placeholder="식당 검색하기"
								v-model="placeName"
								disabled
							/>
						</div>
						<div
							v-show="!isModify"
							class="error-msg"
							v-if="!isModify && v$.placeName.$error"
						>
							식당을 선택해 주세요.
						</div>
						<div v-show="!isModify" class="form-group">
							<label for="place-name" class="form-label mt-4">식당 위치</label>
							<input
								type="text"
								class="form-control"
								id="place-name"
								placeholder="식당 검색시 자동으로 입력됩니다."
								v-model="placeAddress"
								disabled
							/>
						</div>

						<!-- datepicker 삽입
						lowerLimit: 지정한 기준으로 하한인 날은 disable -->
						<div v-show="!isModify" class="form-group row mt-4">
							<div class="col">
								식사 일시
								<datepicker
									hideInputIcon
									v-model="dining_datetime"
									:placeholder="
										isModify ? modifyData.dining_datetime : '식사 일시'
									"
									:minDate="new Date()"
									format="yyyy-MM-dd"
									:enableTimePicker="false"
									:clearable="false"
									:transitions="false"
								></datepicker>
								<div
									class="error-msg"
									v-if="!isModify && v$.dining_datetime.$error"
								>
									식사 일시를 선택해 주세요.
								</div>
							</div>
							<div class="col">
								<div class="form-group">
									<div>식사 시간</div>
									<Datepicker
										input-class-name="time-picker"
										:placeholder="isModify ? modify_time() : '식사 시간'"
										v-model="time"
										timePicker
										hideInputIcon
										:min-time="minTime()"
										:disabled="!this.dining_datetime"
										minutesIncrement="5"
										noMinutesOverlay
										:clearable="false"
										:start-time="{
											hours: new Date().getHours() + 1,
											minutes: 0,
										}"
										:transitions="false"
									/>
								</div>
								<div class="error-msg" v-if="!isModify && v$.time.$error">
									식사 시간을 선택해 주세요.
								</div>
							</div>
						</div>

						<div v-show="!isModify" class="form-group mt-4 row">
							<div class="col-12 mb-1">
								모집 기간(당일은 같은 날 두번 꾹꾹!)
							</div>
							<datepicker
								input-class-name="recruit-picker"
								range
								v-model="recruit_date"
								:placeholder="isModify ? m_recruit_date() : '모집 기간'"
								:minDate="new Date()"
								:maxDate="dining_datetime"
								:disabled="!time"
								format="yyyy-MM-dd"
								hideInputIcon
								:enableTimePicker="false"
								:clearable="false"
								:transitions="false"
							></datepicker>
						</div>
						<div
							v-show="!isModify"
							class="error-msg"
							v-if="!isModify && v$.recruit_date.$error"
						>
							모집 기간을 선택해 주세요.
						</div>

						<div v-show="!isModify" class="form-group">
							<label class="mt-4">성별 선택</label>
							<div class="row mt-2">
								<div class="col-xl-4 col-md-4 col-sm-12 mb-2">
									<input
										type="radio"
										class="list-group-item-check pe-none"
										name="genderPick"
										id="gender-all"
										value="ALL"
										v-model="gender_check"
									/>
									<label
										class="list-group-item rounded-3 py-3"
										style="text-align: center; cursor: pointer"
										for="gender-all"
										>혼성</label
									>
								</div>
								<div class="col-xl-4 col-md-4 col-sm-12 mb-2">
									<input
										type="radio"
										class="list-group-item-check pe-none"
										name="genderPick"
										id="gender-m"
										value="M"
										v-model="gender_check"
									/>
									<label
										class="list-group-item rounded-3 py-3"
										style="text-align: center; cursor: pointer"
										for="gender-m"
										>남성</label
									>
								</div>
								<div class="col-xl-4 col-md-4 col-sm-12">
									<input
										type="radio"
										class="list-group-item-check pe-none"
										name="genderPick"
										id="gender-f"
										value="F"
										v-model="gender_check"
									/>
									<label
										class="list-group-item rounded-3 py-3"
										style="text-align: center; cursor: pointer"
										for="gender-f"
										>여성</label
									>
								</div>
							</div>
							<div
								v-if="!isModify && v$.gender_check.$error"
								class="error-msg ms-1"
								style="padding: 0"
							>
								모집할 숟갈의 성별을 선택해 주세요.
							</div>
						</div>
						<div v-show="!isModify" class="form-group">
							<label class="form-label mt-4">밥상 유형</label>
							<!-- <label class="form-label mt-4">모집 인원</label> -->
							<div class="row">
								<div class="col-xl-4 col-md-4 col-sm-12 mb-2">
									<input
										type="radio"
										class="list-group-item-check pe-none"
										name=""
										id="two-people"
										value="2"
										v-model="dining_count"
									/>
									<label
										class="list-group-item rounded-3 py-3"
										style="text-align: center; cursor: pointer"
										for="two-people"
										>2인상</label
									>
								</div>
								<div class="col-xl-4 col-md-4 col-sm-12 mb-2">
									<input
										type="radio"
										class="list-group-item-check pe-none"
										name=""
										id="three-people"
										value="3"
										v-model="dining_count"
									/>
									<label
										class="list-group-item rounded-3 py-3"
										style="text-align: center; cursor: pointer"
										for="three-people"
										>3인상</label
									>
								</div>
								<div class="col-xl-4 col-md-4 col-sm-12">
									<input
										type="radio"
										class="list-group-item-check pe-none"
										name=""
										id="four-people"
										value="4"
										v-model="dining_count"
									/>
									<label
										class="list-group-item rounded-3 py-3"
										style="text-align: center; cursor: pointer"
										for="four-people"
										>4인상</label
									>
								</div>
							</div>
							<div
								v-if="!isModify && v$.dining_count.$error"
								class="error-msg ms-1"
								style="padding: 0"
							>
								모집할 인원을 선택해 주세요.
							</div>
						</div>
						<div class="form-group">
							<label for="dining_description" class="form-label mt-4"
								>밥상 소개하기</label
							>
							<textarea
								class="form-control"
								id="dining_description"
								v-model.trim="dining_description"
								style="resize: none; height: 10rem"
								@input="onChangeDiningDescription"
								maxlength="512"
							></textarea>
							<InputTextWarning
								:inputMaxLength="inputWarningMsgLength"
								:open="openInputWarningMsg"
							/>
							<div class="error-msg" v-if="v$.dining_description.$error">
								밥장님의 밥상을 소개해 주세요.
							</div>
						</div>
						<div class="d-flex justify-content-center mt-5">
							<button
								v-if="isModify"
								type="button"
								class="btn btn-secondary mx-3"
								@click="$goBack"
							>
								취소
							</button>
							<button
								v-else
								type="button"
								class="btn btn-secondary mx-3"
								@click="$goBack"
							>
								밥상 엎기
							</button>
							<button
								v-if="isModify"
								@click.prevent="modifyBabsang"
								class="btn btn-primary mx-3"
							>
								밥상 수정하기
							</button>
							<button
								v-else
								@click.prevent="onSubmitForm"
								class="btn btn-primary mx-3"
							>
								밥상 차리기
							</button>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
		<KakaoMap v-if="this.$store.state.isShow" @placeInfo="placeInfo" />
	</div>
</template>

<script>
import KakaoMap from '@/components/kakaoMap/KakaoMap.vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import InputTextWarning from '@/components/input/InputTextWarning.vue';

export default {
	name: 'BabsangCreate',
	components: { Datepicker, KakaoMap, InputTextWarning },
	setup() {
		return {
			v$: useVuelidate(),
		};
	},
	data() {
		return {
			dining_datetime: '',
			recruit_date: '',
			recruit_start_date: '',
			recruit_end_date: '',
			gender_check: '',
			dining_description: '',
			dining_count: '',
			dining_thumbnail: '',
			imageData: '',
			imgSrc: '',
			babsangId: '',
			placeName: '',
			placeAddress: '',
			placeLatitude: '',
			placeLongitude: '',
			title: '',
			modifyData: '',
			openInputWarningMsg: false,
			inputWarningMsgLength: 512,
			time: '',
		};
	},
	watch: {
		dining_datetime() {
			if (this.isModify || this.recruit_date || this.time) {
				this.resetData();
			}
		},
		recruit_date(newVal) {
			if (newVal[1] === null) {
				// alert('모집 마감 날짜를 선택해주세요.');

				this.$swal({
					title: `모집 마감 날짜를 선택해주세요.`,
					icon: 'warning',
					iconColor: '#ffcb00',
					confirmButtonColor: '#ffcb00',
					cancelButtonColor: '#d33',
					confirmButtonText: '확인',
				});
				this.recruit_date = '';
			} else {
				this.setRecruitDate();
			}
		},
	},
	computed: {
		isModify() {
			return !!this.$route.params.babsangId;
		},
	},
	validations() {
		if (this.isModify) {
			return {
				title: {
					required,
				},
				dining_description: {
					required,
				},
				dining_thumbnail: {
					required,
				},
			};
		} else {
			return {
				title: {
					required,
				},
				dining_description: {
					required,
				},
				dining_datetime: {
					required,
				},
				time: {
					required,
				},
				recruit_date: {
					required,
				},
				dining_thumbnail: {
					required,
				},
				gender_check: {
					required,
				},
				dining_count: {
					required,
				},
				placeName: {
					required,
				},
			};
		}
	},

	mounted() {
		window.scrollTo(0, 0);
		this.getBabsangDetailData();
	},

	methods: {
		m_recruit_date() {
			if (
				this.modifyData.recruit_start_date &&
				this.modifyData.recruit_end_date
			) {
				return `${this.modifyData.recruit_start_date.slice(
					0,
					10,
				)} - ${this.modifyData.recruit_end_date.slice(0, 10)}`;
			}
		},
		modify_time() {
			if (this.modifyData.dining_datetime) {
				return this.modifyData.dining_datetime.slice(11, 16);
			}
		},
		resetData() {
			this.time = '';
			this.recruit_date = '';
			this.$el.querySelector('.time-picker').placeholder = '식사 시간';
			this.$el.querySelector('.recruit-picker').placeholder = '모집 기간';
		},
		minTime() {
			const date = new Date(this.dining_datetime);
			const s_year = date.getFullYear();
			const s_month = date.getMonth() + 1;
			const s_date = date.getDate();

			const today = new Date();
			const t_year = today.getFullYear();
			const t_month = today.getMonth() + 1;
			const t_date = today.getDate();

			if (s_year === t_year && s_month === t_month && s_date === t_date) {
				return {
					hours: today.getHours(),
					minutes: today.getMinutes(),
				};
			} else {
				return {
					hours: '',
					minutes: '',
				};
			}
		},
		modifyBabsang() {
			this.$swal({
				title: `밥상을 수정하시겠습니까?`,
				icon: 'warning',
				showCancelButton: true,
				iconColor: '#ffcb00',
				confirmButtonColor: '#ffcb00',
				cancelButtonColor: '#d33',
				cancelButtonText: '취소',
				confirmButtonText: '확인',
			}).then(async result => {
				if (result.isConfirmed) {
					const loader = this.$loading.show({ canCancel: false });
					let r = await this.$put('/babsang/' + this.$route.params.babsangId, {
						param: {
							dining_table_title: this.title,
							dining_description: this.dining_description,
							dining_thumbnail: this.dining_thumbnail,
						},
					});
					loader.hide();
					const isFormCorrect = await this.v$.$validate();
					if (!isFormCorrect) {
						return;
					} else if (r.status === 200) {
						this.$swal({
							title: `밥상 수정 완료!`,
							icon: 'success',
							iconColor: '#ffcb00',
							confirmButtonText: '확인',
							confirmButtonColor: '#ffcb00',
						}).then(() => {
							this.$router.push({
								path: `/babsang/${this.$route.params.babsangId}`,
							});
						});
					}
				}
			});
		},
		placeInfo(name, address, lat, long) {
			this.placeName = name;
			this.placeAddress = address;
			this.placeLatitude = lat;
			this.placeLongitude = long;
		},
		mapToggle() {
			this.$store.commit('toggleShow');
		},
		doGenderCheck() {
			if (this.gender_check === 'M') {
				return '남성';
			} else if (this.gender_check === 'F') {
				return '여성';
			} else {
				return '혼성';
			}
		},
		diningDatetime() {
			if (this.dining_datetime && this.time) {
				let offset = new Date().getTimezoneOffset() * 60000;
				let date = new Date(this.dining_datetime - offset);
				let dateTime = date.toISOString().replace('T', ' ').slice(0, 10);
				let hour = this.time.hours;
				let min =
					this.time.minutes === 0 ? this.time.minutes + '0' : this.time.minutes;

				return `${dateTime} ${hour}:${min}`;
			}
		},
		setRecruitDate() {
			if (this.recruit_date) {
				let offset = new Date().getTimezoneOffset() * 60000;
				const startDate = new Date(this.recruit_date[0] - offset);
				const endDate = new Date(this.recruit_date[1] - offset);

				this.recruit_start_date = startDate
					.toISOString()
					.replace('T', ' ')
					.slice(0, 19);

				this.recruit_end_date = endDate
					.toISOString()
					.replace('T', ' ')
					.slice(0, 10);
				this.recruit_end_date = this.recruit_end_date.concat(' 23:59:59');
			}
		},

		// thumbnail upload
		chooseImage() {
			this.$refs.fileInput.click();
		},
		async onSelectFile() {
			const input = this.$refs.fileInput;
			const file = input.files[0];
			if (file && file.type.substr(0, 5) === 'image') {
				const maxSize = 3 * 1024 * 1024;
				const fileSize = file.size;
				if (fileSize <= maxSize) {
					const res = await this.$upload('/upload/image', file);
					this.imageData = `${process.env.VUE_APP_DOMAIN_URL}/static/images/${res.filename}`;
					this.dining_thumbnail = res.filename;
				} else {
					this.$swal({
						title: '이미지 용량 1M 제한입니다!',
						icon: 'warning',
						iconColor: '#ffcb00',
						confirmButtonColor: '#ffcb00',
						confirmButtonText: '확인',
					});
				}
			}
		},
		// 수정모드시 밥상 데이터 불러오기.
		async getBabsangDetailData() {
			if (this.isModify) {
				this.modifyData = await this.$get(
					'/babsang/' + this.$route.params.babsangId,
				);
				this.modifyData = this.modifyData.result[0];
				this.title = this.modifyData.dining_table_title;
				this.placeName = this.modifyData.restaurant_name;
				this.placeAddress = this.modifyData.restaurant_location;
				this.gender_check = this.modifyData.gender_check;
				this.dining_count = this.modifyData.dining_count;
				this.dining_description = this.modifyData.dining_description;
				this.dining_thumbnail = this.modifyData.dining_thumbnail;
				this.placeLatitude = this.modifyData.restaurant_latitude;
				this.placeLongitude = this.modifyData.restaurant_longitude;
				this.dining_datetime = new Date(this.modifyData.dining_datetime);
				this.recruit_start_date = new Date(this.modifyData.recruit_start_date);
				this.recruit_end_date = new Date(this.modifyData.recruit_end_date);
				this.imageData = `${process.env.VUE_APP_DOMAIN_URL}/static/images/${this.modifyData.dining_thumbnail}`;
			}
		},

		//밥상 생성하기
		async onSubmitForm() {
			const isFormCorrect = await this.v$.$validate();
			if (!isFormCorrect) {
				window.scrollTo(0, 0);
				return;
			}
			await this.$post('/babsang', {
				param: {
					dining_datetime: this.diningDatetime(),
					recruit_start_date: this.recruit_start_date,
					recruit_end_date: this.recruit_end_date,
					gender_check: this.gender_check,
					dining_description: this.dining_description,
					dining_thumbnail: this.dining_thumbnail,
					dining_count: this.dining_count,
					host_email: this.$store.state.user.userData.email,
					restaurant_name: this.placeName,
					restaurant_location: this.placeAddress,
					restaurant_latitude: this.placeLatitude,
					restaurant_longitude: this.placeLongitude,
					dining_table_title: this.title,
				},
			});

			// 생성한 밥상 게시물로 이동
			this.babsangId = await this.$get('/babsang');
			const idArr = this.babsangId.result.map(item => item.id);
			const idMax = Math.max(...idArr);
			const param = {
				babsangId: idMax,
				nickname: this.$store.state.user.userData.profile.nickname,
				diningDatetime: this.diningDatetime(),
			};

			await this.$post('/babsang/review', {
				param,
			});
			window.scrollTo(0, 0);
			this.$router.push({
				path: `/babsang/${idMax}`,
			});
		},

		onChangeDiningDescription(e) {
			if (e.target.value.length >= 512) {
				this.openInputWarningMsg = true;
			} else {
				this.openInputWarningMsg = false;
			}
		},
	},
};
</script>
<style scoped lang="scss">
// datepicker 스타일
::v-deep(.form-control:focus) {
	color: #575757;
	background-color: #fff;
	border-color: #ffcb00 !important;
	outline: 0;
	box-shadow: 0 0 0 0 rgb(255, 255, 255) !important;
}
::v-deep(.v3dp__datepicker) {
	--popout-bg-color: var(--vdp-bg-color, #fff);
	--box-shadow: var(
		--vdp-box-shadow,
		0 4px 10px 0 rgba(128, 144, 160, 0.1),
		0 0 1px 0 rgba(128, 144, 160, 0.81)
	);
	--text-color: var(--vdp-text-color, #000000);
	--border-radius: var(--vdp-border-radius, 3px);
	--heading-size: var(--vdp-heading-size, 2.5em); /* 40px for 16px font */
	--heading-weight: var(--vdp-heading-weight, bold);
	--heading-hover-color: var(--vdp-heading-hover-color, #eeeeee);
	--arrow-color: var(--vdp-arrow-color, currentColor);

	--elem-color: var(--vdp-elem-color, currentColor);
	--elem-disabled-color: var(--vdp-disabled-color, #d5d9e0);
	--elem-hover-color: var(--vdp-hover-color, #fff);
	--elem-hover-bg-color: var(--vdp-hover-bg-color, #ffcb00);
	--elem-selected-color: var(--vdp-selected-color, #fff);
	--elem-selected-bg-color: var(--vdp-selected-bg-color, #ffcb00);

	--elem-font-size: var(--vdp-elem-font-size, 0.8em);
	--elem-border-radius: var(--vdp-elem-border-radius, 3px);

	--divider-color: var(--vdp-divider-color, var(--elem-disabled-color));

	position: relative;
}
.error-msg {
	color: #ffad00;
	padding: 0.5rem;
}
.img-wrap {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.26%;
	overflow: hidden;
	// background-color: rgb(181 181 181 / 10%);
	border: 2px dashed rgb(149 149 149 / 20%);
	// box-shadow: 0 5px 20px rgb(35 38 45 / 10%);
}
.image-input {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: block;
	cursor: pointer;
	background-size: cover;
	background-position: center center;
}
.file-control {
	display: none;
}
.upload-background {
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%, -50%, 0);
}
/* 라디오 버튼 스타일 */
.list-group {
	// max-width: 460px;
	margin: 1rem auto;
}

.form-check-input:checked + .form-checked-content {
	opacity: 0.5;
}

.form-check-input-placeholder {
	border-style: dashed;
}
[contenteditable]:focus {
	outline: 0;
}

.list-group-checkable .list-group-item {
	cursor: pointer;
}
.list-group-item-check {
	position: absolute;
	clip: rect(0, 0, 0, 0);
}
.list-group-item-check:hover + .list-group-item {
	// background-color: var(--bs-light);
	background-color: #fff9e1;
}
.list-group-item-check:checked + .list-group-item {
	color: #fff;
	background-color: var(--bs-yellow);
}
.list-group-item-check[disabled] + .list-group-item,
.list-group-item-check:disabled + .list-group-item {
	pointer-events: none;
	filter: none;
	opacity: 0.5;
}

.list-group-radio .list-group-item {
	cursor: pointer;
	border-radius: 0.5rem;
}
.list-group-radio .form-check-input {
	z-index: 2;
	margin-top: -0.5em;
}
.list-group-radio .list-group-item:hover,
.list-group-radio .list-group-item:focus {
	// background-color: #fff9e1;
	background-color: var(--bs-light);
}

.list-group-radio .form-check-input:checked + .list-group-item {
	background-color: var(--bs-body);
	border-color: var(--bs-blue);
	box-shadow: 0 0 0 2px var(--bs-blue);
}
.list-group-radio .form-check-input[disabled] + .list-group-item,
.list-group-radio .form-check-input:disabled + .list-group-item {
	pointer-events: none;
	filter: none;
	opacity: 0.5;
}
</style>
