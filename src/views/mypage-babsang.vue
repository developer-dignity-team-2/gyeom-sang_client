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
			babsangData: [],
		};
	},
	computed: {},
	mounted() {
		this.initShowBabsang();
	},
	methods: {
		initShowBabsang() {
			if (this.showBabsang === 'A') {
				this.getAppliedBabsang();
			} else if (this.showBabsang === 'M') {
				this.getCreatedBabsang();
			} else if (this.showBabsang === 'C') {
				this.getSelectedList();
			}
		},
		showAppliedBabsang() {
			this.showBabsang = 'A';
			this.getAppliedBabsang();
		},
		showMadeBabsang() {
			this.showBabsang = 'M';
			this.getCreatedBabsang();
		},
		showChosenBabsang() {
			this.showBabsang = 'C';
			this.getSelectedList();
		},
		// 숟갈 얹은 밥상 목록 가져오기
		async getAppliedBabsang() {
			const loader = this.$loading.show({ canCancel: false });

			const Babsang = await this.$get(
				'https://nicespoons.com/api/v1/babsang/get?type=appliedList',
			);

			loader.hide();

			this.doDescOrder(Babsang.result, 'id');
			this.babsangData = Babsang.result;
			console.log(this.babsangData);
		},
		// 차려 놓은 밥상 목록 가져오기
		async getCreatedBabsang() {
			const loader = this.$loading.show({ canCancel: false });

			const Babsang = await this.$get(
				'https://nicespoons.com/api/v1/babsang/get?type=createdList',
			);

			loader.hide();

			this.doDescOrder(Babsang.result, 'id');
			// console.log(babsangData.result);
			this.babsangData = Babsang.result;
		},
		// 선정된 밥상 목록 가져오기
		async getSelectedList() {
			const loader = this.$loading.show({ canCancel: false });

			const babsang = (
				await this.$get(
					'https://nicespoons.com/api/v1/babsang/get?type=selectedList',
				)
			).result;

			loader.hide();

			console.log('선정된 밥상 숟갈 빼기전 : ', babsang);

			this.doDescOrder(babsang, 'id');
			this.babsangData = babsang;
		},
		// 밥상 정렬(모집중/마감, 최신순/오래된순)
		doAscOrder(data) {
			this.babsangData = data.sort(function (a, b) {
				return a.dining_datetime - b.dining_datetime;
			});
		},
		doDescOrder(data) {
			this.babsangData = data.sort(function (a, b) {
				return b.dining_datetime - a.dining_datetime;
			});
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
}
.btn-outline-primary {
	color: #575757;
	border-color: #ffcb00;
	&:hover {
		background-color: #fff9e1;
	}
}
</style>
