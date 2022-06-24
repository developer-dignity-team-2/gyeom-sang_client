<template>
	<div class="container mb-5">
		<div class="row my-4">
			<!-- 네브바 -->
			<div class="col-xl-3 col-md-4 col-sm-12">
				<CompUserProfile />
			</div>
			<!-- 본문영역 -->
			<div class="col-xl-9 col-md-8 col-sm-12">
				<div
					class="col dropdown-menu position-static d-grid gap-1 rounded-3 shadow w-220px"
				>
					<div
						class="row d-flex text-center flex-column align-items-center p-5"
					>
						<div class="profile me-3" style="width: 16rem">
							<div class="img-wrap pf rounded-circle">
								<img :src="user.profile_image" alt="프로필" />
							</div>
						</div>
						<h4 class="mt-2">{{ user.nickname }}</h4>
						<fieldset>
							<div class="form-group">
								<label class="mt-4 text-primary">성별</label>
								<div class="form-check">
									<label class="form-check-label">
										<input
											type="radio"
											class="form-check-input"
											name="optionsRadios"
											id="optionsRadios2"
											value="option2"
											disabled
											checked
										/>
										남성
									</label>
								</div>
								<div class="form-check disabled">
									<label class="form-check-label">
										<input
											type="radio"
											class="form-check-input"
											name="optionsRadios"
											id="optionsRadios3"
											value="option3"
											disabled=""
											checked
										/>
										여성
									</label>
								</div>
							</div>
							<div class="form-group">
								<label
									for="exampleTextarea"
									class="form-label mt-4 text-primary"
									>식사매너</label
								>
								<div>
									<font-awesome-icon
										icon="fa-solid fa-star"
										style="color: #ffd24c"
									/>
									<font-awesome-icon
										icon="fa-solid fa-star"
										style="color: #ffd24c"
									/>
									<font-awesome-icon
										icon="fa-solid fa-star"
										style="color: #ffd24c"
									/>
									<font-awesome-icon
										icon="fa-solid fa-star"
										style="color: #ffd24c"
									/>
									<font-awesome-icon
										icon="fa-solid fa-star"
										style="color: #ffd24c"
									/>
								</div>
							</div>
							<div class="form-group">
								<label
									for="exampleTextarea"
									class="form-label mt-4 text-primary"
									>자기소개</label
								>
								<textarea
									class="form-control"
									style="resize: none"
									id="exampleTextarea"
									rows="3"
									disabled
									v-model="user.profile_description"
								></textarea>
							</div>
							<div class="d-flex justify-content-center mt-4">
								<button
									type="button"
									class="btn btn-primary mx-3"
									v-show="!modifySave"
									@click="doModifySave()"
								>
									수정
								</button>
								<div v-show="modifySave">
									<button
										type="button"
										class="btn btn-primary mx-3"
										@click="doModifySave()"
									>
										저장
									</button>
									<button
										type="submit"
										class="btn btn-secondary"
										@click="doModifySave()"
									>
										취소
									</button>
								</div>
							</div>
						</fieldset>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CompUserProfile from '@/components/comp-user-profile';
export default {
	name: 'MypageProfile',
	components: { CompUserProfile },
	data() {
		return {
			stars: 0,
			modifySave: false,
			// user: [
			// 	{
			// 		email: 'spoon1@gmail.com',
			// 		gender: '여자',
			// 		nickname: '숟갈1',
			// 		profile_image: require('../assets/img/exprofile2.jpg'),
			// 		age_range: '20대',
			// 		mannerScore: 4,
			// 		dining_spoons_description:
			// 			'개발자의 품격 4기 2팀에서 구현 중인 혼밥 매칭 서비스 "겸상"입니다.',
			// 	},
			// ],
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
		this.stars = this.user.mannerScore;
	},
	unmounted() {},
	methods: {
		doModifySave() {
			if (this.modifySave === false) {
				this.modifySave = true;
			} else {
				this.modifySave = false;
			}
		},
	},
};
</script>
<style scoped>
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
</style>
