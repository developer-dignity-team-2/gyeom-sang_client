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
								<h5>{{ messageDetail.message_description }}</h5>
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
										<h5 class="card-title">
											{{ messageDetail.restaurant_name }}
										</h5>
										<!-- 밥상 상세보기 버튼(해당 밥상으로 이동) -->
										<button
											class="btn btn-primary"
											type="button"
											@click="detail(messageDetail.dining_table_id)"
										>
											밥상 바로가기
										</button>
									</div>
								</div>
								<!-- <img
									:src="messageDetail.profile_image"
									alt="식당사진"
									class="d-block user-select-none"
									width="100%"
									height="200"
								/> -->
								<img
									:src="
										VUE_APP_DOMAIN_URL +
										'/static/images/' +
										messageDetail.dining_thumbnail
									"
									:alt="messageDetail.restaurant_name"
									style="object-fit: cover"
								/>
								<!-- 소개내용 -->
								<div class="card-body">
									<p class="card-text text-center">
										{{ messageDetail.dining_description }}
									</p>
								</div>
								<!-- 밥상 정보(일시,장소,혼성여부) -->
								<ul class="list-group list-group-flush">
									<li class="list-group-item text-muted p-2">
										식사 일시 : {{ messageDetail.dining_datetime }}
									</li>
									<li class="list-group-item text-muted p-2">
										식당 위치 : {{ messageDetail.restaurant_location }}
									</li>
									<li class="list-group-item text-muted p-2">
										밥상 성별 : {{ recruitGender() }}
									</li>
								</ul>
							</div>
						</div>
						<!-- 밥장프로필 -->
						<div class="col-xl-4 col-sm-12 mb-3">
							<UserCard
								v-if="messageDetail.host_dining_score !== undefined"
								:email="messageDetail.host_email"
								:gender="messageDetail.gender"
								:nickname="messageDetail.nickname"
								:profile_image="messageDetail.profile_image"
								:age_range="messageDetail.age_range"
								:dining_score="messageDetail.host_dining_score"
								:dining_spoons_description="messageDetail.profile_description"
							/>
						</div>
						<!-- 목록 , 삭제 버튼 -->
						<div class="d-flex justify-content-center">
							<button
								type="button"
								class="btn btn-primary me-3"
								style="width: 80px"
								@click="goMessageList()"
							>
								목록
							</button>
							<button
								type="button"
								class="btn btn-danger"
								style="width: 80px"
								@click="doDelete()"
							>
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
		VUE_APP_DOMAIN_URL() {
			return process.env.VUE_APP_DOMAIN_URL;
		},
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
		goMessageList() {
			this.$router.push('/mypage/message');
		},
		// 메시지 상세 정보 가져오기
		async getMessageDetail() {
			console.log('메시지 ID : ', this.$route.query.messageId);
			const temp = (await this.$get(`/message/${this.$route.query.messageId}`))
				.result[0];
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
		// 밥상 바로가기
		detail(id) {
			this.$router.push({
				name: 'Babsang',
				params: { babsangId: id },
			});
		},
		doDelete() {
			this.$swal({
				title: '메시지를 삭제하시겠습니까?',
				text: '삭제된 메시지는 복원되지 않습니다.',
				icon: 'warning',
				showCancelButton: true,
				iconColor: '#ffcb00',
				confirmButtonColor: '#ffcb00',
				// cancelButtonColor: '#f4f4f4',
				cancelButtonColor: '#d33',
				cancelButtonText: '취소',
				confirmButtonText: '삭제',
			}).then(async result => {
				if (result.isConfirmed) {
					const loader = this.$loading.show({ canCancel: false });

					const r = await this.$delete(
						`/message/${this.$route.query.messageId}`,
					);

					loader.hide();

					console.log(r);
					if (r.status === 200) {
						this.$swal({
							title: '메시지가 삭제되었습니다.',
							icon: 'success',
							iconColor: '#ffcb00',
							confirmButtonText: '확인',
							confirmButtonColor: '#ffcb00',
						});
						this.$router.push('/mypage/message');
					} else if (r.status === 501) {
						this.$swal({
							title: '메시지 삭제 실패!',
							text: `삭제하려는 메시지가 ${r.count}건 존재합니다.`,
							icon: 'warning',
							iconColor: '#ffcb00',
							confirmButtonText: '확인',
							confirmButtonColor: '#ffcb00',
						});
						this.$router.push('/mypage/message');
					}
				}
			});
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
