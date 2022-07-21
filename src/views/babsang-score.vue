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
											<img :src="babsangInfo.profile_image" alt="프로필" />
										</div>
										<strong>{{ babsangInfo.nickname }}</strong>
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
										<h5>{{ babjangQuestions[0][0].mannerTitle }}</h5>
										<ul
											:key="manner.host_questions_id"
											v-for="manner in babjangQuestions[0][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.host_questions_id"
													:value="manner"
													v-model="checkedBabjangManner"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.host_questions_id"
													>{{ manner.host_questions_description }}</label
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
										<h5>{{ babjangQuestions[1][0].mannerTitle }}</h5>
										<ul
											:key="manner.host_questions_id"
											v-for="manner in babjangQuestions[1][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.host_questions_id"
													:value="manner"
													v-model="checkedBabjangManner"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.host_questions_id"
													>{{ manner.host_questions_description }}</label
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
										<h5>{{ commonQuestions[0][0].mannerTitle }}</h5>
										<ul
											:key="manner.id"
											v-for="manner in commonQuestions[0][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.common_questions_id"
													:value="manner"
													v-model="checkedCommonBabjangManner"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.common_questions_id"
													>{{ manner.common_questions_description }}</label
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
										<h5>{{ commonQuestions[1][0].mannerTitle }}</h5>
										<ul
											:key="manner.common_questions_id"
											v-for="manner in commonQuestions[1][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.common_questions_id"
													:value="manner"
													v-model="checkedCommonBabjangManner"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.common_questions_id"
													>{{ manner.common_questions_description }}</label
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
						<!-- <div
						class="col-12 border rounded p-3 text-center mb-4"
						v-if="spoons.length !== 0"
					> -->
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
											<img :src="spoons[0].spoon_profile_image" alt="프로필" />
										</div>
										<strong>{{ spoons[0].spoon_nickname }}</strong>
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
										<h5>{{ commonQuestions[0][0].mannerTitle }}</h5>
										<ul
											:key="manner.common_questions_id"
											v-for="manner in commonQuestions[0][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.common_questions_id"
													:value="manner"
													v-model="checkedCommonSpoonManner1"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.common_questions_id"
													>{{ manner.common_questions_description }}</label
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
										<h5>{{ commonQuestions[1][0].mannerTitle }}</h5>
										<ul
											:key="manner.id"
											v-for="manner in commonQuestions[1][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.common_questions_id"
													:value="manner"
													v-model="checkedCommonSpoonManner1"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.common_questions_id"
													>{{ manner.common_questions_description }}</label
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
											<img :src="spoons[1].spoon_profile_image" alt="프로필" />
										</div>
										<strong>{{ spoons[1].spoon_nickname }}</strong>
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
										<h5>{{ commonQuestions[0][0].mannerTitle }}</h5>
										<ul
											:key="manner.common_questions_id"
											v-for="manner in commonQuestions[0][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.common_questions_id"
													:value="manner"
													v-model="checkedCommonSpoonManner2"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.common_questions_id"
													>{{ manner.common_questions_description }}</label
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
										<h5>{{ commonQuestions[1][0].mannerTitle }}</h5>
										<ul
											:key="manner.common_questions_id"
											v-for="manner in commonQuestions[1][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.common_questions_id"
													:value="manner"
													v-model="checkedCommonSpoonManner2"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.common_questions_id"
													>{{ manner.common_questions_description }}</label
												>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 숟갈3 점수 주기 -->
				<div v-if="this.userIndex === 3">
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
											<img :src="spoons[2].spoon_profile_image" alt="프로필" />
										</div>
										<strong>{{ spoons[2].spoon_nickname }}</strong>
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
										<h5>{{ commonQuestions[0][0].mannerTitle }}</h5>
										<ul
											:key="manner.common_questions_id"
											v-for="manner in commonQuestions[0][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.common_questions_id"
													:value="manner"
													v-model="checkedCommonSpoonManner2"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.common_questions_id"
													>{{ manner.common_questions_description }}</label
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
										<h5>{{ commonQuestions[1][0].mannerTitle }}</h5>
										<ul
											:key="manner.common_questions_id"
											v-for="manner in commonQuestions[1][1]"
										>
											<li>
												<input
													type="checkbox"
													class="list-group-item-check pe-none"
													name=""
													:id="manner.common_questions_id"
													:value="manner"
													v-model="checkedCommonSpoonManner2"
												/><label
													class="list-group-item rounded-3 py-3"
													style="text-align: center; cursor: pointer"
													:for="manner.common_questions_id"
													>{{ manner.common_questions_description }}</label
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
					:disabled="disabledBackButton()"
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
				<button
					type="button"
					class="btn btn-outline-primary"
					@click="doAccumulate()"
				>
					테스트(임시)
				</button>
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
			babsangInfo: [], // 밥장 정보 포함
			loginUser: [], // 로인 사용자 정보
			spoons: [],
			commonQuestions: [[[]], [[]]],
			babjangQuestions: [[[]], [[]]],
			// 로그인 사용자가 평가한 각 유저의 매너 평가 결과
			checkedBabjangManner: [],
			checkedCommonBabjangManner: [],
			checkedCommonSpoonManner1: [],
			checkedCommonSpoonManner2: [],
		};
	},
	computed: {
		user() {
			return this.$store.state.user.userInfo;
		},
	},
	setup() {},
	created() {
		this.getCommonQuestions();
		this.getBabjangQuestions();
		this.getBabsangSpoons();
		this.getBabsangInfo();
		this.getLoginUser();
	},
	mounted() {},
	unmounted() {},
	methods: {
		// 로그인 사용자 정보 가져오기
		async getLoginUser() {
			const user = await this.$get('https://nicespoons.com/api/v1/user');
			let loginUser = user.result[0];
			return loginUser;
		},
		// 신청한 숟갈, 선택된 숟갈 정보 가져오기
		async getBabsangSpoons() {
			const loader = this.$loading.show({ canCancel: false });

			const temp = await this.$get(
				`https://nicespoons.com/api/v1/babsang/${this.$route.query.babsangId}/babsangSpoons`,
			);

			let loginUser = await this.getLoginUser(); // 로그인 사용자 정보 가져오기
			console.log('로그인 사용자 : ', loginUser);

			loader.hide();

			// 신청한 숟갈
			let appliedSpoonY = temp.result.filter(spoon => spoon.apply_yn === 'Y');
			console.log('신청한 숟갈 : ', appliedSpoonY);

			// 선택된 숟갈
			let selectedSpoonY = appliedSpoonY.filter(
				spoon => spoon.selected_yn === 'Y',
			);
			console.log('선택된 숟갈 : ', selectedSpoonY);

			// 평가할 숟갈
			let spoons = selectedSpoonY.filter(
				spoon => spoon.spoon_email !== loginUser.email,
			);
			console.log('평가할 숟갈 : ', spoons);

			this.spoons = spoons;
		},
		// 밥상 정보 가져오기
		async getBabsangInfo() {
			const loader = this.$loading.show({ canCancel: false });

			const temp = (
				await this.$get(
					`https://nicespoons.com/api/v1/babsang/${this.$route.query.babsangId}`,
				)
			).result[0];

			let loginUser = await this.getLoginUser(); // 로그인 사용자 정보 가져오기
			this.loginUser = loginUser;
			console.log('로그인 사용자 : ', loginUser);

			loader.hide();

			this.babsangInfo = temp;
			console.log('밥상 정보 : ', this.babsangInfo);

			if (temp.host_email === loginUser.email) {
				this.userIndex = 1;

				console.log('평가자는 밥장입니다.');
			} else {
				this.babjangYN = 0;
				console.log('평가자는 밥장이 아닙니다.');
			}
		},
		// 공통 질문
		async getCommonQuestions() {
			const loader = this.$loading.show({ canCancel: false });

			const question = await this.$get(
				'https://nicespoons.com/api/v1/question?type=common',
			);

			loader.hide();

			console.log('공통 질문 가공전 : ', question);

			let good = question.result.filter(q => q.common_questions_type === 'G');
			let bad = question.result.filter(q => q.common_questions_type === 'B');

			let result = [
				[{ mannerTitle: '금매너' }, [...good]],
				[{ mannerTitle: '똥매너' }, [...bad]],
			];

			this.commonQuestions = result;
			console.log('공통 질문 : ', this.commonQuestions);
		},
		// 밥장 질문
		async getBabjangQuestions() {
			const loader = this.$loading.show({ canCancel: false });

			const question = await this.$get(
				'https://nicespoons.com/api/v1/question?type=host',
			);

			loader.hide();

			let good = question.result.filter(q => q.host_questions_type === 'G');
			let bad = question.result.filter(q => q.host_questions_type === 'B');

			let result = [
				[{ mannerTitle: '금매너' }, [...good]],
				[{ mannerTitle: '똥매너' }, [...bad]],
			];

			this.babjangQuestions = result;
			console.log('밥장 질문 : ', this.babjangQuestions);
		},
		// 버튼(이전/다음)
		nextScore() {
			if (this.userIndex < this.spoons.length) {
				this.userIndex++;
				this.computeResult();
			} else {
				this.$router.push('/');
				this.computeResult();
			}
			console.log('userIndex : ', this.userIndex);
		},
		backScore() {
			// 로그인 사용자가 밥장인 경우에는 밥장 자신을 평가 할 수 없도록 처리
			if (this.babsangInfo.host_email === this.loginUser.email) {
				if (this.userIndex > 1) {
					this.userIndex--;
				}
				console.log('userIndex : ', this.userIndex);
			} else {
				if (this.userIndex > 0) {
					this.userIndex--;
				}
				console.log('userIndex : ', this.userIndex);
			}
		},
		// 이전 버튼 disabled 처리
		disabledBackButton() {
			if (this.babsangInfo.host_email === this.loginUser.email) {
				if (this.userIndex === 1) {
					console.log('평가자가 밥장인 경우 이전 버튼 disabled');
					return true;
				} else {
					return false;
				}
			} else if (this.userIndex === 0) {
				console.log('평가자가 밥장이 아닌 경우 이전 버튼 enabled');
				return true;
			} else {
				return false;
			}
		},
		doTest() {
			this.computeResult();
		},
		// 밥장 점수 계산
		computeBabjangScore(chk) {
			// 가중치 적용(밥장 금매너(bg): 0.03, 밥장 똥매너(bb): -0.02)
			let temp;

			temp = chk.map(p =>
				p.host_questions_id.slice(0, 2) === 'bg'
					? { ...p, host_questions_weight: p.host_questions_weight * 0.03 }
					: p.host_questions_id.slice(0, 2) === 'bb'
					? { ...p, host_questions_weight: p.host_questions_weight * -0.02 }
					: p,
			);
			console.log('host_questions_id : ', temp);

			// 가중치 적용된 점수 합계
			let sum = temp
				.map(item => item.host_questions_weight)
				.reduce((prev, curr) => prev + curr, 0);

			return sum;
		},
		// 공통 점수 계산
		computeCommonScore(chk) {
			// 가중치 적용(숟갈 금매너(sg): 0.02, 숟갈 똥매너(sb): -0.03)
			let temp;

			temp = chk.map(p =>
				p.common_questions_id.slice(0, 2) === 'sg'
					? {
							...p,
							common_questions_weight: p.common_questions_weight * 0.02,
					  }
					: p.common_questions_id.slice(0, 2) === 'sb'
					? {
							...p,
							common_questions_weight: p.common_questions_weight * -0.03,
					  }
					: p,
			);
			console.log('common_questions_id : ', temp);

			// 가중치 적용된 점수 합계
			let sum = temp
				.map(item => item.common_questions_weight)
				.reduce((prev, curr) => prev + curr, 0);

			return sum;
		},
		// 밥상 점수 설문 취합
		computeResult() {
			console.log('checkedBabjangManner : ', this.checkedBabjangManner);
			console.log(
				'checkedCommonBabjangManner : ',
				this.checkedCommonBabjangManner,
			);
			console.log('checkedSpoonManner1 : ', this.checkedCommonSpoonManner1);
			console.log('checkedSpoonManner2 : ', this.checkedCommonSpoonManner2);

			let babjangScore = this.computeBabjangScore(this.checkedBabjangManner);
			let babjangCommonScore = this.computeCommonScore(
				this.checkedCommonBabjangManner,
			);
			let spoon1CommonScore = this.computeCommonScore(
				this.checkedCommonSpoonManner1,
			);
			let spoon2CommonScore = this.computeCommonScore(
				this.checkedCommonSpoonManner2,
			);

			console.log('babjangScore : ', babjangScore);
			console.log('babjangCommonScore : ', babjangCommonScore);
			console.log('spoon1CommonScore : ', spoon1CommonScore);
			console.log('spoon2CommonScore : ', spoon2CommonScore);
		},
		doPretreat() {
			// 임시 더미 데이터
			let manners = [
				{
					email: 'ubithus@naver.com',
					common_good_question01_count: 0,
					common_good_question02_count: 231,
					common_good_question03_count: 0,
					common_good_question04_count: 0,
					common_good_question05_count: 0,
					common_bad_question01_count: 0,
					common_bad_question02_count: 0,
					common_bad_question03_count: 0,
					common_bad_question04_count: 0,
					common_bad_question05_count: 0,
					host_good_question01_count: 10,
					host_good_question02_count: 0,
					host_bad_question01_count: 0,
					host_bad_question02_count: 0,
					dining_score: 3,
				},
			];

			console.log('checkedBabjangManner : ', this.checkedBabjangManner);
			console.log(
				'checkedCommonBabjangManner : ',
				this.checkedCommonBabjangManner,
			);
			console.log('checkedSpoonManner1 : ', this.checkedCommonSpoonManner1);
			console.log('checkedSpoonManner2 : ', this.checkedCommonSpoonManner2);

			// 기존 사용자 질문 및 점수 목록
			let result = [];
			for (let key in manners[0]) {
				console.log(key, manners[0][key]);
				// sg, sb, bg, bb
				let compoundID = ''.concat(
					key.substring(0, 6) === 'common'
						? 's'
						: key.substring(0, 4) === 'host'
						? 'b'
						: '',
					key.substring(7, 8) === 'g'
						? 'g'
						: key.substring(7, 8) === 'b'
						? 'b'
						: key.substring(5, 6) === 'g'
						? 'g'
						: key.substring(5, 6) === 'b'
						? 'b'
						: '',
					key.substring(key.length - 7, key.length - 6),
				);

				result.push([compoundID, key, manners[0][key]]);
			}
			console.log('사용자 질문 및 점수 목록 가공 결과 : ', result);
			return result;
		},
		// 받은 매너 누적
		// 각 평가 유형 별로 호출될 메서드
		// accumulate(older, newer) {
		doAccumulate() {
			let older = this.doPretreat();

			let newer = this.checkedBabjangManner;
			// let newer = this.checkedCommonBabjangManner;
			// let newer = this.checkedSpoonManner1;
			// let newer = this.checkedSpoonManner2;

			console.log('평가자가 선택한 매너 : ', newer);
			// console.log(checkedCommonBabjangManner);
			// console.log(checkedSpoonManner1);
			// console.log(checkedSpoonManner2);

			let tempArr = [];

			if (newer[0].host_questions_id.substring(0, 1) === 'b') {
				// 밥장 매너 누적
				for (let manner of older) {
					let mannerID = manner[0];
					for (let selected of newer) {
						if (selected.host_questions_id === mannerID) {
							let tempObject = {
								[manner[1]]: manner[2] + selected.host_questions_weight,
							};
							console.log('밥장 매너 누적 : ', tempObject);
						}
					}
				}
			} else {
				// 식사 매너 누적
				for (let manner of older) {
					let mannerID = manner[0];
					for (let selected of newer) {
						if (selected.common_questions_id === mannerID) {
							let tempObject = {
								[manner[1]]: manner[2] + selected.common_questions_weight,
							};
							console.log('밥장 식사 매너 누적 : ', tempObject);
						}
					}
				}
			}
			console.log(tempArr);
		},
		// 점수 PUT
		async putScore(manner, score, email) {
			const putScore = await this.$put(
				'https://nicespoons.com/api/v1/aggregation',
				{
					param: {
						[manner]: score,
					},
					email: email,
				},
			);
			console.log(putScore);
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
		background-color: #fff9e1;
	}
	&:active {
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
	// background-color: var(--bs-light);
	background-color: #fff9e1;
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
