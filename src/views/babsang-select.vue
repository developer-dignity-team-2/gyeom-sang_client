<template>
	<div class="container">
		<!-- 검색창 -->
		<div class="row my-4">
			<h3>함께 식사할 숟갈을 선택해 주세요!</h3>
		</div>
		<!-- 함께할 숟갈 -->
		<div style="position: sticky; top: 0">
			<h5>함께할 숟갈</h5>
			<div class="row text-center mb-5">
				<div class="col-3 profile me-3" style="width: 6rem">
					<div class="img-wrap pf rounded-circle">
						<img :src="user[0].profile_image" alt="프로필" />
					</div>
					<strong>{{ user[0].nickname }}</strong>
				</div>
				<div class="col-3 profile me-3" style="width: 6rem">
					<div class="img-wrap pf rounded-circle">
						<img :src="user[1].profile_image" alt="프로필" />
					</div>
					<strong>{{ user[1].nickname }}</strong>
				</div>
				<div class="col-3 profile me-3" style="width: 6rem">
					<div class="img-wrap pf rounded-circle">
						<img :src="user[2].profile_image" alt="프로필" />
					</div>
					<strong>{{ user[2].nickname }}</strong>
				</div>
			</div>
		</div>
		<h5>신청한 숟갈</h5>
		<div class="row mt-4 mb-4">
			<div class="col-8 d-flex justify-content-left">
				<div class="d-flex justify-content-center"></div>
			</div>
			<div class="col">
				<div class="row">
					<!-- 정렬 버튼 -->
					<div
						class="btn-group"
						role="group"
						aria-label="Button group with nested dropdown"
					>
						<button type="button" class="btn btn-primary">
							식사 매너 점수
						</button>
						<div class="btn-group" role="group">
							<button
								id="btnGroupDrop1"
								type="button"
								class="btn btn-primary dropdown-toggle"
								data-bs-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							></button>
							<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
								<a class="dropdown-item" href="#">높은 순</a>
							</div>
						</div>
						<button type="button" class="btn btn-success">신청순</button>
						<div class="btn-group" role="group">
							<button
								id="btnGroupDrop2"
								type="button"
								class="btn btn-success dropdown-toggle"
								data-bs-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							></button>
							<div
								class="dropdown-menu"
								aria-labelledby="btnGroupDrop2"
								style=""
							>
								<a class="dropdown-item" href="#">빠름</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 신청 숟갈 카드 -->
		<div class="row">
			<div class="col-4 mb-4" :key="spoon.email" v-for="spoon in user">
				<userCard
					:email="spoon.email"
					:gender="spoon.gender"
					:nickname="spoon.nickname"
					:profile_image="spoon.profile_image"
					:age_range="spoon.age_range"
					:mannerScore="spoon.mannerScore"
					:dining_spoons_description="spoon.dining_spoons_description"
				/>
			</div>
		</div>
	</div>
</template>
<script>
import userCard from '@/components/userCard';
export default {
	name: 'BabsangSelect',
	components: { userCard },
	data() {
		return {
			user: [
				{
					email: 'spoon1@gmail.com',
					gender: '여성',
					nickname: '숟갈1',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon2@gmail.com',
					gender: '여성',
					nickname: '숟갈2',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon3@gmail.com',
					gender: '여성',
					nickname: '숟갈3',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon4@gmail.com',
					gender: '여성',
					nickname: '숟갈4',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon5@gmail.com',
					gender: '여성',
					nickname: '숟갈5',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon6@gmail.com',
					gender: '여성',
					nickname: '숟갈6',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon7@gmail.com',
					gender: '여성',
					nickname: '숟갈7',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon8@gmail.com',
					gender: '여성',
					nickname: '숟갈8',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon9@gmail.com',
					gender: '여성',
					nickname: '숟갈9',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon10@gmail.com',
					gender: '여성',
					nickname: '숟갈10',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon11@gmail.com',
					gender: '여성',
					nickname: '숟갈11',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon12@gmail.com',
					gender: '여성',
					nickname: '숟갈12',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon13@gmail.com',
					gender: '여성',
					nickname: '숟갈13',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon14@gmail.com',
					gender: '여성',
					nickname: '숟갈14',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon15@gmail.com',
					gender: '여성',
					nickname: '숟갈15',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon16@gmail.com',
					gender: '여성',
					nickname: '숟갈16',
					profile_image: require('../assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
			],
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {},
};
</script>
<style scoped lang="scss">
.favorite {
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
}
.img-wrap {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.26%;
	overflow: hidden;
}
.img-wrap.map-wrap {
	padding-bottom: 40%;
}
.img-wrap.pf {
	padding-bottom: 100%;
}
.img-wrap img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
ul,
dl {
	padding: 0;
	margin: 0;
	list-style: none;
}
li {
	display: block;
}
dl {
	display: flex;
}
dt {
	margin-right: 1rem;
}
</style>
