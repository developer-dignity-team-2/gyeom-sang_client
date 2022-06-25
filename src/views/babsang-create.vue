<template>
	<div class="container mb" style="max-width: 1000px">
		<!-- 썸네일 추가 -->
		<!-- <BaseImageInput @imageData="getImageData($event)"></BaseImageInput> -->
		<div class="row my-4">
			<div class="col">
				<div class="img-wrap rounded">
					<div
						class="image-input"
						:style="{ 'background-image': `url(${imageData})` }"
						@click="chooseImage"
					>
						<input
							class="form-control file-control"
							ref="fileInput"
							type="file"
							@input="onSelectFile"
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
								<userMap />
							</div>
						</div>
						<!-- datepicker 삽입 -->
						<div class="form-group">
							식사 일시<datepicker
								v-model="dining_datetime"
								class="form-control py-6 px-36 m-1"
								placeholder="식사 일시"
							/>
							<!-- <input
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="검색"
							/> -->
						</div>
						<!-- datepicker 삽입 -->
						<div class="form-group">
							모집 기간
							<datepicker
								v-model="recruit_start_date"
								class="form-control py-6 px-36 m-1"
								placeholder="모집 시작"
							/>
							<datepicker
								v-model="recruit_end_date"
								class="form-control py-6 px-36 m-1"
								placeholder="모집 마감"
							/>

							<!-- <input
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="검색"
							/> -->
						</div>

						<div class="form-group">
							<label class="mt-4">성별 선택</label>
							<div class="form-check">
								<label class="form-check-label">
									<input
										type="radio"
										class="form-check-input"
										name="genderPick"
										id="gender-all"
										value="ALL"
										checked=""
										v-model="gender_check"
									/>
									혼성
								</label>
							</div>
							<div class="form-check">
								<label class="form-check-label">
									<input
										type="radio"
										class="form-check-input"
										name="genderPick"
										id="gender-m"
										value="M"
										v-model="gender_check"
									/>
									남성
								</label>
							</div>
							<div class="form-check disabled">
								<label class="form-check-label">
									<input
										type="radio"
										class="form-check-input"
										name="genderPick"
										id="gender-f"
										value="F"
										v-model="gender_check"
									/>
									여성
								</label>
							</div>
						</div>
						<div class="form-group">
							<label for="diningCount" class="form-label mt-4">모집 인원</label>
							<select
								class="form-select"
								id="diningCount"
								v-model="dining_count"
							>
								<option disabled value="">모집 인원을 선택해 주세요.</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
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
						<div class="d-flex justify-content-center mt">
							<button type="button" class="btn btn-secondary mx-3">
								밥상 엎기
							</button>
							<button type="submit" class="btn btn-primary mx-3">
								밥상 차리기
							</button>
						</div>
					</fieldset>
				</form>
				<ul>
					<li>식당이름</li>
					<li>성별 : {{ gender_check }}</li>
					<li>모집 인원 : {{ dining_count }}</li>
					<li>소개 : {{ dining_description }}</li>
					<li>dining_datetime : {{ dining_datetime }}</li>
					<li>recruit_start_date : {{ recruit_start_date }}</li>
					<li>recruit_end_date : {{ recruit_end_date }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import userMap from '@/components/UserMap.vue';
import Datepicker from 'vue3-datepicker';
// import BaseImageInput from '@/components/BaseImageInput';
// import { ref } from 'vue';
// const picked = ref(new Date());

export default {
	name: 'BabsangCreate',
	components: { userMap, Datepicker },
	data() {
		return {
			sampleData: '',
			picked: '',
			dining_datetime: '',
			recruit_start_date: '',
			recruit_end_date: '',
			gender_check: 'ALL',
			dining_description: '',
			dining_count: '',
			dining_thumbnail: '',
			imageData: '',
		};
	},
	mounted() {},
	methods: {
		// thumbnail upload
		chooseImage() {
			this.$refs.fileInput.click();
		},
		onSelectFile() {
			const input = this.$refs.fileInput;

			const files = input.files;
			if (files && files[0]) {
				const reader = new FileReader();
				reader.onload = e => {
					this.imageData = e.target.result;
				};
				reader.readAsDataURL(files[0]);
			}
			this.dining_thumbnail = this.$refs.fileInput.files[0];
			console.log(this.dining_thumbnail);
		},

		//밥상 생성하기
		async onSubmitForm() {
			await this.$post('https://nicespoons.com/api/v1/babsang', {
				param: {
					// restaurant_name: this.restaurant_name,
					// dining_datetime: this.dining_datetime,
					// recruit_start_date: this.recruit_start_date,
					// recruit_end_date: this.recruit_end_date,
					gender_check: this.gender_check,
					dining_description: this.dining_description,
					// restaurant_location: this.restaurant_location,
					dining_thumbnail: this.dining_thumbnail,
					dining_count: this.dining_count,
					host_email: 'tmddhks0104@naver.com',

					restaurant_name: '제주 할매 칼국수7',
					// dining_count: '4',
					dining_datetime: '2022-06-17 05:24:01',
					recruit_start_date: '2022-06-10 05:00:00',
					recruit_end_date: '2022-06-15 05:00:00',
					// gender_check: 'ALL',
					// dining_description: '칼국수 너무 맛있을 것 같아요.',
					restaurant_location: '제주 서귀포시 할매 칼국수',
					// dining_thumbnail:
					// 	'https://blog.kakaocdn.net/dn/tBMCo/btqYbImU0BW/4VqVmsfuvQd1w3JbbdFJck/img.png',
				},
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
	//width: 500px;
	//height: 100px;
	cursor: pointer;
	background-size: cover;
	background-position: center center;
}
// .placeholder {
// 	background: #f0f0f0;
// 	width: 100%;
// 	height: 100%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	color: #333;
// 	font-size: 18px;
// }
.file-control {
	display: none;
}
// .img-wrap img {
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// }
.loadBtn {
	position: absolute;
	bottom: 0;
	right: 0;
}
#map {
	width: 500px;
	height: 500px;
	margin: 10px auto auto;
}
</style>
