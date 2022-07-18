<template>
	<div class="col-8 btn-group">
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
	<!-- <div class="col-6 btn-group">
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
	</div> -->
	<div class="col-4">
		<section class="model-8">
			<div class="checkbox">
				<input type="checkbox" />
				<label></label>
			</div>
		</section>
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

// 토글 버튼
*,
*:after,
*:before {
	box-sizing: border-box;
}

body {
	text-align: center;
	background: #eee;
}

section {
	float: left;
	min-width: 150px;
	width: 33.33%;
	// padding: 25px 0;
	// min-height: 100px;
}

/*=====================*/
.checkbox {
	position: relative;
	display: inline-block;
}
.checkbox:after,
.checkbox:before {
	font-family: FontAwesome;
	font-feature-settings: normal;
	-webkit-font-kerning: auto;
	font-kerning: auto;
	font-language-override: normal;
	font-stretch: normal;
	font-style: normal;
	font-synthesis: weight style;
	font-variant: normal;
	font-weight: normal;
	text-rendering: auto;
}
.checkbox label {
	width: 90px;
	// height: 42px;
	height: 38px;
	background: #ccc;
	position: relative;
	display: inline-block;
	border-radius: 46px;
	transition: 0.4s;
}
.checkbox label:after {
	content: '임박';
	text-align: center;
	padding: 7px;
	position: absolute;
	width: 50px;
	height: 50px;
	border-radius: 100%;
	left: 0;
	top: -5px;
	z-index: 2;
	background: #fff;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	transition: 0.4s;
}
.checkbox input {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 5;
	opacity: 0;
	cursor: pointer;
}
.checkbox input:hover + label:after {
	box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.15);
}
.checkbox input:checked + label:after {
	left: 40px;
}

.model-8 .checkbox label {
	background: #ddd;
	width: 95px;
	border-radius: 6.4px;
	// border-radius: 10px;
}
.model-8 .checkbox label:after {
	background: #fff;
	border-radius: 6.4px;
	// border-radius: 10px;
	top: 0;
	width: 60px;
	height: 38px;
	// height: 42px;
}
.model-8 .checkbox input:checked + label {
	// background: #ff980f;
	background: #ffcb00;
}
.model-8 .checkbox input:checked + label:after {
	left: 35px;
}
</style>
