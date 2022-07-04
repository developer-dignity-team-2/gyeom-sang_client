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
							accept="image/png, image/jpeg"
							@change="onSelectFile"
						/>
						<div
							class="upload-background"
							@click="chooseImage"
							v-if="!imageData"
						>
							<font-awesome-icon
								icon="fa-regular fa-image"
								style="color: rgba(0, 0, 0, 0.3); font-size: 2rem"
							/>
							<span
								class="mt-2"
								style="
									font-weight: bold;
									color: rgba(0, 0, 0, 0.3);
									display: block;
								"
								>밥상 사진을 업로드 해주세요 !</span
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
				<form class="border rounded p-4" @submit.prevent="onSubmitForm">
					<fieldset>
						<!-- <legend>밥상 준비하기</legend> -->
						<div class="form-group">
							<label for="exampleInputEmail1" class="form-label mt-4"
								>식당 이름</label
							>
							<input
								type="email"
								class="form-control"
								id="InputRestaurantName"
								aria-describedby="emailHelp"
								placeholder="식당 검색시 자동으로 입력됩니다."
								disabled
							/>
						</div>
						<div class="form-group">
							<label for="exampleInputEmail1" class="form-label mt-4"
								>식당 위치 검색</label
							>

							<input
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="검색"
							/>
							<div id="map">
								<!-- <userMap /> -->
							</div>
						</div>

						<!-- datepicker 삽입
						lowerLimit: 지정한 기준으로 하한인 날은 disable -->
						<div class="form-group mt-4">
							식사 일시
							<datepicker
								v-model="dining_datetime"
								:lowerLimit="new Date()"
								style="cursor: default"
								class="form-control mt-2"
								placeholder="식사 일시"
							/>
						</div>
						<div class="error-msg" v-if="v$.dining_datetime.$error">
							식사 일시를 선택해 주세요.
						</div>
						<!-- datepicker 삽입
						upperLimit: 지정한 날짜 기준으로 상한인 날은 disable -->
						<div class="form-group mt-4 row">
							<div class="col-12 mb-1">모집 기간</div>
							<div class="col">
								<datepicker
									v-model="recruit_start_date"
									:upperLimit="this.dining_datetime"
									:lowerLimit="new Date()"
									class="form-control"
									style="cursor: default"
									placeholder="모집 시작"
								/>
							</div>
							<div class="col">
								<datepicker
									v-model="recruit_end_date"
									:upperLimit="this.dining_datetime"
									:lowerLimit="this.recruit_start_date"
									class="form-control"
									style="cursor: default"
									placeholder="모집 마감"
								/>
							</div>
						</div>
						<div
							class="error-msg"
							v-if="v$.recruit_start_date.$error || v$.recruit_end_date.$error"
						>
							모집 기간을 선택해 주세요.
						</div>

						<div class="form-group">
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
								v-if="v$.gender_check.$error"
								class="error-msg ms-1"
								style="padding: 0"
							>
								모집할 숟갈의 성별을 선택해 주세요.
							</div>
						</div>
						<div class="form-group">
							<label class="form-label mt-4">모집 인원</label>
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
										>2인</label
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
										>3인</label
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
										>4인</label
									>
								</div>
							</div>
							<div
								v-if="v$.dining_count.$error"
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
								v-model="dining_description"
								style="resize: none; height: 10rem"
							></textarea>
							<div class="error-msg" v-if="v$.dining_description.$error">
								밥장님의 밥상을 소개해 주세요.
							</div>
						</div>
						<div class="d-flex justify-content-center mt-5">
							<button
								type="button"
								class="btn btn-secondary mx-3"
								@click="$goBack"
							>
								밥상 엎기
							</button>
							<button type="submit" class="btn btn-primary mx-3">
								밥상 차리기
							</button>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
// import userMap from '@/components/UserMap.vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import Datepicker from 'vue3-datepicker';
// import { ref } from 'vue';
// const picked = ref(new Date());
export default {
	name: 'BabsangCreate',
	// components: { userMap, Datepicker },
	components: { Datepicker },
	setup() {
		return {
			v$: useVuelidate(),
		};
	},
	data() {
		return {
			sampleData: '',
			// picked: '',
			dining_datetime: '',
			recruit_start_date: '',
			recruit_end_date: '',
			gender_check: '',
			dining_description: '',
			dining_count: '',
			dining_thumbnail: '',
			imageData: '',
			imgSrc: '',
			babsangId: '',
		};
	},
	validations() {
		return {
			dining_description: {
				required,
			},
			dining_datetime: {
				required,
			},
			recruit_start_date: {
				required,
			},
			recruit_end_date: {
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
		};
	},
	beforeMount() {
		console.log('--------------현재 유저 정보--------------');
		console.log(this.$store.state.user.userData);
	},
	mounted() {},
	methods: {
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
			const result = new Date(this.dining_datetime * 1 + 3600000 * 9)
				.toISOString()
				.replace('T', ' ')
				.replace(/\..*/, '')
				.toString()
				.slice(0, 10);

			console.log(result);
			return result;
		},
		recruitStartDate() {
			const result = new Date(this.recruit_start_date * 1 + 3600000 * 9)
				.toISOString()
				.replace('T', ' ')
				.replace(/\..*/, '')
				.toString()
				.slice(0, 10);
			return result;
		},
		recruitEndDate() {
			const result = new Date(this.recruit_end_date * 1 + 3600000 * 9)
				.toISOString()
				.replace('T', ' ')
				.replace(/\..*/, '')
				.toString()
				.slice(0, 10);
			return result;
		},

		// thumbnail upload
		chooseImage() {
			this.$refs.fileInput.click();
		},
		async onSelectFile() {
			const input = this.$refs.fileInput;
			const files = input.files[0];
			console.log(files);
			const res = await this.$upload('/upload/image', files);
			this.imageData = `https://nicespoons.com/static/images/${res.filename}`;
			console.log(res);
			this.dining_thumbnail = res.filename;
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
					recruit_start_date: this.recruitStartDate(),
					recruit_end_date: this.recruitEndDate(),
					gender_check: this.gender_check,
					dining_description: this.dining_description,
					dining_thumbnail: this.dining_thumbnail,
					dining_count: this.dining_count,
					host_email: this.$store.state.user.userData.email,

					// restaurant_name: this.restaurant_name,
					// restaurant_location: this.restaurant_location,
					restaurant_name: '애월빵공장',
					restaurant_location: '제주 제주시 애월읍 금성5길 42-15',
				},
			});
			// 생성한 밥상 게시물로 이동
			// this.babsangId = await this.$get('/babsang');
			// const idArr = this.babsangId.result.map(item => item.id);
			// const idMax = Math.max(...idArr);
			// this.$router.push({
			// path: `/babsang/${idMax}`,
			// });
		},
	},
};
</script>
<style scoped lang="scss">
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
// #map {
// 	width: 500px;
// 	height: 500px;
// 	margin: 10px auto auto;
// }
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
