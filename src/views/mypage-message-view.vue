<template>
	<div class="container mb-5">
		<div class="row my-4">
			<div class="col-md-3 col-sm-12">
				<CompUserProfile />
			</div>
			<!-- 메세지 내용 -->
			<div class="col-md-9 col-sm-12">
				<div class="col border rounded p-3">
					<h3>메세지 내용</h3>
					<!-- 밥상메세지 -->
					<div class="card border mb-3" style="max-width: 80rem">
						<div class="card-body">
							<div class="card-text" style="height: 8rem">
								<h5>밥상이 차려졌습니다.</h5>
								<h6>해당 밥상의 url로 들어와주세요!</h6>
								<h6>url</h6>
							</div>
						</div>
					</div>
					<!-- 구분선 -->
					<div class="col my-3">
						<hr style="background-color: #999" />
					</div>
					<div class="row">
						<!-- 밥상 -->
						<div class="col-xl-8 col-sm-12">
							<div class="card mb-3">
								<div class="card-body">
									<div class="d-flex justify-content-between">
										<h5 class="card-title">밥상제목</h5>
										<!-- 밥상 상세보기 버튼(해당 밥상으로 이동) -->
										<button class="btn btn-primary" type="button">
											상세보기
										</button>
									</div>
								</div>
								<img
									src="https://cdn.pixabay.com/photo/2016/09/23/23/23/restaurant-1690696_1280.jpg"
									alt="food1"
									class="d-block user-select-none"
									width="100%"
									height="200"
								/>
								<!-- 소개내용 -->
								<div class="card-body">
									<p class="card-text">
										{{ messageDetail.dining_description }}
									</p>
								</div>
								<!-- 밥상 정보(일시,장소,혼성여부) -->
								<ul class="list-group list-group-flush">
									<li class="list-group-item text-muted">
										{{ messageDetail.dining_datetime }}
									</li>
									<li class="list-group-item text-muted">
										{{ messageDetail.restaurant_location }}
									</li>
									<li class="list-group-item text-muted">
										{{ recruitGender() }}
									</li>
								</ul>
							</div>
						</div>
						<!-- 밥장프로필 -->
						<div class="col-xl-4 col-sm-12 mb-3">
							<UserCard
								:email="messageDetail.host_email"
								:gender="messageDetail.gender"
								:nickname="messageDetail.nickname"
								:profile_image="messageDetail.profile_image"
								:age_range="messageDetail.age_range"
								:dining_score="messageDetail.dining_score"
								:dining_spoons_description="messageDetail.profile_description"
							/>
						</div>
						<!-- 목록 , 삭제 버튼 -->
						<div class="d-flex justify-content-center">
							<button
								type="button"
								class="btn btn-primary me-3"
								style="width: 80px"
								@click="message()"
							>
								목록
							</button>
							<button type="button" class="btn btn-danger" style="width: 80px">
								<i class="bi bi-trash3-fill"></i>
								삭제
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import UserCard from '@/components/profile/UserCard';
import CompUserProfile from '@/components/profile/CompUserProfile';
export default {
	name: 'MypageMessageView',
	components: { CompUserProfile, UserCard },
	data() {
		return {
			babsangDetailData: [],
			messageDetail: [],
		};
	},
	computed: {
		// 밥장/숟갈/게스트 분기처리
		isLeader() {
			// 유저 정보가 없을 때 false
			if (this.$store.state.user.userData === undefined) {
				return false;
			}
			// 현재 유저 정보와 밥상 이메일정보가 일치하면 true
			if (
				this.$store.state.user.userData.email ===
				this.babsangDetailData.host_email
			) {
				return true;
			} else {
				return false;
			}
		},
	},
	created() {
		this.getMessageDetail();
	},
	mounted() {},
	methods: {
		message() {
			this.$router.push('/mypage/message');
		},
		// 메시지 상세 정보 가져오기
		async getMessageDetail() {
			console.log('메시지 ID : ', this.$route.query.messageId);
			const temp = (
				await this.$get(
					`https://nicespoons.com/api/v1/message/${this.$route.query.messageId}`,
				)
			).result[0];
			console.log('temp : ', temp);
			this.messageDetail = temp;
		},
		recruitGender() {
			let gender = this.messageDetail.gender_check;
			let genderStatus;
			if (gender === 'ALL') {
				genderStatus = '혼성';
			} else if (gender === 'F') {
				genderStatus = '여성';
			} else {
				genderStatus = '남성';
			}
			return genderStatus;
		},
	},
};
//
</script>
<style scoped lang="scss">
.btn-primary {
	color: #575757;
	background-color: #ffcb00;
	border-color: #ffcb00;
}
.btn-outline-primary {
	color: #575757;
	border-color: #ffcb00;
	&:hover {
		background-color: #ffcb00;
	}
}
.img-wrap {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.26%;
	overflow: hidden;
	&.map-wrap {
		padding-bottom: 40%;
	}
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
ul,
dl {
	padding: 0;
	margin: 0;
	list-style: none;
}
li {
	display: block;
}
dl {
	display: flex;
}
dt {
	margin-right: 1rem;
}
#wrapper {
	width: 300px;
	margin: auto;
	/* display: flex; */
	/* justify-content: center; */
}
</style>
