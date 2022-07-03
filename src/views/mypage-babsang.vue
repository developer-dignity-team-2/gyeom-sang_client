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
					<h3>참여한 밥상 목록</h3>
					<!-- 버튼 -->
					<div class="row mt-4 mb-3">
						<div class="col-xl-8 col-12 mb-2">
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
										@click="showChosenBabsang"
									>
										선정된 밥상
									</button>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-12">
							<!-- 모집중, 최신순 -->
							<div class="row">
								<ButtonModule />
							</div>
						</div>
					</div>
					<!-- 밥상카드 -->
					<div class="row">
						<!-- <BabsangCardList :babsangData="babsangData" /> -->
						<BabsangCardList :babsangData="babsangData.result" />
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
		this.getBabsangData();
		// this.getAppliedBabsangList();
	},
	methods: {
		showAppliedBabsang() {
			this.showBabsang = 'A';
		},
		showMadeBabsang() {
			this.showBabsang = 'M';
		},
		showChosenBabsang() {
			this.showBabsang = 'C';
		},
		async getBabsangData() {
			const babsangData = await this.$get('/babsang');
			this.doAscOrder(babsangData.result, 'id');
			console.log(babsangData.result);
			this.babsangData = babsangData;
		},
		// 밥상 정렬(모집중/마감/잔체, 최신순/오래된순)
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
}
.btn-outline-primary {
	color: #575757;
	border-color: #ffcb00;
	&:hover {
		background-color: #ffcb00;
	}
}
</style>
