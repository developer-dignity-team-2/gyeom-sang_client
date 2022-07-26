<template>
	<div class="col-xl-6 col-md-6 col-sm-12 btn-group mb-2">
		<div class="col-12 btn-group" role="group" aria-label="Basic example">
			<button
				type="button"
				:class="{
					'btn btn-primary': $store.state.button.buttonSignHL === 'H',
					'btn btn-outline-primary': $store.state.button.buttonSignHL !== 'H',
				}"
				style="width: 100%"
				@click="changeMannerScore"
			>
				매너 점수 높은 순
			</button>
			<button
				type="button"
				:class="{
					'btn btn-primary': $store.state.button.buttonSignHL === 'L',
					'btn btn-outline-primary': $store.state.button.buttonSignHL !== 'L',
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
					'btn btn-primary': $store.state.button.buttonSignFS === 'F',
					'btn btn-outline-primary': $store.state.button.buttonSignFS !== 'F',
				}"
				style="width: 100%"
				@click="changeRecruitDate"
			>
				신청이 빠른 순
			</button>
			<button
				type="button"
				:class="{
					'btn btn-primary': $store.state.button.buttonSignFS === 'S',
					'btn btn-outline-primary': $store.state.button.buttonSignFS !== 'S',
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
		return {};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		// 매너 점수 순
		changeMannerScore() {
			if (this.$store.state.button.buttonSignHL === 'H') {
				this.$store.commit('button/buttonSignHL', 'L');
			} else {
				this.$store.commit('button/buttonSignHL', 'H');
			}
		},
		// 신청 순
		changeRecruitDate() {
			if (this.$store.state.button.buttonSignFS === 'F') {
				this.$store.commit('button/buttonSignFS', 'S');
			} else {
				this.$store.commit('button/buttonSignFS', 'F');
			}
		},
	},
};
</script>
<style scoped lang="scss">
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
