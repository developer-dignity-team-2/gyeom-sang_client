<template>
	<div>
		<p
			v-if="user.email === undefined"
			@click="kakaoLogin()"
			style="display: inline; cursor: pointer; vertical-align: middle"
		>
			로그인
		</p>
		<slot-modal></slot-modal>
	</div>
</template>

<script>
import axios from 'axios';
import SlotModal from '@/components/common/SlotModal';

export default {
	components: { SlotModal },
	computed: {
		user() {
			return this.$store.state.user.userData;
		},
	},
	data() {
		return {
			sampleData: '',
		};
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
					this.$swal({
						title: '로그인 성공!',
						text: `${kakao_account.profile.nickname}님 환영합니다.`,
						icon: 'success',
						iconColor: '#ffcb00',
						confirmButtonText: '확인',
						confirmButtonColor: '#ffcb00',
					});
					this.$router.go();
					this.$router.push({
						path: '/',
					});
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
			// res.data가 빈객체{}로 출력
			// res.data.jwt는 undefined로 출력
			console.log('---------------res.data---------------');
			console.log(res.data);
			localStorage.setItem('jwt', res.data.jwt);
			console.log(res.data.jwt);

			// vuex에 해당 유저정보를 저장
			this.$store.commit('user/getUserData', kakao_account);
			this.$store.commit('user/userCheck', true);
			console.log('----------login store-----------');
			console.log(this.$store.state.user.userData);
		},
	},
};
</script>
