<template>
	<div class="container d-grid gap-3 p-0">
		<ul
			class="dropdown-menu position-static d-grid gap-0 p-3 rounded-3 mx-0 shadow w-220px"
		>
			<li>
				<strong> {{ user.profile.nickname }} 님 </strong>
			</li>
			<li>
				{{ user.email }}
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
				<slot-modal></slot-modal>
				<div class="dropdown-item rounded-2 cursor" @click="kakaoLogout()">
					로그아웃
				</div>
			</li>
			<li><hr class="dropdown-divider" /></li>
			<li>
				<div class="dropdown-item rounded-2 cursor" @click="unlinkApp()">
					탈퇴하기
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import SlotModal from '@/components/common/SlotModal';

export default {
	name: 'CompUserProfile',
	data() {
		return {
			user: [],
		};
	},
	components: {
		SlotModal,
	},
	created() {
		this.user = this.$store.state.user.userData;
	},
	mounted() {},
	unmounted() {},
	methods: {
		unlinkApp() {
			window.Kakao.API.request({
				url: '/v1/user/unlink',
				success: function () {
					alert('탈퇴처리가 퇴었습니다');
				},
				fail: function (err) {
					alert('fail: ' + JSON.stringify(err));
				},
			});
			this.$store.commit('user/getUserData', {});
			this.$store.commit('user/userCheck', false);
			this.initialButton(); // 필터, 정렬 버튼 설정 초기화
			localStorage.removeItem('jwt');
		},
		kakaoLogout() {
			window.Kakao.Auth.logout(response => {
				console.log(response);
				this.$store.commit('user/getUserData', {});
				this.$store.commit('user/userCheck', false);
				this.initialButton(); // 필터, 정렬 버튼 설정 초기화
				localStorage.removeItem('jwt');
				this.$swal({
					title: '로그아웃되었습니다.',
					// text: `{kakao_account.profile.nickname}님 환영합니다.`,
					icon: 'info',
					iconColor: '#ffcb00',
					confirmButtonText: '확인',
					confirmButtonColor: '#ffcb00',
				});
			});
		},
		userProfile() {
			this.initialButton(); // 필터, 정렬 버튼 설정 초기화
			this.$router.push('/mypage/profile');
		},
		joinBabsang() {
			this.initialButton(); // 필터, 정렬 버튼 설정 초기화
			this.$router.push('/mypage/babsang');
		},
		favoriteBabsang() {
			this.initialButton(); // 필터, 정렬 버튼 설정 초기화
			this.$router.push('/mypage/favorites');
		},
		message() {
			this.initialButton(); // 필터, 정렬 버튼 설정 초기화
			this.$router.push('/mypage/message');
		},
		score() {
			this.initialButton(); // 필터, 정렬 버튼 설정 초기화
			this.$router.push('/mypage/score');
		},
		// 필터, 정렬 버튼 설정 초기화
		initialButton() {
			this.$store.commit('button/buttonSign', 'open');
			this.$store.commit('button/buttonSignYO', 'young');
			this.$store.commit('button/checkedSign', false);
			this.$store.commit('button/showMessage', 'R');
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
