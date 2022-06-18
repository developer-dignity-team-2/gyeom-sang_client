<template>
	<div class="container d-grid gap-3">
		<div class="card" style="width: 15rem">
			<div class="card-body">
				<h5 class="card-title">{{ user[0].nickname }} 님</h5>
				<p class="card-text">{{ user[0].email }}</p>
			</div>
		</div>
		<div class="card" style="width: 15rem">
			<div class="card-body">
				<strong> 내 정보 </strong>
				<ul class="list-unstyled small" style="line-height: 160%">
					<li>
						<div class="cursor" @click="userProfile()">프로필 정보</div>
					</li>
					<li>
						<div class="cursor" @click="score()">식사 매너 점수</div>
					</li>
				</ul>
				<strong> 밥상 정보 </strong>
				<ul class="list-unstyled small" style="line-height: 160%">
					<li>
						<div class="cursor" @click="joinBabsang()">참여한 밥상 목록</div>
					</li>
					<li>
						<div class="cursor" @click="favoriteBabsang()">찜한 밥상</div>
					</li>
				</ul>
				<strong class="cursor" @click="message()"> 메시지함 </strong>
			</div>
		</div>
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
					gender: '남자',
					nickname: '개발자의 품격',
					profile_image: require('../assets/img/profile.png'),
					age_range: '40대',
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

<style scoped>
.favorite {
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
}
.cursor {
	cursor: pointer;
}
</style>
