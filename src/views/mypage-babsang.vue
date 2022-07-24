<template>
	<div class="container mb-5">
		<div class="row my-4">
			<!-- 네브바 -->
			<div class="col-xl-3 col-md-4 col-sm-12">
				<CompUserProfile />
			</div>
			<!-- 본문영역 -->
			<div class="col-xl-9 col-md-8 col-sm-12">
				<!-- <div class="col border rounded p-3" style="min-height: 480px"> -->
				<div class="col border rounded p-3">
					<h3>참여한 밥상 목록</h3>
					<!-- 버튼 -->
					<div class="row mt-4 mb-3">
						<div class="col-xl-6 col-12 mb-2">
							<div class="row">
								<div
									class="col-12 btn-group"
									role="group"
									aria-label="Basic example"
								>
									<button
										type="button"
										:class="{
											'btn btn-primary': showBabsang === 'A',
											'btn btn-outline-primary': showBabsang !== 'A',
										}"
										style="width: 100%"
										@click="showAppliedBabsang"
									>
										숟갈 얹은 밥상
									</button>
									<button
										type="button"
										:class="{
											'btn btn-primary': showBabsang === 'M',
											'btn btn-outline-primary': showBabsang !== 'M',
										}"
										style="width: 100%"
										@click="showMadeBabsang"
									>
										차려 놓은 밥상
									</button>
									<button
										type="button"
										:class="{
											'btn btn-primary': showBabsang === 'C',
											'btn btn-outline-primary': showBabsang !== 'C',
										}"
										style="width: 100%"
										@click="showChosenBabsang"
									>
										선정된 밥상
									</button>
								</div>
							</div>
						</div>
						<div class="col-xl-6 col-12">
							<!-- 모집중, 최신순 -->
							<div class="row">
								<ButtonModule />
							</div>
						</div>
					</div>
					<!-- 밥상카드 -->
					<div class="row" v-if="babsangData.length < 1">
						<div
							class="p-5"
							style="
								display: flex;
								flex-flow: row wrap;
								justify-content: center;
								align-item: center;
							"
						>
							밥상 정보가 없습니다.
						</div>
					</div>
					<div class="row" v-if="babsangData.length > 0">
						<!-- <BabsangCardList :babsangData="babsangData" /> -->
						<BabsangCardList :babsangData="babsangData" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CompUserProfile from '@/components/profile/CompUserProfile';
import BabsangCardList from '@/components/profile/BabsangCardList';
import ButtonModule from '@/components/profile/ButtonModule';
export default {
	name: 'MypageProfile',
	components: { CompUserProfile, BabsangCardList, ButtonModule },
	data() {
		return {
			showBabsang: 'A', // 숟갈 얹은 밥상 A, 차려 놓은 밥상 M, 선정된 밥상 C
			signArr: [],
			babsangData: [],
		};
	},
	computed: {},
	watch: {
		// 모집중/모집마감 버튼 이벤트 순서 결정
		'$store.state.button.buttonSign': function (value) {
			console.log('$store.state.button.buttonSign : ', value);
			this.makeSequence();
			this.makeBabsangResult();
		},
		// 임박(정렬) 버튼 이벤트 순서 결정
		'$store.state.button.checkedSign': function (value) {
			console.log('this.$store.state.button.checkedSign : ', value);
			this.makeSequence();
			this.makeBabsangResult();
		},
	},
	create() {},
	mounted() {
		this.showAppliedBabsang();
	},
	unmounted() {},
	methods: {
		// 버튼 이벤트 순서 결정
		makeSequence() {
			this.signArr = [];
			this.signArr.push(this.showBabsang);
			this.signArr.push(this.$store.state.button.buttonSign);
			this.signArr.push(this.$store.state.button.checkedSign);
			console.log('버튼 시그널 배열 : ', this.signArr);
		},
		// 숟갈 얹은 밥상 버튼 이벤트
		showAppliedBabsang() {
			this.showBabsang = 'A';
			this.makeSequence();
			// this.getAppliedBabsang();
			this.makeBabsangResult();
		},
		// 차려 놓은 밥상 버튼 이벤트
		showMadeBabsang() {
			this.showBabsang = 'M';
			this.makeSequence();
			// this.getCreatedBabsang();
			this.makeBabsangResult();
		},
		// 선정된 밥상 버튼 이벤트
		showChosenBabsang() {
			this.showBabsang = 'C';
			this.makeSequence();
			// this.getSelectedList();
			this.makeBabsangResult();
		},
		// 밥상 조회 최종 결과(조회, 필터, 정렬 적용)
		async makeBabsangResult() {
			// 서버로 부터 밥상 목록 가져오기
			let tempResult = [];
			if (this.signArr[0] === 'A') {
				tempResult = await this.getAppliedBabsang();
			} else if (this.signArr[0] === 'M') {
				tempResult = await this.getCreatedBabsang();
			} else {
				tempResult = await this.getSelectedList();
			}

			// 필터 수행
			if (this.signArr[1] === 'open') {
				tempResult = this.filterBabsang(tempResult, 'open');
			} else {
				tempResult = this.filterBabsang(tempResult, 'close');
			}

			// 정열 수행
			if (this.signArr[2] === false) {
				tempResult = this.doOrder(tempResult, false);
				console.log('false', this.signArr[2]);
			} else {
				tempResult = this.doOrder(tempResult, true);
				console.log('true', this.signArr[2]);
			}

			this.babsangData = tempResult;
		},
		// 숟갈 얹은 밥상 목록 가져오기
		async getAppliedBabsang() {
			const loader = this.$loading.show({ canCancel: false });

			const babsangs = (await this.$get('/babsang/get?type=appliedList'))
				.result;

			loader.hide();

			return babsangs;
			// this.doDescOrder(Babsang.result, 'id');
			// this.babsangData = Babsang.result;
			// console.log(this.babsangData);
		},
		// 차려 놓은 밥상 목록 가져오기
		async getCreatedBabsang() {
			const loader = this.$loading.show({ canCancel: false });

			const babsangs = (await this.$get('/babsang/get?type=createdList'))
				.result;

			loader.hide();

			return babsangs;
			// this.doDescOrder(Babsang.result, 'id');
			// console.log(babsangData.result);
			// this.babsangData = Babsang.result;
		},
		// 선정된 밥상 목록 가져오기
		async getSelectedList() {
			const loader = this.$loading.show({ canCancel: false });

			const babsangs = (await this.$get('/babsang/get?type=selectedList'))
				.result;

			loader.hide();

			return babsangs;
			// this.doDescOrder(babsang, 'id');
			// this.babsangData = babsang;
		},
		// 밥상 필터
		filterBabsang(babsangs, sign) {
			if (sign === 'close') {
				let close = babsangs.filter(b => b.dining_status > 0);
				console.log(close);
				return close;
			} else {
				let open = babsangs.filter(b => b.dining_status === 0);
				console.log(open);
				return open;
			}
		},
		// 밥상 정렬
		doOrder(babsangs, sign) {
			if (sign === true) {
				let asc = babsangs.sort(
					(a, b) => new Date(a.dining_datetime) - new Date(b.dining_datetime),
				);
				console.log(asc);
				return asc;
			} else {
				let desc = babsangs.sort(
					(a, b) => new Date(b.dining_datetime) - new Date(a.dining_datetime),
				);
				console.log(desc);
				return desc;
			}
		},
	},
};
</script>
<style scoped lang="scss">
// 식사 매너/밥장 매너 선택 버튼
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
