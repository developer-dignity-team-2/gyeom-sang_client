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
			<!-- <li>
				<div class="dropdown-item rounded-2 title">내 정보</div>
			</li> -->
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
			<!-- <li>
				<div class="dropdown-item rounded-2 title">밥상 정보</div>
			</li> -->
			<li><hr class="dropdown-divider" style="border-color: #f4f4f4" /></li>
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
					찜한 밥상 목록
				</div>
			</li>
			<li><hr class="dropdown-divider" style="border-color: #f4f4f4" /></li>
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
			<li><hr class="dropdown-divider" style="border-color: #f4f4f4" /></li>
			<li>
				<div
					class="dropdown-item rounded-2 font-color-withdraw cursor"
					@click="unlinkApp()"
				>
					<!-- <div
					class="dropdown-item rounded-2 cursor nav-link"
					style="color: #cfcfcf"
					@click="unlinkApp()"
				> -->
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
			this.$swal({
				title: 'ㅠ_ㅠ',
				text: '정말 탈퇴하실 건가요?',
				icon: 'warning',
				showCancelButton: true,
				iconColor: '#ffcb00',
				confirmButtonColor: '#ffcb00',
				// cancelButtonColor: '#f4f4f4',
				cancelButtonColor: '#d33',
				cancelButtonText: '취소',
				confirmButtonText: '확인',
			}).then(async result => {
				if (result.isConfirmed) {
					window.Kakao.API.request({
						url: '/v1/user/unlink',
						success: () => {
							// alert('탈퇴 처리가 되었습니다.');
							this.$swal({
								title: 'ㅠ_ㅠ',
								text: '꼭 다시 만나요~',
								icon: 'success',
								iconColor: '#ffcb00',
								confirmButtonText: '확인',
								confirmButtonColor: '#ffcb00',
							});
							this.$store.commit('user/getUserData', {});
							this.$store.commit('user/userCheck', false);
							this.initialButton(); // 필터, 정렬 버튼 설정 초기화
							localStorage.removeItem('jwt');
							// 탈퇴 성공 후 메인 화면으로 가기
							this.$router.push({
								path: '/',
							});
						},
						fail: err => {
							// alert('fail: ' + JSON.stringify(err));
							this.$swal({
								title: '탈퇴 실패!',
								text: `fail: ${JSON.stringify(err)}`,
								icon: 'warning',
								iconColor: '#ffcb00',
								confirmButtonText: '확인',
								confirmButtonColor: '#ffcb00',
							});
							// 탈퇴 실패 후 메인 화면으로 가기

							this.$router.push({
								path: '/',
							});
						},
					});
				}
			});
		},
		kakaoLogout() {
			this.$swal({
				title: '로그아웃',
				text: '정말 하실 건가요?',
				icon: 'warning',
				showCancelButton: true,
				iconColor: '#ffcb00',
				confirmButtonColor: '#ffcb00',
				// cancelButtonColor: '#f4f4f4',
				cancelButtonColor: '#d33',
				cancelButtonText: '취소',
				confirmButtonText: '확인',
			}).then(async result => {
				if (result.isConfirmed) {
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
					// 로그아웃 후 메인 화면으로 가기
					this.$router.push({
						path: '/',
					});
				}
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
// 탈퇴하기 글자색
.font-color-withdraw {
	color: #cfcfcf;
	&:hover {
		color: #575757;
	}
}
</style>
