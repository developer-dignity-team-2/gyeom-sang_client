<template>
	<div class="container">
		<div class="row my-4">
			<div class="col-md-3 col-sm-12">
				<CompUserProfile />
			</div>
			<!-- 메세지 내용 -->
			<div class="col-md-9 col-sm-12">
				<h3>메세지 내용</h3>
				<!-- 밥상메세지 -->
				<div class="card border-primary mb-3" style="max-width: 80rem">
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
					<div class="col-8 col-sm-8">
						<div class="card mb-3">
							<div class="card-body">
								<div class="d-flex justify-content-between">
									<h5 class="card-title">밥상제목</h5>
									<!-- 밥상상세보기(해당 밥상으로 이동) -->
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
									안녕하세요 같이 제주도 연돈가실분 구해요
								</p>
							</div>
							<!-- 밥상 정보(일시,장소,혼성여부) -->
							<ul class="list-group list-group-flush">
								<li class="list-group-item text-muted">식사 일시</li>
								<li class="list-group-item text-muted">식당 위치</li>
								<li class="list-group-item text-muted">혼성</li>
							</ul>
						</div>
					</div>
					<!-- 밥장프로필 -->
					<div class="col-4 col-sm-4">
						<div class="col border rounded p-3">
							<div class="d-flex align-items-center">
								<div class="profile me-3" style="width: 6rem">
									<div class="img-wrap pf rounded-circle">
										<img src="@/assets/img/exProfile.jpg" alt="프로필" />
									</div>
								</div>
								<ul>
									<li class="mb-1"><strong>밥장</strong></li>
									<li class="mb-1">김민수</li>
									<li>
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
									</li>
								</ul>
							</div>
							<div class="p-3">
								책임감있는 밥장이 될게요! 믿고 맡겨 주세요~!
							</div>
						</div>
					</div>
				</div>
				<!-- 목록 , 삭제( 불필요할 것같아서 일단 주석처리 )버튼 -->
				<div id="wrapper">
					<button
						type="button"
						class="btn btn-outline-primary"
						@click="message()"
					>
						목록
					</button>
					<!-- <button type="button" class="btn btn-outline-primary">삭제</button> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CompUserProfile from '@/components/comp-user-profile';
export default {
	name: 'MypageMessageView',
	components: { CompUserProfile },
	methods: {
		message() {
			this.$router.push('/mypage/message');
		},
	},
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
