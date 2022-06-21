<template>
	<div class="container mb-5" style="max-width: 1000px">
		<!-- 썸네일 추가 -->
		<div class="row my-4">
			<div class="col">
				<div class="img-wrap rounded">
					<img
						src="https://cdn.pixabay.com/photo/2016/09/23/23/23/restaurant-1690696_1280.jpg"
						alt="food1"
					/>
					<button class="btn loadBtn btn-primary m-2">
						<font-awesome-icon icon="fa-solid fa-image" />
					</button>
				</div>
			</div>
		</div>

		<!-- 신청폼 -->
		<div class="row">
			<div class="col">
				<form class="border rounded p-4">
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
						<div class="form-group">
							<label for="exampleInputEmail1" class="form-label mt-4">
								식사 일시</label
							>
							<input
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="검색"
							/>
						</div>
						<div class="form-group">
							<label for="exampleInputEmail1" class="form-label mt-4"
								>모집 기간</label
							>
							<input
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="검색"
							/>
						</div>
						<div class="form-group">
							<label class="mt-4">성별 선택</label>
							<div class="form-check">
								<label class="form-check-label">
									<input
										type="radio"
										class="form-check-input"
										name="optionsRadios"
										id="optionsRadios1"
										value="option1"
										checked=""
									/>
									혼성
								</label>
							</div>
							<div class="form-check">
								<label class="form-check-label">
									<input
										type="radio"
										class="form-check-input"
										name="optionsRadios"
										id="optionsRadios2"
										value="option2"
									/>
									남성
								</label>
							</div>
							<div class="form-check disabled">
								<label class="form-check-label">
									<input
										type="radio"
										class="form-check-input"
										name="optionsRadios"
										id="optionsRadios3"
										value="option3"
										disabled=""
									/>
									여성
								</label>
							</div>
						</div>
						<div class="form-group">
							<label for="exampleSelect1" class="form-label mt-4"
								>모집 인원</label
							>
							<select class="form-select" id="exampleSelect1">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
							</select>
						</div>
						<div class="form-group">
							<label for="exampleTextarea" class="form-label mt-4"
								>밥상 소개하기</label
							>
							<textarea
								class="form-control"
								id="exampleTextarea"
								rows="3"
							></textarea>
						</div>
						<div class="d-flex justify-content-center mt-5">
							<button type="button" class="btn btn-secondary mx-3">
								숟갈 엎기
							</button>
							<button type="submit" class="btn btn-primary mx-3">
								숟갈 차리기
							</button>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import userMap from '@/components/userMap.vue';
export default {
	name: 'BabsangCreate',
	components: { userMap },
	data() {
		return {
			sampleData: '',
			// map: null,
		};
	},
	mounted() {},
	unmounted() {},
	methods: {},
};
</script>
<style scoped lang="scss">
.img-wrap {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.26%;
	overflow: hidden;
}
.img-wrap img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.loadBtn {
	position: absolute;
	bottom: 0;
	right: 0;
}
#map {
	width: 500px;
	height: 500px;
	margin: auto;
	margin-top: 10px;
}
</style>
