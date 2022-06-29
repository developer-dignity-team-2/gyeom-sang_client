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
							<div class="card rounded p-3" style="overflow: hidden">
								<div>
									<div
										class="list-group list-group-checkable d-grid gap-3 border-0 w-auto"
									>
										<h5>{{ mannerQuestions[2][0].mannerTitle }}</h5>
										<ul
											:key="manner.id"
											v-for="manner in mannerQuestions[2][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.id"
													:value="manner"
													v-model="checkedBabjangManner"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.id"
													>{{ manner.question }}</label
												>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-6 col-md-12 col-sm-12 mb-4">
							<div class="card rounded p-3" style="overflow: hidden">
								<div>
									<div
										class="list-group list-group-checkable d-grid gap-3 border-0 w-auto"
									>
										<h5>{{ mannerQuestions[3][0].mannerTitle }}</h5>
										<ul
											:key="manner.id"
											v-for="manner in mannerQuestions[3][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.id"
													:value="manner"
													v-model="checkedBabjangManner"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.id"
													>{{ manner.question }}</label
												>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<h4>밥장의 밥상 매너는 어땠나요?</h4>
					<div class="row">
						<div class="col-xl-6 col-md-12 col-sm-12 mb-4">
							<div class="card rounded p-3" style="overflow: hidden">
								<div>
									<div
										class="list-group list-group-checkable d-grid gap-3 border-0 w-auto"
									>
										<h5>{{ mannerQuestions[0][0].mannerTitle }}</h5>
										<ul
											:key="manner.id"
											v-for="manner in mannerQuestions[0][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.id"
													:value="manner"
													v-model="checkedBabjangManner"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.id"
													>{{ manner.question }}</label
												>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-6 col-md-12 col-sm-12">
							<div class="card rounded p-3" style="overflow: hidden">
								<div>
									<div
										class="list-group list-group-checkable d-grid gap-3 border-0 w-auto"
									>
										<h5>{{ mannerQuestions[1][0].mannerTitle }}</h5>
										<ul
											:key="manner.id"
											v-for="manner in mannerQuestions[1][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.id"
													:value="manner"
													v-model="checkedBabjangManner"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.id"
													>{{ manner.question }}</label
												>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 숟갈1 점수 주기 -->
				<div v-if="this.userIndex === 1">
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
											<img :src="spoons[0].profile_image" alt="프로필" />
										</div>
										<strong>{{ spoons[0].nickname }}</strong>
									</div>
								</div>
							</div>
						</div>
					</div>
					<h4>숟갈의 밥상 매너는 어땠나요?</h4>
					<div class="row">
						<div class="col-xl-6 col-md-12 col-sm-12 mb-4">
							<div class="card rounded p-3" style="overflow: hidden">
								<div>
									<div
										class="list-group list-group-checkable d-grid gap-3 border-0 w-auto"
									>
										<h5>{{ mannerQuestions[0][0].mannerTitle }}</h5>
										<ul
											:key="manner.id"
											v-for="manner in mannerQuestions[0][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.id"
													:value="manner"
													v-model="checkedSpoonManner1"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.id"
													>{{ manner.question }}</label
												>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-6 col-md-12 col-sm-12">
							<div class="card rounded p-3" style="overflow: hidden">
								<div>
									<div
										class="list-group list-group-checkable d-grid gap-3 border-0 w-auto"
									>
										<h5>{{ mannerQuestions[1][0].mannerTitle }}</h5>
										<ul
											:key="manner.id"
											v-for="manner in mannerQuestions[1][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.id"
													:value="manner"
													v-model="checkedSpoonManner1"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.id"
													>{{ manner.question }}</label
												>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 숟갈2 점수 주기 -->
				<div v-if="this.userIndex === 2">
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
											<img :src="spoons[1].profile_image" alt="프로필" />
										</div>
										<strong>{{ spoons[1].nickname }}</strong>
									</div>
								</div>
							</div>
						</div>
					</div>
					<h4>숟갈의 밥상 매너는 어땠나요?</h4>
					<div class="row">
						<div class="col-xl-6 col-md-12 col-sm-12 mb-4">
							<div class="card rounded p-3" style="overflow: hidden">
								<div>
									<div
										class="list-group list-group-checkable d-grid gap-3 border-0 w-auto"
									>
										<h5>{{ mannerQuestions[0][0].mannerTitle }}</h5>
										<ul
											:key="manner.id"
											v-for="manner in mannerQuestions[0][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.id"
													:value="manner"
													v-model="checkedSpoonManner2"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.id"
													>{{ manner.question }}</label
												>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-6 col-md-12 col-sm-12">
							<div class="card rounded p-3" style="overflow: hidden">
								<div>
									<div
										class="list-group list-group-checkable d-grid gap-3 border-0 w-auto"
									>
										<h5>{{ mannerQuestions[1][0].mannerTitle }}</h5>
										<ul
											:key="manner.id"
											v-for="manner in mannerQuestions[1][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.id"
													:value="manner"
													v-model="checkedSpoonManner2"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.id"
													>{{ manner.question }}</label
												>
											</li>
										</ul>
									</div>
								</div>
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
					:disabled="userIndex < 1"
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
				<!-- <button type="button" class="btn btn-outline-primary" @click="doTest">
					테스트(임시)
				</button> -->
			</div>
		</div>
	</div>
</template>
<script>
export default {
	components: {},
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
			mannerQuestions: [
				[
					{ mannerTitle: '금매너' },
					[
						{ id: 'sg1', question: '식사 후 냅킨을 챙겨줘요.', score: 1 },
						{ id: 'sg2', question: '수저를 챙겨줘요.', score: 1 },
						{ id: 'sg3', question: '물을 따라줘요.', score: 1 },
						{ id: 'sg4', question: '부족한 반찬, 음식을 챙겨줘요.', score: 1 },
						{ id: 'sg5', question: '분위기를 편하게 만들어요.', score: 1 },
					],
				],
				[
					{ mannerTitle: '똥매너' },
					[
						{ id: 'sb1', question: '약속 시간을 안 지켜요.', score: -1 },
						{ id: 'sb2', question: '음식을 지저분하게 먹어요.', score: -1 },
						{
							id: 'sd3',
							question: '맛있는 음식을 지나치게 가져가요.',
							count: 1,
						},
						{ id: 'sb4', question: '식사 중 대화 예의가 없어요.', score: -1 },
						{ id: 'sb5', question: '돈 정산이 깔끔하지 않아요.', score: -1 },
					],
				],
				[
					{ mannerTitle: '금매너' },
					[
						{ id: 'bg1', question: '당신은 겸상 매너요정 이에요.', score: 1 },
						{ id: 'bg2', question: '밥장이 밥상을 잘 주도해요.', score: 1 },
					],
				],
				[
					{ mannerTitle: '똥매너' },
					[
						{ id: 'bb1', question: '밥장이 사람을 차별해요.', score: -1 },
						{ id: 'bb2', question: '밥장이 독단적으로 행동해요.', score: -1 },
					],
				],
			],
			// 로그인 사용자가 평가한 각 유저의 매너 평가 결과
			checkedBabjangManner: [],
			checkedSpoonManner1: [],
			checkedSpoonManner2: [],
			// DB로 보낼 이 밥상의 매너 평가 결과
			mannerResultArr: [],
		};
	},
	computed: {
		user() {
			return this.$store.state.user.userInfo;
		},
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		// 버튼(이전/다음)
		nextScore() {
			if (this.userIndex < this.mannerQuestions.length - 2) {
				this.userIndex++;
				this.computeResult();
			} else {
				this.$router.push('/');
				this.computeResult();
			}
		},
		backScore() {
			if (this.userIndex > 0) {
				this.userIndex--;
			}
		},
		doTest() {
			this.computeResult();
		},
		// 밥상 점수 설문 취합
		computeResult() {
			let tmpArr = [];
			let tmpObj = {
				user: this.babjang[0],
				getQuestion: this.checkedBabjangManner,
				getScore: this.computeScore(this.checkedBabjangManner),
			};
			tmpArr.push(tmpObj);
			tmpObj = {
				user: this.spoons[0],
				getQuestion: this.checkedSpoonManner1,
				getScore: this.computeScore(this.checkedSpoonManner1),
			};
			tmpArr.push(tmpObj);
			tmpObj = {
				user: this.spoons[1],
				getQuestion: this.checkedSpoonManner2,
				getScore: 0,
			};
			tmpArr.push(tmpObj);
			this.mannerResultArr = JSON.stringify(tmpArr);
			// console.log(tmpArr);
			console.log('mannerResultArr: ' + this.mannerResultArr);
		},
		// 매너 점수 계산
		computeScore(chk) {
			// 가중치 적용(밥장 금매너(bg): 0.03, 밥장 똥매너(bb): 0.02, 숟갈 금매너(sg): 0.02, 숟갈 똥 매너(sb): 0.03)
			const updatedMannerQuestion = chk.map(p =>
				p.id.slice(0, 2) === 'bg'
					? { ...p, score: p.score * 0.03 }
					: p.id.slice(0, 2) === 'bb'
					? { ...p, score: p.score * 0.02 }
					: p.id.slice(0, 2) === 'sg'
					? { ...p, score: p.score * 0.02 }
					: p.id.slice(0, 2) === 'sb'
					? { ...p, score: p.score * 0.03 }
					: p,
			);
			// 가중치 적용된 점수 합계
			const sumAll = updatedMannerQuestion
				.map(item => item.score)
				.reduce((prev, curr) => prev + curr, 0);
			return sumAll;
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
/* 매너 질문 스타일 */
.list-group {
	// max-width: 460px;
	margin: 1rem auto;
}

.form-check-input:checked + .form-checked-content {
	opacity: 0.5;
}

.form-check-input-placeholder {
	border-style: dashed;
}
[contenteditable]:focus {
	outline: 0;
}

.list-group-checkable .list-group-item {
	cursor: pointer;
}
.list-group-item-check {
	position: absolute;
	clip: rect(0, 0, 0, 0);
}
.list-group-item-check:hover + .list-group-item {
	background-color: var(--bs-light);
}
.list-group-item-check:checked + .list-group-item {
	color: #fff;
	background-color: var(--bs-yellow);
}
.list-group-item-check[disabled] + .list-group-item,
.list-group-item-check:disabled + .list-group-item {
	pointer-events: none;
	filter: none;
	opacity: 0.5;
}

.list-group-radio .list-group-item {
	cursor: pointer;
	border-radius: 0.5rem;
}
.list-group-radio .form-check-input {
	z-index: 2;
	margin-top: -0.5em;
}
.list-group-radio .list-group-item:hover,
.list-group-radio .list-group-item:focus {
	background-color: var(--bs-light);
}

.list-group-radio .form-check-input:checked + .list-group-item {
	background-color: var(--bs-body);
	border-color: var(--bs-blue);
	box-shadow: 0 0 0 2px var(--bs-blue);
}
.list-group-radio .form-check-input[disabled] + .list-group-item,
.list-group-radio .form-check-input:disabled + .list-group-item {
	pointer-events: none;
	filter: none;
	opacity: 0.5;
}
</style>
