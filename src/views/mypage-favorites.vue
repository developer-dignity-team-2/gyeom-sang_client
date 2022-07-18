<template>
	<div class="container mb-5">
		<div class="row my-4">
			<!-- 네브바 -->
			<div class="col-xl-3 col-md-4 col-sm-12">
				<CompUserProfile />
			</div>
			<!-- 본문영역 -->
			<div class="col-xl-9 col-md-8 col-sm-12">
				<div class="col border rounded p-3">
					<h3>찜한 밥상</h3>
					<div class="row mt-4 mb-2">
						<div>
							<!-- 버튼 -->
							<div class="row mb-4">
								<!-- 모집중, 최신순 -->
								<ButtonModule />
							</div>
							<div
								class="row p-5"
								style="
									display: flex;
									flex-flow: row wrap;
									justify-content: center;
									align-item: center;
								"
								v-if="babsangData.length === 0"
							>
								찜한 밥상이 없습니다.
							</div>
							<!-- 밥상카드 -->
							<div class="row" v-if="babsangData.length !== 0">
								<!-- <BabsangCardList :babsangData="babsangData.result" /> -->
								<!-- <BabsangCardList :babsangData="babsangData"  /> -->
								<BabsangCardList :babsangData="babsangData" />
							</div>
						</div>
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
	mounted() {
		this.showFavoritesBabsang();
	},
	unmounted() {
		// 필터, 정렬 설정 초기화
		this.$store.commit('button/checkedSign', false);
		console.log('unmounted : ', this.$store.state.button.checkedSign);
		this.$store.commit('button/buttonSign', 'open');
	},
	methods: {
		// 찜한 밥상 버튼 이벤트
		showFavoritesBabsang() {
			this.makeSequence();
			this.makeBabsangResult();
		},
		async getBabsangs() {
			const loader = this.$loading.show({ canCancel: false });

			const babsangs = (
				await this.$get(
					'https://nicespoons.com/api/v1/babsang/get?type=bookmarkedList',
				)
			).result;

			loader.hide();

			return babsangs;
		},
		// 버튼 이벤트 순서 결정
		makeSequence() {
			this.signArr = [];
			this.signArr.push(this.$store.state.button.buttonSign);
			this.signArr.push(this.$store.state.button.checkedSign);
			console.log('버튼 시그널 배열 : ', this.signArr);
		},
		// 밥상 조회 최종 결과(조회, 필터, 정렬 적용)
		async makeBabsangResult() {
			// 서버로 부터 밥상 목록 가져오기
			let tempResult = [];
			tempResult = await this.getBabsangs();

			// 필터 수행
			if (this.signArr[0] === 'open') {
				tempResult = this.filterBabsang(tempResult, 'open');
			} else {
				tempResult = this.filterBabsang(tempResult, 'close');
			}

			// 정열 수행
			if (this.signArr[1] === false) {
				tempResult = this.doOrder(tempResult, false);
				console.log('false', this.signArr[2]);
			} else {
				tempResult = this.doOrder(tempResult, true);
				console.log('true', this.signArr[2]);
			}

			this.babsangData = tempResult;
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
		background-color: #ffcb00;
	}
}
</style>
