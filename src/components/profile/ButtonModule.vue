<template>
	<div class="col-6 btn-group">
		<div class="col-12 btn-group" role="group" aria-label="Basic example">
			<button
				type="button"
				:class="{
					'btn btn-primary': this.$store.state.button.buttonSign === 'open',
					'btn btn-outline-primary':
						this.$store.state.button.buttonSign !== 'open',
				}"
				style="width: 50%"
				@click="changeOperationBabsang"
			>
				모집 중
			</button>
			<button
				type="button"
				:class="{
					'btn btn-primary': this.$store.state.button.buttonSign === 'close',
					'btn btn-outline-primary':
						this.$store.state.button.buttonSign !== 'close',
				}"
				style="width: 50%"
				@click="changeOperationBabsang"
			>
				모집 마감
			</button>
		</div>
	</div>
	<div class="col-6 btn-group" v-if="$route.path === '/mypage/message'">
		<div class="col-12 btn-group" role="group" aria-label="Basic example">
			<button
				type="button"
				:class="{
					'btn btn-primary': this.$store.state.button.buttonSignYO === 'young',
					'btn btn-outline-primary':
						this.$store.state.button.buttonSignYO !== 'young',
				}"
				style="width: 100%"
				@click="sortMessageAge"
			>
				최신순
			</button>
			<button
				type="button"
				:class="{
					'btn btn-primary': this.$store.state.button.buttonSignYO === 'old',
					'btn btn-outline-primary':
						this.$store.state.button.buttonSignYO !== 'old',
				}"
				style="width: 100%"
				@click="sortMessageAge"
			>
				오래된 순
			</button>
		</div>
	</div>
	<div class="col-6" v-if="$route.path !== '/mypage/message'">
		<section class="model-8">
			<div class="checkbox">
				<input type="checkbox" v-model="showPeriodBabsang" />
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
			showSortedMessage: 'young', // 최신 순 young, 오래된 순 old
			showPeriodBabsang: false, // 임박한 순 true, 기본값 false
		};
	},
	watch: {
		showPeriodBabsang: function (value) {
			this.$store.commit('button/checkedSign', value);
		},
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		changeOperationBabsang() {
			if (this.showOperationBabsang === 'open') {
				this.showOperationBabsang = 'close';
				this.$store.commit('button/buttonSign', this.showOperationBabsang);
			} else {
				this.showOperationBabsang = 'open';
				this.$store.commit('button/buttonSign', this.showOperationBabsang);
			}
		},
		sortMessageAge() {
			if (this.showSortedMessage === 'young') {
				this.showSortedMessage = 'old';
				this.$store.commit('button/buttonSignYO', this.showSortedMessage);
			} else {
				this.showSortedMessage = 'young';
				this.$store.commit('button/buttonSignYO', this.showSortedMessage);
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
	background: #ff7851;
	color: #ffffff;
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
button {
	white-space: nowrap;
}
// 반응형 버튼 폰트 사이즈
@media (max-width: 1399px) {
	button {
		font-size: 0.9rem;
	}
}
@media (max-width: 1199px) {
	button {
		font-size: 1rem;
	}
}
@media (max-width: 493px) {
	button {
		font-size: 0.9rem;
	}
}
@media (max-width: 476px) {
	button {
		font-size: 0.8rem;
	}
}
// @media (max-width: 437px) {
// 	button {
// 		font-size: 1vw;
// 	}
// }
</style>
