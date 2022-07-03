<template>
	<div class="container">
		<div class="row my-4">
			<!-- 본문영역 -->
			<div class="col-xl-9 col-sm-12">
				<div class="row row-cols-1">
					<!-- 썸네일 -->
					<div class="col">
						<div class="img-wrap rounded">
							<img
								:src="
									'https://nicespoons.com/static/images/' +
									babsangDetailData.dining_thumbnail
								"
								:alt="babsangDetailData.restaurant_name"
								style="object-fit: cover"
							/>
						</div>
					</div>
					<!-- 타이틀 -->
					<div class="col my-4">
						<div class="title d-flex">
							<h3 class="me-4">{{ babsangDetailData.restaurant_name }}</h3>
							<div class="status">
								<button class="btn btn-primary me-2">
									{{ currentStatus() }}
								</button>
								<button class="btn btn-secondary me-2">
									{{ recruitGender() }}
								</button>
								<button class="btn btn-secondary">
									1/{{ babsangDetailData.dining_count }}
								</button>
							</div>
						</div>

						<ul>
							<li>
								<dl>
									<dt>식사 일시</dt>
									<dd>
										{{ String(babsangDetailData.dining_datetime).slice(0, 10) }}
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>모집기간</dt>
									<dd>
										{{
											String(babsangDetailData.recruit_start_date).slice(0, 10)
										}}
										~
										{{
											String(babsangDetailData.recruit_end_date).slice(0, 10)
										}}
									</dd>
								</dl>
							</li>
						</ul>
					</div>
					<!-- 소개 내용 -->
					<div class="col">
						<div class="border rounded p-3" style="min-height: 20rem">
							{{ babsangDetailData.dining_description }}
						</div>
					</div>
					<!-- 구분선 -->
					<div class="col my-3 px-4">
						<hr style="background-color: #999" />
					</div>
					<!-- 지도 -->
					<div class="col">
						<ul>
							<li>
								<dl>
									<dt>식당 위치</dt>
									<dd>제주특별자치도 서귀포시 색달동 일주서로 968-10</dd>
								</dl>
							</li>
						</ul>
						<div class="img-wrap map-wrap rounded">
							<img src="@/assets/img/exampleMap.jpg" alt="food1" />
						</div>
					</div>
					<div class="col d-flex justify-content-center my-5">
						<button class="btn btn-secondary mx-2">수정</button>
						<button class="btn btn-secondary mx-2" @click="$goMain">
							목록
						</button>
						<button class="btn btn-secondary mx-2" @click="deleteBabsang">
							삭제
						</button>
					</div>
					<h5>댓글</h5>
					<!-- 구분선 -->
					<div class="col">
						<hr style="background-color: #999" />
					</div>
					<!-- 댓글 -->
					<div class="col my-3">
						<CommentList />
						<CommentCreate />
					</div>
				</div>
			</div>
			<!-- 정보 영역 -->
			<div class="col-xl-3 col-sm-12">
				<div class="row row-cols-1" style="position: sticky; top: 1rem">
					<!-- 밥장 정보 -->
					<div class="row">
						<UserCard
							:email="leaderInfo.email"
							:gender="leaderInfo.gender"
							:nickname="leaderInfo.nickname"
							:profile_image="leaderInfo.profile_image"
							:age_range="leaderInfo.age_range"
							:dining_score="leaderInfo.dining_score"
							:dining_spoons_description="leaderInfo.profile_description"
						/>

						<!-- 숟갈 선택하기 -->
						<div class="col border rounded mt-3 p-3">
							<p>지금까지 신청한 숟갈들</p>
							<p style="font-size: 1.5rem">
								<font-awesome-icon icon="fa-solid fa-spoon" />
								<span class="ps-3">7명 !</span>
							</p>
							<button class="btn btn-primary" @click="goSelectPage">
								숟갈 선택
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import UserCard from '@/components/UserCard';
import CommentCreate from '@/components/CommentCreate';
import CommentList from '@/components/CommentList';
export default {
	name: 'Babsang',
	components: { UserCard, CommentCreate, CommentList },
	data() {
		return {
			babsangDetailData: [],
			babjang: [
				{
					dining_table_id: 1,
					email: 'babjang1@gmail.com',
					gender: '남자',
					nickname: '밥장9',
					profile_image: require('../assets/img/users/m9.png'),
					age_range: '20대',
					dining_score: 4.7,
					dining_spoons_description:
						'책임감있는 밥장이 될게요! 믿고 맡겨 주세요~!',
				},
			],
			leaderInfo: '',
		};
	},
	computed: {},
	created() {},
	mounted() {
		// window.scrollTo(0, 0);
		console.log('밥상 ID : ' + this.$route.params.babsangId);
		this.getBabsangDetailData();
		this.getLeaderInfo();
	},

	methods: {
		async getLeaderInfo() {
			this.leaderInfo = await this.$get('/user');
			console.log('----------leader Info----------');
			console.log(this.leaderInfo.result);
			this.leaderInfo = this.leaderInfo.result;
		},
		async deleteBabsang() {
			const confirmResult = confirm('밥상을 삭제 하시겠습니까?');
			if (confirmResult) {
				const babsangId = this.$route.params.babsangId;
				await this.$delete('/babsang/' + babsangId);
				this.$goMain();
			}
		},
		goSelectPage() {
			this.$router.push({
				path: '/babsang-select',
			});
		},
		async getBabsangDetailData() {
			this.babsangDetailData = await this.$get(
				'/babsang/' + this.$route.params.babsangId,
			);
			this.babsangDetailData = this.babsangDetailData.result[0];
			console.log(this.babsangDetailData);
		},
		currentStatus() {
			let currentStatus = this.babsangDetailData.dining_status;
			let status;
			if (currentStatus === 0) {
				status = '모집중';
			} else if (currentStatus === 1) {
				status = '모집 마감';
			} else {
				status = '모집 확정';
			}
			return status;
		},
		recruitGender() {
			let gender = this.babsangDetailData.gender_check;
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
</script>
<style scoped lang="scss">
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
</style>
