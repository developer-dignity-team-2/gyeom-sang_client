<template>
	<div class="col-6 btn-group">
		<!-- <div class="col btn-container"> -->
		<Transition name="slide-up" mode="out-in">
			<button
				type="button"
				class="btn btn-primary"
				v-if="diningStatus === 'O'"
				@click="diningStatus = 'C'"
			>
				모집 중
			</button>
			<button
				type="button"
				class="btn btn-primary"
				v-else-if="diningStatus === 'C'"
				@click="diningStatus = 'T'"
			>
				모집 마감
			</button>
			<button
				type="button"
				class="btn btn-primary"
				v-else-if="diningStatus === 'T'"
				@click="diningStatus = 'O'"
			>
				전체 보기
			</button>
		</Transition>
	</div>
	<div class="col-6 btn-group">
		<!-- <div class="col btn-container"> -->
		<Transition name="slide-up" mode="out-in">
			<button
				type="button"
				class="btn btn-primary"
				v-if="recruitDate === 'L'"
				@click="recruitDate = 'O'"
			>
				최신순
			</button>
			<button
				type="button"
				class="btn btn-primary"
				v-else-if="recruitDate === 'O'"
				@click="recruitDate = 'L'"
			>
				오래된 순
			</button>
		</Transition>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			// trasition 버튼 용: 시작
			diningStatus: 'O', // 모집 중 O, 모집 마감 C, 전체 보기 T
			recruitDate: 'L', // 최신 순 L, 오래된 순 O
			// trasition 버튼 용: 끝
			showMessage: 'R', // 받은 메시지 R, 보낸 메시지 S
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		selectMessageReceived() {
			this.showMessage = 'R';
		},
		selectMessagesSent() {
			this.showMessage = 'S';
		},
	},
};
</script>
<style scoped lang="scss">
// 모집 중/모집 완료, 최신순/오래된 순 버튼
.btn-container {
	display: inline-block;
	position: relative;
	height: 1em;
}

button {
	position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
	transition: all 0.1s ease-out;
}

.slide-up-enter-from {
	opacity: 0;
	transform: translateY(10px);
}

.slide-up-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
