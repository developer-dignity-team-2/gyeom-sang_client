<template>
	<div class="container">
		<div class="row my-4">
			<!-- 매너 점수 주기 -->
			<div>
				<!-- 밥장 점수 주기-->
				<div v-if="userIndex === 0">
					<div class="col-12 border rounded p-3 text-center mb-4">
						<div
							style="
								display: flex;
								align-items: center;
								justify-content: center;
							"
						>
							<div class="row">
								<div class="col">
									<div style="width: 12rem">
										<div class="img-wrap pf rounded-circle mb-1">
											<img :src="babjang[0].profile_image" alt="프로필" />
										</div>
										<strong>{{ babjang[0].nickname }}</strong>
									</div>
								</div>
							</div>
						</div>
					</div>
					<h4>밥장의 매너는 어땠나요?</h4>
					<div class="row">
						<div class="col-xl-6 col-md-12 col-sm-12 mb-4">
							<MannerGiveScoreCard
								:mannerTitle="giveScore[2][0].mannerTitle"
								:giveScore="giveScore[2][1]"
							/>
						</div>
						<div class="col-xl-6 col-md-12 col-sm-12 mb-4">
							<MannerGiveScoreCard
								:mannerTitle="giveScore[3][0].mannerTitle"
								:giveScore="giveScore[3][1]"
							/>
						</div>
					</div>
					<h4>밥장의 밥상 매너는 어땠나요?</h4>
					<div class="row">
						<div class="col-xl-6 col-md-12 col-sm-12 mb-4">
							<MannerGiveScoreCard
								:mannerTitle="giveScore[0][0].mannerTitle"
								:giveScore="giveScore[0][1]"
							/>
						</div>
						<div class="col-xl-6 col-md-12 col-sm-12">
							<MannerGiveScoreCard
								:mannerTitle="giveScore[1][0].mannerTitle"
								:giveScore="giveScore[1][1]"
							/>
						</div>
					</div>
				</div>
				<!-- 숟갈 점수 주기 -->
				<div :key="i" v-for="(spoon, i) in spoons">
					<div v-if="user.email !== spoon.email && userIndex === i++">
						<div class="col-12 border rounded p-3 text-center mb-4">
							<div
								style="
									display: flex;
									align-items: center;
									justify-content: center;
								"
							>
								<div class="row">
									<div class="col">
										<div style="width: 12rem">
											<div class="img-wrap pf rounded-circle mb-1">
												<img :src="spoon.profile_image" alt="프로필" />
											</div>
											<strong>{{ spoon.nickname }}</strong>
										</div>
									</div>
								</div>
							</div>
						</div>
						<h4>숟갈의 밥상 매너는 어땠나요?</h4>
						<div class="row">
							<div class="col-xl-6 col-md-12 col-sm-12 mb-4">
								<MannerGiveScoreCard
									:mannerTitle="giveScore[0][0].mannerTitle"
									:giveScore="giveScore[0][1]"
								/>
							</div>
							<div class="col-xl-6 col-md-12 col-sm-12">
								<MannerGiveScoreCard
									:mannerTitle="giveScore[1][0].mannerTitle"
									:giveScore="giveScore[1][1]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="btn-group mt-4" role="group" aria-label="Basic example">
				<button
					type="button"
					class="btn btn-outline-primary"
					@click="backScore"
				>
					이전
				</button>
				<button
					type="button"
					class="btn btn-outline-primary"
					@click="nextScore"
				>
					다음
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import MannerGiveScoreCard from '@/components/MannerGiveScoreCard';

export default {
	components: { MannerGiveScoreCard },
	data() {
		return {
			showCard: true,
			userIndex: 0,
			babjang: [
				{
					dining_table_id: 1,
					email: 'babjang1@gmail.com',
					gender: '남자',
					nickname: '밥장9',
					profile_image: require('../assets/img/users/m9.png'),
					age_range: '20대',
					mannerScore: 4,
					dining_spoons_description:
						'개발자의 품격 4기 2팀에서 구현 중인 혼밥 매칭 서비스 "겸상"입니다.',
				},
			],
			spoons: [
				{
					dining_table_id: 1,
					email: 'spoon1@gmail.com',
					gender: '여성',
					nickname: '숟갈1',
					profile_image: require('../assets/img/users/w1.png'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					dining_table_id: 1,
					email: 'spoon6@gmail.com',
					gender: '여성',
					nickname: '숟갈6',
					profile_image: require('../assets/img/users/w6.png'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					dining_table_id: 1,
					email: 'spoon7@gmail.com',
					gender: '여성',
					nickname: '숟갈7',
					profile_image: require('../assets/img/users/w7.png'),
					age_range: '20대',
					mannerScore: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
			],
			giveScore: [
				[
					{ mannerTitle: '금매너' },
					[
						{ id: 'sg1', question: '식사 후 냅킨을 챙겨줘요.', count: 1 },
						{ id: 'sg2', question: '수저를 챙겨줘요.', count: 9 },
						{ id: 'sg3', question: '물을 따라줘요.', count: 1 },
						{ id: 'sg4', question: '부족한 반찬, 음식을 챙겨줘요.', count: 1 },
						{ id: 'sg5', question: '분위기를 편하게 만들어요.', count: 1 },
					],
				],
				[
					{ mannerTitle: '똥매너' },
					[
						{ id: 'sd1', question: '약속 시간을 안 지켜요.', count: 1 },
						{ id: 'sd2', question: '음식을 지저분하게 먹어요.', count: 1 },
						{
							id: 'sd3',
							question: '맛있는 음식을 지나치게 가져가요.',
							count: 1,
						},
						{ id: 'sd4', question: '식사 중 대화 예의가 없어요.', count: 1 },
						{ id: 'sd5', question: '돈 정산이 깔끔하지 않아요.', count: 1 },
					],
				],
				[
					{ mannerTitle: '금매너' },
					[
						{ id: 'bg1', question: '당신은 겸상 매너요정 이에요.', count: 9 },
						{ id: 'bg2', question: '밥장이 밥상을 잘 주도해요.', count: 10 },
					],
				],
				[
					{ mannerTitle: '똥매너' },
					[
						{ id: 'bd1', question: '밥장이 사람을 차별해요.', count: 2 },
						{ id: 'bd2', question: '밥장이 독단적으로 행동해요.', count: 1 },
					],
				],
			],
		};
	},
	computed: {
		user() {
			return this.$store.state.user.userInfo;
		},
	},
	setup() {},
	created() {},
	mounted() {
		console.log(this.user.email);
	},
	unmounted() {},
	methods: {
		nextScore() {
			if (this.userIndex < this.giveScore.length - 2) {
				this.userIndex++;
			} else {
				this.$router.push('/');
			}
		},
		backScore() {
			if (this.userIndex > 0) {
				this.userIndex--;
			}
		},
	},
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
// 버튼
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
