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
					<div class="row mt-4 mb-4">
						<div class="col-xl-8 col-12">
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
			babsangData: [
				{
					create_date: '2022-06-26 17:46:53',
					dining_count: 3,
					dining_datetime: '2022-06-30 00:00:00',
					dining_description: '제주도 카페 같이가요~!',
					dining_status: 0,
					dining_thumbnail: '1656233181253.jpg',
					gender_check: 'ALL',
					host_email: 'tmddhks0104@naver.com',
					id: 1,
					nickname: '밥장1',
					profile_image: require('../assets/img/users/m1.png'),

					recruit_end_date: '2022-06-05 00:00:00',
					recruit_start_date: '2022-06-01 00:00:00',
					restaurant_location: '제주 제주시 애월읍 애월북서길 56',
					restaurant_name: '하이엔드제주',
					update_date: '2022-06-26 17:46:53',
				},
				{
					create_date: '2022-06-26 17:46:53',
					dining_count: 3,
					dining_datetime: '2022-06-30 00:00:00',
					dining_description: '제주도 카페 같이가요~!',
					dining_status: 0,
					dining_thumbnail: '1656233181253.jpg',
					gender_check: 'ALL',
					host_email: 'tmddhks0104@naver.com',
					id: 12,
					nickname: '밥장2',
					profile_image: require('../assets/img/users/m2.png'),
					recruit_end_date: '2022-06-05 00:00:00',
					recruit_start_date: '2022-06-01 00:00:00',
					restaurant_location: '제주 제주시 애월읍 애월북서길 66',
					restaurant_name: '하이엔드제주',
					update_date: '2022-06-26 17:46:53',
				},
				{
					create_date: '2022-06-26 17:46:53',
					dining_count: 3,
					dining_datetime: '2022-06-30 00:00:00',
					dining_description: '제주도 카페 같이가요~!',
					dining_status: 0,
					dining_thumbnail: '1656233181253.jpg',
					gender_check: 'ALL',
					host_email: 'tmddhks0104@naver.com',
					id: 3,
					nickname: '밥장3',
					profile_image: require('../assets/img/users/m3.png'),
					recruit_end_date: '2022-06-05 00:00:00',
					recruit_start_date: '2022-06-01 00:00:00',
					restaurant_location: '제주 제주시 애월읍 애월북서길 76',
					restaurant_name: '하이엔드제주',
					update_date: '2022-06-26 17:46:53',
				},
			],
		};
	},
	computed: {},
	mounted() {},
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
