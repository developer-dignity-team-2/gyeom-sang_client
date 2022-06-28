<template>
	<div class="container mb" style="max-width: 1000px">
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
						<button class="btn loadBtn btn-primary m-2" @click="chooseImage">
							<font-awesome-icon icon="fa-solid fa-image" />
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- 신청폼 -->
		<div class="row">
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
						<!-- datepicker 삽입
						upperLimit: 지정한 날짜 기준으로 상한인 날은 disable -->
						<div class="form-group mt-4">
							모집 기간
							<datepicker
								v-model="recruit_start_date"
								:upperLimit="this.dining_datetime"
								:lowerLimit="new Date()"
								class="form-control my-2"
								style="cursor: default"
								placeholder="모집 시작"
							/>
							<datepicker
								v-model="recruit_end_date"
								:upperLimit="this.dining_datetime"
								:lowerLimit="this.recruit_start_date"
								class="form-control"
								style="cursor: default"
								placeholder="모집 마감"
							/>
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
										checked
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
						</div>
						<div class="form-group">
							<label for="diningCount" class="form-label mt-4">모집 인원</label>
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
										checked
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
							<!-- <select
								class="form-select"
								id="diningCount"
								v-model="dining_count"
							>
								<option disabled value="">모집 인원을 선택해 주세요.</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select> -->
						</div>
						<div class="form-group">
							<label for="dining_description" class="form-label mt-4"
								>밥상 소개하기</label
							>
							<textarea
								class="form-control"
								id="dining_description"
								rows="3"
								v-model="dining_description"
							></textarea>
						</div>
						<div class="d-flex justify-content-center mt-5">
							<button type="button" class="btn btn-secondary mx-3">
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
import Datepicker from 'vue3-datepicker';
// import { ref } from 'vue';
// const picked = ref(new Date());
export default {
	name: 'BabsangCreate',
	// components: { userMap, Datepicker },
	components: { Datepicker },
	data() {
		return {
			sampleData: '',
			// picked: '',
			dining_datetime: '',
			recruit_start_date: '',
			recruit_end_date: '',
			gender_check: 'ALL',
			dining_description: '',
			dining_count: '',
			dining_thumbnail: '',
			imageData: '',
			imgSrc: '',
		};
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

			// const result = this.dining_datetime.toISOString();
			// result.slice(0, 19).replace('T', ' ');
			// return result;
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
			const res = await this.$upload(
				'https://nicespoons.com/api/v1/upload/image',
				files,
			);
			this.imageData = `https://nicespoons.com/static/images/${res.filename}`;
			console.log(res);
			this.dining_thumbnail = res.filename;
		},
		//밥상 생성하기
		async onSubmitForm() {
			await this.$post('https://nicespoons.com/api/v1/babsang', {
				param: {
					// restaurant_name: this.restaurant_name,
					dining_datetime: this.diningDatetime(),
					recruit_start_date: this.recruitStartDate(),
					recruit_end_date: this.recruitEndDate(),
					gender_check: this.gender_check,
					dining_description: this.dining_description,
					// restaurant_location: this.restaurant_location,
					dining_thumbnail: this.dining_thumbnail,
					dining_count: this.dining_count,
					host_email: 'tmddhks0104@naver.com',

					restaurant_name: '애월빵공장',
					// dining_count: '4',
					// dining_datetime: '2022-06-17 05:24:01',
					// recruit_start_date: '2022-06-10 05:00:00',
					// recruit_end_date: '2022-06-15 05:00:00',
					// gender_check: 'ALL',
					// dining_description: '칼국수 너무 맛있을 것 같아요.',
					restaurant_location: '제주 제주시 애월읍 금성5길 42-15',
					// dining_thumbnail:
					// 	'https://blog.kakaocdn.net/dn/tBMCo/btqYbImU0BW/4VqVmsfuvQd1w3JbbdFJck/img.png',
				},
			});
			this.$router.push({
				path: '/',
			});
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
	background-color: #f7f7f7;
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
.loadBtn {
	position: absolute;
	bottom: 0;
	right: 0;
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
	background-color: var(--bs-light);
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
