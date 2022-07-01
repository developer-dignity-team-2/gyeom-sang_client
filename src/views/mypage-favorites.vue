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
							<!-- 밥상카드 -->
							<div class="row">
								<!-- <BabsangCardList :babsangData="babsangData.result" /> -->
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
					active_yn: 'y',
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
					active_yn: 'y',
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
					active_yn: 'y',
				},
			],
		};
	},
	computed: {},
	mounted() {
		// this.getBabsangData();
	},
	methods: {
		// async getBabsangData() {
		// 	this.babsangData = await this.$get(
		// 		`https://nicespoons.com/api/v1/babsang`,
		// 	);
		// },
	},
};
</script>
<style scoped lang="scss">
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
