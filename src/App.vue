<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid container">
			<!-- <a class="navbar-brand" href="#">겸상</a> -->
			<router-link to="/" class="navbar-brand fw-bold">
				<ul class="nav-r d-flex justify-content-center align-items-center">
					<li class="d-flex flex-column align-items-center mb-1 me-2">
						<div class="pf-wrap" style="width: 2.5rem">
							<div class="img-wrap">
								<img src="@/assets/img/symbol/gs_symbol_1.png" alt="프로필" />
							</div>
						</div>
					</li>
					겸상
				</ul>
			</router-link>
			<div class="collapse navbar-collapse" id="navbarColor03">
				<ul class="navbar-nav me-auto">
					<!-- <li class="nav-item">
						<router-link to="/" class="nav-link">밥상 검색 </router-link>
					</li> -->
					<li class="nav-item">
						<router-link to="/babsang-create" class="nav-link"
							>밥상 차리기
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/babsang-score" class="nav-link"
							>매너 평가
						</router-link>
					</li>
				</ul>
			</div>
			<ul class="nav-r d-flex justify-content-center align-items-center me-2">
				<!-- <li class="me-4">
					<a href="">
						<i
							class="bi bi-bell-fill"
							style="color: #5a5a5a; font-size: 1.3rem"
						></i>
						<i class="bi bi-bell" style="color: #5a5a5a; font-size: 1.3rem"></i>
					</a>
				</li> -->
				<li>
					<p
						v-if="user.email === undefined"
						@click="kakaoLogin"
						style="display: inline; cursor: pointer; vertical-align: middle"
					>
						로그인
					</p>
				</li>
				<li class="d-flex flex-column align-items-center mt-1">
					<router-link to="/mypage/profile" v-if="user.email !== undefined">
						<div class="pf-wrap" style="width: 2.5rem">
							<div class="img-wrap rounded-circle">
								<img :src="user.profile.profile_image_url" alt="프로필" />
							</div>
						</div>
					</router-link>
					<p
						class="m-0 pt-0"
						style="font-size: 0.6rem"
						v-if="user.email !== undefined"
					>
						{{ user.profile.nickname }}
					</p>
				</li>
			</ul>
		</div>
	</nav>
	<router-view />
</template>
<script>
import axios from 'axios';

export default {
	components: {},
	computed: {
		user() {
			return this.$store.state.user.userData;
		},
	},
	methods: {
		/* 카카오톡 로그인 */
		kakaoLogin() {
			window.Kakao.Auth.login({
				scope:
					'openid, profile_nickname, profile_image, account_email, gender, age_range',
				success: this.getProfile,
			});
		},
		getProfile(authObj) {
			console.log('---------------authObj data---------------');
			console.log(authObj);
			window.Kakao.API.request({
				url: '/v2/user/me',
				success: res => {
					const kakao_account = res.kakao_account;
					console.log('---------------kakao account---------------');
					console.log(kakao_account);
					this.login(kakao_account);
					alert('로그인 성공!');
				},
			});
		},
		async login(kakao_account) {
			const res = await axios.post('/auth/kakao/signup', {
				param: {
					email: kakao_account.email,
					nickname: kakao_account.profile.nickname,
					gender: kakao_account.gender,
					profile_image: kakao_account.profile.profile_image_url,
					age_range: kakao_account.age_range,
				},
			});
			console.log('---------------res.data---------------');
			console.log(res.data);
			localStorage.setItem('jwt', res.data.jwt);

			// vuex에 해당 유저정보를 저장
			this.$store.commit('user/getUserData', kakao_account);
			this.$store.commit('user/userCheck', true);
			console.log('----------login store-----------');
			console.log(this.$store.state.user.userData);
		},
	},
};
</script>

<style scoped lang="scss">
.navbar {
	padding-top: 0;
	padding-bottom: 0;
	height: 4rem;
}
.img-wrap {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 100%;
	overflow: hidden;
}
.img-wrap img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
