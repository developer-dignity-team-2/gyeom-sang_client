<template>
	<div class="col-xl-6 col-md-6 col-sm-12 btn-group mb-2">
		<div class="col-12 btn-group" role="group" aria-label="Basic example">
			<button
				type="button"
				:class="{
					'btn btn-primary': showMannerScore === 'H',
					'btn btn-outline-primary': showMannerScore !== 'H',
				}"
				style="width: 100%"
				@click="changeMannerScore"
			>
				매너 점수 높은 순
			</button>
			<button
				type="button"
				:class="{
					'btn btn-primary': showMannerScore === 'L',
					'btn btn-outline-primary': showMannerScore !== 'L',
				}"
				style="width: 100%"
				@click="changeMannerScore"
			>
				매너 점수 낮은 순
			</button>
		</div>
	</div>
	<div class="col-xl-6 col-md-6 col-sm-12 btn-group mb-2">
		<div class="col-12 btn-group" role="group" aria-label="Basic example">
			<button
				type="button"
				:class="{
					'btn btn-primary': showRecruitDate === 'F',
					'btn btn-outline-primary': showRecruitDate !== 'F',
				}"
				style="width: 100%"
				@click="changeRecruitDate"
			>
				신청이 빠른 순
			</button>
			<button
				type="button"
				:class="{
					'btn btn-primary': showRecruitDate === 'S',
					'btn btn-outline-primary': showRecruitDate !== 'S',
				}"
				style="width: 100%"
				@click="changeRecruitDate"
			>
				신청이 느린 순
			</button>
		</div>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			showMannerScore: 'H', // 식사 매너 점수 높은 순 H, 식사 매너 점수 낮은 순 L
			showRecruitDate: 'F', // 신청이 빠른 순 F, 신청이 느린 순 S
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		changeMannerScore() {
			if (this.showMannerScore === 'H') {
				this.showMannerScore = 'L';
			} else {
				this.showMannerScore = 'H';
			}
		},
		changeRecruitDate() {
			if (this.showRecruitDate === 'F') {
				this.showRecruitDate = 'S';
			} else {
				this.showRecruitDate = 'F';
			}
		},
	},
};
</script>
<style scoped lang="scss">
// 모집 중/모집 완료, 최신순/오래된 순 버튼
.btn-primary {
	color: #575757;
	background-color: #ffcb00;
	border-color: #ffcb00;
	pointer-events: none;
	height: 38px;
}
.btn-outline-primary {
	color: #575757;
	border-color: #ffcb00;
	&:hover {
		background-color: #fff9e1;
	}
	height: 38px;
}
</style>
