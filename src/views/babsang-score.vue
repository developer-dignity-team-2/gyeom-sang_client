<template>
	<div class="container">
		<div class="row my-4">
			<!-- 매너 점수 주기 -->
			<div>
				<h3 id="top">
					<strong>{{ babsangInfo.restaurant_name }}</strong> 밥상에 대한 식사
					매너를 평가해 주세요~
				</h3>
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
											<img
												:src="theSpoons[0]?.spoon_profile_image"
												alt="프로필"
											/>
										</div>
										<strong>{{ theSpoons[0]?.spoon_nickname }}</strong>
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
											<img
												:src="theSpoons[1].spoon_profile_image"
												alt="프로필"
											/>
										</div>
										<strong>{{ theSpoons[1].spoon_nickname }}</strong>
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
											<img
												:src="theSpoons[2].spoon_profile_image"
												alt="프로필"
											/>
										</div>
										<strong>{{ theSpoons[2].spoon_nickname }}</strong>
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
													v-model="checkedCommonSpoonManner3"
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
													v-model="checkedCommonSpoonManner3"
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
					class="btn btn-primary"
					@click="backScore"
					:disabled="disabledBackButton()"
				>
					이전
				</button>
				<button type="button" class="btn btn-primary" @click="nextScore">
					다음
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
			userIndex: 0, // 로그인 사용자(평가자)의 밥장, 숟갈 여부(0은 숟갈, 1은 밥장)
			babsangInfo: [], // 밥장 정보 포함*
			loginUser: [], // 로인 사용자 정보
			spoons: [], // 숟갈 얹은 사용자들 정보
			theSpoons: [], // 매너 평가 대상 숟갈 정보*
			commonQuestions: [[[]], [[]]], // 공통용 매너 질문 정보
			babjangQuestions: [[[]], [[]]], // 밥장용 매너 질문 정보
			// 로그인 사용자가 평가한 각 유저의 매너 평가 결과
			checkedBabjangManner: [], // 밥장이 받은 밥상 운영 매너
			checkedCommonBabjangManner: [], // 밥장이 받은 식사 매너
			checkedCommonSpoonManner1: [], // 숟갈1이 받은 식사 매너
			checkedCommonSpoonManner2: [], // 숟갈2이 받은 식사 매너
			checkedCommonSpoonManner3: [], // 숟갈3이 받은 식사 매너
			mannerScoreResult: [], // 서버에 PUT할 평가 대상자의 누적 매너 항목 및 점수
		};
	},
	computed: {
		user() {
			return this.$store.state.user.userInfo;
		},
	},
	setup() {},
	created() {
		this.doInitialInfo(); // 서버에서 필요한 정보 가져오기
	},
	methods: {
		// ========== [이하] 서버로 부터 필요한 정보 가져와서 용도에 맞게 가공 처리 ==========
		// 로그인 사용자(평가자)의 밥장, 숟갈 여부
		async doInitialInfo() {
			const loader = this.$loading.show({ canCancel: false });

			let babsangInfo = await this.getBabsang(); // 밥상(밥장) 정보 가져오기
			this.babsangInfo = babsangInfo;
			let loginUser = await this.getLoginUser(); // 로그인 사용자 정보 가져오기
			this.loginUser = loginUser;
			if (babsangInfo.host_email === loginUser.email) {
				this.userIndex = 1;
			} else {
				this.babjangYN = 0;
			}
			let babsangSpoons = await this.getBabsangSpoons(); // 숟갈 얹은 사용자 정보 가져오기
			this.spoons = babsangSpoons;
			this.doFilterBabsangSpoons(); // 평가 대상 숟갈 정보 가져오기
			this.getCommonQuestions(); // 공통용 매너 질문 정보 가져오기
			this.getBabjangQuestions(); // 밥장용 매너 질문 정보 가져오기
			loader.hide();
		},
		// 밥상 정보 가져오기
		async getBabsang() {
			const temp = (await this.$get(`/babsang/${this.$route.query.babsangId}`))
				.result[0];

			return temp;
		},
		// 로그인 사용자 정보 가져오기
		async getLoginUser() {
			const user = await this.$get('/user');
			let loginUser = user.result[0];

			return loginUser;
		},
		// 숟갈 얹은 사용자들 정보
		async getBabsangSpoons() {
			const temp = await this.$get(
				`/babsang/${this.$route.query.babsangId}/babsangSpoons`,
			);

			return temp;
		},
		// 매너 평가 대상 숟갈 가져오기
		doFilterBabsangSpoons() {
			// 신청한 숟갈
			let appliedSpoonY = this.spoons.result.filter(
				spoon => spoon.apply_yn === 'Y',
			);
			// 선택된 숟갈
			let selectedSpoonY = appliedSpoonY.filter(
				spoon => spoon.selected_yn === 'Y',
			);
			// 매너 평가 대상 숟갈
			let theSpoons = selectedSpoonY.filter(
				spoon => spoon.spoon_email !== this.loginUser.email,
			);
			this.theSpoons = theSpoons;
		},
		// 공통용 매너 질문 정보 가져오기
		async getCommonQuestions() {
			const question = await this.$get('/question?type=common');
			let good = question.result.filter(q => q.common_questions_type === 'G');
			let bad = question.result.filter(q => q.common_questions_type === 'B');
			let result = [
				[{ mannerTitle: '금매너' }, [...good]],
				[{ mannerTitle: '똥매너' }, [...bad]],
			];
			this.commonQuestions = result;
		},
		// 밥장용 매너 질문 정보 가져오기
		async getBabjangQuestions() {
			const question = await this.$get('/question?type=host');

			let good = question.result.filter(q => q.host_questions_type === 'G');
			let bad = question.result.filter(q => q.host_questions_type === 'B');

			let result = [
				[{ mannerTitle: '금매너' }, [...good]],
				[{ mannerTitle: '똥매너' }, [...bad]],
			];

			this.babjangQuestions = result;
		},
		// ========== [이상] 서버로 부터 필요한 정보 가져와서 용도에 맞게 가공 처리 ==========

		// ========== [이하] 평가한 매너 점수 계산 ==========
		// 밥장 점수 계산 함수(computeResult() 내에서 작동)
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

			// 가중치 적용된 점수 합계
			let sum = temp
				.map(item => item.host_questions_weight)
				.reduce((prev, curr) => prev + curr, 0);

			return sum;
		},
		// 공통 점수 계산 함수(computeResult() 내에서 작동)
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

			// 가중치 적용된 점수 합계
			let sum = temp
				.map(item => item.common_questions_weight)
				.reduce((prev, curr) => prev + curr, 0);

			return sum;
		},
		// ========== [이상] 평가한 매너 점수 계산 ==========

		// ========== [이하] 평가한 매너 항목 정리 ==========
		// 최종 매너 평가 버튼(다음 버튼) 클릭시 서버로 보낼 평가 대상자들의 누적 매너 항목과 점수 결과
		async doMakeMannerLists() {
			//밥장 매너 평가 결과 데이터
			let olderBabjang = await this.doMakeMannerList(
				this.babsangInfo.host_email,
			);
			this.mannerScoreResult.push(
				await this.doAccumulateBabjang(
					olderBabjang,
					this.checkedBabjangManner,
					this.babsangInfo,
				),
			);

			//밥장 식사 매너 평가 결과 데이터
			let olderCommon = await this.doMakeMannerList(
				this.babsangInfo.host_email,
			);
			await this.doAccumulateCommon(
				olderCommon,
				this.checkedCommonBabjangManner,
				this.babsangInfo.host_email,
			);

			// 숟갈 식사 매너 평가 결과 데이터
			let newerArr = [
				this.checkedCommonSpoonManner1,
				this.checkedCommonSpoonManner2,
				this.checkedCommonSpoonManner3,
			];

			for (let i = 0; i < this.theSpoons.length; i++) {
				let older = await this.doMakeMannerList(this.theSpoons[i].spoon_email);
				await this.doAccumulateCommon(
					older,
					newerArr[i],
					this.theSpoons[i].spoon_email,
				);
			}
			// 평가 대상자의 평가 결과 DB에 PUT
			for (let result of this.mannerScoreResult) {
				if (result !== undefined) {
					for (let i = 1; i < result.length; i++) {
						for (let k in result[i]) {
							this.putScore(k, result[i][k], result[0].email);
						}
					}
				}
			}
			await this.putDone(this.loginUser.email, this.babsangInfo.id); // 매너 평가 완료(is_done: 'Y')
			// 매너 평가 종료 후 메인 화면 가기
			this.$router.push({
				path: '/',
			});
		},
		// 매너 평가 완료 표기
		async putDone(email, babsangId) {
			await this.$put('/babsang/review/list', {
				param: {
					is_done: 'Y',
					email: email,
					dining_table_id: babsangId,
				},
			});
		},
		// 평가 대상자의 매너 항목과 점수 가져와 ID 부여
		async doMakeMannerList(userEmail) {
			// let temp = theSpoon.spoon_email;
			let manners = await this.getAggregation(userEmail); // 서버에서 평가 대상자의 매너 점수 가져오기
			let result = this.doAddID(manners); // 서버에서 가져온 평가 대상자의 매너 및 점수에 ID 부여
			return result;
		},
		// 서버에서 평가 대상자의 매너 점수 가져오기
		async getAggregation(email) {
			const temp = (await this.$get(`/aggregation?extraEmail=${email}`))
				.result[0];
			return temp;
		},
		// 서버에서 가져온 평가 대상자의 매너 및 점수에 ID 부여
		doAddID(manners) {
			let result = [];
			for (let key in manners) {
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

				result.push([compoundID, key, manners[key]]);
			}
			return result;
		},
		// 로그인 사용자가 부여한 밥장의 매너 누적(각 평가 대상 별로 각각 호출될 메서드)
		doAccumulateBabjang(older, newer, babjang) {
			// 밥장이 받은 매너 누적
			if (newer.length !== 0) {
				let tempArr = [{ email: babjang.host_email }]; // 평가 대상 밥장 이메일(최종 put용 PK)
				// 받은 매너 개수 누적
				for (let manner of older) {
					let mannerID = manner[0];
					for (let selected of newer) {
						if (selected.host_questions_id === mannerID) {
							let tempObject = {
								[manner[1]]: manner[2] + selected.host_questions_weight,
							};
							tempArr.push(tempObject);
						}
					}
					if (manner[1] === 'dining_score') {
						let tempObject = {
							[manner[1]]: manner[2] + this.computeBabjangScore(newer),
						};
						tempArr.push(tempObject);
					}
				}
				// 받은 매너 점수 누적
				this.mannerScoreResult.push(tempArr);
			}
		},
		// 로그인 사용자가 부여한 숟갈의 매너 누적(각 평가 대상 별로 각각 호출될 메서드)
		doAccumulateCommon(older, newer, userEmail) {
			// 숟갈의 받은 식사 매너 누적
			if (newer.length !== 0) {
				let tempArr = [{ email: userEmail }]; // 평가 대상 숟갈 이메일(최종 put용 PK)
				// 받은 매너 개수 누적
				for (let manner of older) {
					let mannerID = manner[0];
					for (let selected of newer) {
						if (selected.common_questions_id === mannerID) {
							let tempObject = {
								[manner[1]]: manner[2] + selected.common_questions_weight,
							};
							tempArr.push(tempObject);
						}
					}
					if (manner[1] === 'dining_score') {
						let tempObject = {
							[manner[1]]: manner[2] + this.computeCommonScore(newer),
						};
						tempArr.push(tempObject);
					}
				}
				// 받은 매너 점수 누적
				this.mannerScoreResult.push(tempArr);
			}
		},
		// 점수 PUT
		async putScore(manner, score, email) {
			await this.$put(`/aggregation`, {
				param: {
					[manner]: score,
				},
				email: email,
			});
		},
		// 사용자에게 해당되는 모든 밥상의 평가 완료시 PUT
		async putReviewActiveN() {
			await this.$put(`/user`, {
				param: {
					review_active: 'N',
				},
			});
		},

		// ========== [이하] 버튼 처리 ==========
		// 버튼(이전/다음)
		nextScore() {
			if (this.userIndex < this.theSpoons.length) {
				this.userIndex++;
				// this.computeResult();
			} else {
				this.$swal({
					title: '식사 매너 평가 완료!',
					text: `${this.babsangInfo.restaurant_name} 밥상에 대해 평가해 주셔서 감사합니다 ^O^`,
					icon: 'success',
					iconColor: '#ffcb00',
					confirmButtonText: '확인',
					confirmButtonColor: '#ffcb00',
				});
				this.doMakeMannerLists();
				// this.$router.push('/');
				// this.computeResult();
			}
			location.href = '#top';
		},
		backScore() {
			// 로그인 사용자가 밥장인 경우에는 밥장 자신을 평가 할 수 없도록 처리
			if (this.babsangInfo.host_email === this.loginUser.email) {
				if (this.userIndex > 1) {
					this.userIndex--;
					location.href = '#top';
				}
			} else {
				if (this.userIndex > 0) {
					this.userIndex--;
				}
			}
			location.href = '#top';
		},
		// 이전 버튼 disabled 처리
		disabledBackButton() {
			if (this.babsangInfo.host_email === this.loginUser.email) {
				if (this.userIndex === 1) {
					return true;
				} else {
					return false;
				}
			} else if (this.userIndex === 0) {
				return true;
			} else {
				return false;
			}
		},
		// ========== 이상 버튼 처리 ==========
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
	// background-color: #ffcb00;
	background-color: #fff9e1;
	border-color: #ffcb00;
	&:hover {
		background-color: #ffcb00;
		// background-color: #fff9e1;
	}
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
