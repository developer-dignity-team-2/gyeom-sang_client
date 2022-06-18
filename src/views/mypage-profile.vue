<template>
	<div class="container">
		<div class="row my-4">
			<!-- 네브바 -->
			<div class="col-xl-3 col-sm-12">
				<CompUserProfile />
			</div>
			<!-- 본문영역 -->
			<!-- <div class="col border rounded p-3"> -->
			<div
				class="col dropdown-menu position-static d-grid gap-1 rounded-3 shadow w-220px"
			>
				<div class="row d-flex text-center flex-column align-items-center">
					<div class="profile me-3" style="width: 12rem">
						<div class="img-wrap pf rounded-circle">
							<img :src="user[0].profile_image" alt="프로필" />
						</div>
						<strong> {{ user[0].nickname }} 님 </strong>
						<button type="button" class="btn btn-secondary">수정</button>
					</div>
					<div class="col-sm-4 mt-3">
						<table>
							<colgroup>
								<col width="500px" />
								<col width="700px" />
							</colgroup>
							<tbody>
								<tr>
									<td>성별</td>
									<td class="d-flex text-left">{{ user[0].gender }}</td>
								</tr>
								<tr>
									<td>식사매너</td>
									<td class="d-flex text-left">
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
									</td>
								</tr>
								<tr>
									<td>자기소개</td>
									<td></td>
								</tr>
							</tbody>
						</table>
						<div class="form-group">
							<textarea
								class="form-control"
								id="exampleTextarea"
								rows="3"
								style="height: 110px"
								v-model="user[0].dining_spoons_description"
							></textarea>
						</div>
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
	mounted() {
		this.stars = this.user[0].mannerScore;
	},
	unmounted() {},
	methods: {},
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
