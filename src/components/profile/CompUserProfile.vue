<template>
	<div class="container d-grid gap-3 p-0">
		<ul
			class="dropdown-menu position-static d-grid gap-0 p-3 rounded-3 mx-0 shadow w-220px"
		>
			<li>
				<strong> {{ user[0].nickname }} 님 </strong>
			</li>
			<li>
				{{ user[0].email }}
			</li>
		</ul>
		<ul
			class="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 mb-3 shadow w-220px"
		>
			<li>
				<div class="dropdown-item rounded-2 title">내 정보</div>
			</li>
			<li>
				<div
					class="dropdown-item rounded-2 cursor"
					:class="{ active: $route.path == '/mypage/profile' }"
					@click="userProfile()"
				>
					프로필 정보
				</div>
			</li>
			<li>
				<div
					class="dropdown-item rounded-2 cursor"
					:class="{ active: $route.path == '/mypage/score' }"
					@click="score()"
				>
					식사 매너 점수
				</div>
			</li>
			<li>
				<div class="dropdown-item rounded-2 title">밥상 정보</div>
			</li>
			<li>
				<div
					class="dropdown-item rounded-2 cursor"
					:class="{ active: $route.path == '/mypage/babsang' }"
					@click="joinBabsang()"
				>
					참여한 밥상 목록
				</div>
			</li>
			<li>
				<div
					class="dropdown-item rounded-2 cursor"
					:class="{ active: $route.path == '/mypage/favorites' }"
					@click="favoriteBabsang()"
				>
					찜한 밥상
				</div>
			</li>
			<li><hr class="dropdown-divider" /></li>
			<li>
				<strong
					class="dropdown-item rounded-2 cursor"
					:class="{
						active:
							$route.path == '/mypage/message' ||
							$route.path == '/mypage/message-view',
					}"
					@click="message()"
				>
					메시지함
				</strong>
			</li>
			<li>
				<div class="dropdown-item rounded-2 cursor" @click="kakaoLogout()">
					로그아웃
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'CompUserProfile',
	data() {
		return {
			user: [
				{
					email: 'spoon1@gmail.com',
					gender: '여성',
					nickname: '숟갈1',
					profile_image: require('@/assets/img/exprofile2.jpg'),
					age_range: '20대',
					mannerScore: 4,
					dining_spoons_description:
						'개발자의 품격 4기 2팀에서 구현 중인 혼밥 매칭 서비스 "겸상"입니다.',
				},
			],
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		kakaoLogout() {
			window.Kakao.Auth.logout(response => {
				console.log(response);
				this.$store.commit('user/getUserData', {});
				this.$store.commit('user/userCheck', false);
				localStorage.removeItem('jwt');
				alert('로그아웃 되었습니다');
			});
		},
		userProfile() {
			this.$router.push('/mypage/profile');
		},
		joinBabsang() {
			this.$router.push('/mypage/babsang');
		},
		favoriteBabsang() {
			this.$router.push('/mypage/favorites');
		},
		message() {
			this.$router.push('/mypage/message');
		},
		score() {
			this.$router.push('/mypage/score');
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
.cursor {
	cursor: pointer;
}

.font-color {
	color: white;
}
</style>
