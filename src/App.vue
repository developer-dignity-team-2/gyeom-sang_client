<template>
	<nav
		class="navbar navbar-expand-lg navbar-light bg-light"
		:class="[isNavShow ? 'show' : 'hidden']"
	>
		<div class="container-fluid container">
			<!-- <a class="navbar-brand" href="#">겸상</a> -->
			<router-link to="/" class="navbar-brand fw-bold">
				<ul class="nav-r d-flex justify-content-center align-items-center">
					<li class="d-flex flex-column align-items-center mb-1 me-2">
						<div class="pf-wrap" style="width: 2.5rem">
							<div class="img-wrap">
								<img
									src="@/assets/img/symbol/gs_simbol_1_e2.png"
									alt="프로필"
								/>
							</div>
						</div>
					</li>
					겸상
				</ul>
			</router-link>
			<div class="collapse navbar-collapse" id="navbarColor03">
				<ul class="navbar-nav me-auto">
					<li class="nav-item">
						<router-link to="/babsang-create" class="nav-link"
							>밥상 차리기
						</router-link>
					</li>
				</ul>
			</div>
			<ul class="nav-r d-flex justify-content-center align-items-center me-2">
				<li>
					<KakaoLogin />
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
						style="font-size: 0.6rem; cursor: default"
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
import KakaoLogin from '@/components/login/KakaoLogin.vue';
export default {
	components: { KakaoLogin },
	data() {
		return {
			isNavShow: true,
		};
	},

	computed: {
		user() {
			return this.$store.state.user.userData;
		},
	},
	watch: {
		$route(to) {
			this.navShow(to);
		},
	},
	methods: {
		navShow(route) {
			this.isNavShow = route.name !== 'GiveScore';
		},
	},
	mounted() {},
};
</script>

<style scoped lang="scss">
.navbar {
	padding-top: 0;
	padding-bottom: 0;
	height: 4rem;
	&.hidden {
		visibility: hidden;
	}
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
