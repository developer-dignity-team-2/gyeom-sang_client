<template>
	<div class="col-6 btn-group">
		<div class="col-12 btn-group" role="group" aria-label="Basic example">
			<button
				type="button"
				:class="{
					'btn btn-primary': this.$store.state.button.buttonOCSign === 'open',
					'btn btn-outline-primary':
						this.$store.state.button.buttonOCSign !== 'open',
				}"
				style="width: 50%"
				@click="changeOperationBabsang"
			>
				모집 중
			</button>
			<button
				type="button"
				:class="{
					'btn btn-primary': this.$store.state.button.buttonOCSign === 'close',
					'btn btn-outline-primary':
						this.$store.state.button.buttonOCSign !== 'close',
				}"
				style="width: 50%"
				@click="changeOperationBabsang"
			>
				모집 마감
			</button>
			<!-- <button
				type="button"
				class="btn btn-primary"
				v-else-if="diningStatus === 'T'"
				@click="diningStatus = 'O'"
			>
				전체 보기
			</button> -->
		</div>
	</div>
	<div class="col-6 btn-group">
		<div class="col-12 btn-group" role="group" aria-label="Basic example">
			<button
				type="button"
				:class="{
					'btn btn-primary': this.$store.state.button.buttonYOSign === 'young',
					'btn btn-outline-primary':
						this.$store.state.button.buttonYOSign !== 'young',
				}"
				style="width: 100%"
				@click="changePeriodBabsang"
			>
				최신순
			</button>
			<button
				type="button"
				:class="{
					'btn btn-primary': this.$store.state.button.buttonYOSign === 'old',
					'btn btn-outline-primary':
						this.$store.state.button.buttonYOSign !== 'old',
				}"
				style="width: 100%"
				@click="changePeriodBabsang"
			>
				오래된 순
			</button>
		</div>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			showOperationBabsang: 'open', // 모집 중 open, 모집 마감 close
			showPeriodBabsang: 'young', // 최신 순 young, 오래된 순 old
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		changeOperationBabsang() {
			if (this.showOperationBabsang === 'open') {
				this.showOperationBabsang = 'close';
				this.$store.commit('button/getButtonOCSign', this.showOperationBabsang);
				console.log('자식이 만든 신호 close : ', this.showOperationBabsang);
			} else {
				this.showOperationBabsang = 'open';
				this.$store.commit('button/getButtonOCSign', this.showOperationBabsang);
				console.log('자식이 만든 신호 open : ', this.showOperationBabsang);
			}
		},
		changePeriodBabsang() {
			if (this.showPeriodBabsang === 'young') {
				this.showPeriodBabsang = 'old';
				this.$store.commit('button/getButtonYOSign', this.showPeriodBabsang);
				console.log('자식이 만든 신호 old : ', this.showPeriodBabsang);
			} else {
				this.showPeriodBabsang = 'young';
				this.$store.commit('button/getButtonYOSign', this.showPeriodBabsang);
				console.log('자식이 만든 신호 young : ', this.showPeriodBabsang);
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
}
.btn-outline-primary {
	color: #575757;
	border-color: #ffcb00;
	&:hover {
		background-color: #fff9e1;
	}
}
</style>
