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
							<div class="form-group mt-4">
								<label class="form-label">
									{{ $ageRangeForm(user.age_range) }}
									{{ user.gender === 'M' ? '남성' : '여성' }}
								</label>
							</div>
							<div class="form-group">
								<label for="exampleTextarea" class="form-label mt-4"
									>식사매너</label
								>
							</div>
							<!-- 식사매너 별점 -->
							<div>
								<stars-rating
									v-if="user.dining_score !== undefined"
									:config="config"
								/>
							</div>
							<div class="form-group">
								<label for="exampleTextarea" class="form-label mt-4"
									>자기소개</label
								>
								<textarea
									class="form-control"
									style="resize: none"
									id="exampleTextarea"
									rows="3"
									disabled
									ref="modifyDescription"
									v-model="user.profile_description"
								></textarea>
							</div>
							<div class="d-flex justify-content-center mt-4">
								<button
									type="button"
									class="btn btn-primary mx-3"
									v-show="!userInfo"
									@click="doModify()"
								>
									수정
								</button>
								<div v-show="userInfo">
									<button
										type="button"
										class="btn btn-primary mx-3"
										@click="doModify()"
									>
										저장
									</button>
									<button
										type="submit"
										class="btn btn-secondary"
										@click="cancleModify()"
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
import CompUserProfile from '@/components/profile/CompUserProfile';
import starsRating from '@/components/common/RatingStars';
export default {
	name: 'MypageProfile',
	components: { CompUserProfile, starsRating },
	data() {
		return {
			userInfo: false,
			user: {},
			tempProfileDescription: '',
		};
	},
	computed: {
		config: function () {
			let temp = {
				rating: this.user.dining_score,
				// rating: this.user.dining_score,
				isIndicatorActive: false,
				style: {
					fullStarColor: '#ffcb00',
					emptyStarColor: '#737373',
					starWidth: 50,
					starHeight: 50,
				},
			};
			return temp;
		},
	},
	setup() {},
	created() {
		this.getProfileData();
	},
	mounted() {},
	unmounted() {},
	methods: {
		// 사용자 정보 가져오기
		async getProfileData() {
			const user = await this.$get('/user');
			this.user = user.result[0];
			this.config.rating = this.user.dining_score;
		},
		async doModify() {
			this.tempProfileDescription = this.user.profile_description;
			if (this.userInfo === true) {
				await this.$put('/user', {
					param: {
						profile_description: this.user.profile_description,
					},
				});
				this.$swal({
					title: `${this.user.nickname}님의`,
					text: '사용자 정보가 수정되었습니다.',
					icon: 'success',
					iconColor: '#ffcb00',
					confirmButtonText: '확인',
					confirmButtonColor: '#ffcb00',
				});
				this.userInfo = false;
				this.$refs.modifyDescription.disabled = true;
			} else {
				this.userInfo = true;
				this.$refs.modifyDescription.disabled = false;
				this.$refs.modifyDescription.focus();
			}
		},
		cancleModify() {
			this.user.profile_description = this.tempProfileDescription;
			this.userInfo = false;
			this.$refs.modifyDescription.disabled = true;
		},
		joinBabsang() {
			this.$router.push('/mypage/profile');
		},
	},
};
</script>
<style scoped lang="scss">
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
/* 성별 */
label {
	font-size: 1.2rem;
}
</style>
