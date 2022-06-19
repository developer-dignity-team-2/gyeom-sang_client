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
								src="https://cdn.pixabay.com/photo/2016/09/23/23/23/restaurant-1690696_1280.jpg"
								alt="food1"
							/>
						</div>
					</div>
					<!-- 타이틀 -->
					<div class="col my-4">
						<div class="title d-flex">
							<h3 class="me-4">연돈</h3>
							<div class="status">
								<button class="btn btn-primary me-2">모집중</button>
								<button class="btn btn-primary me-2">혼성</button>
								<button class="btn btn-primary">1/4</button>
							</div>
						</div>

						<ul>
							<li>
								<dl>
									<dt>식사 일시</dt>
									<dd>2022.06.28 13:00</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt>모집기간</dt>
									<dd>2022.06.10 ~ 2022.06.20</dd>
								</dl>
							</li>
						</ul>
					</div>
					<!-- 소개 내용 -->
					<div class="col">
						<div class="border rounded p-3" style="min-height: 20rem">
							안녕하세요 같이 제주도 연돈가실분 구해요
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
						<button class="btn btn-primary mx-2">수정</button>
						<button class="btn btn-primary mx-2">목록</button>
						<button class="btn btn-primary mx-2">삭제</button>
					</div>
					<!-- 구분선 -->
					<div class="col my-3">
						<hr style="background-color: #999" />
					</div>
					<!-- 댓글 -->
					<div class="col">댓글 부분</div>
				</div>
			</div>
			<!-- 정보 영역 -->
			<div class="col-xl-3 col-sm-12">
				<div class="row row-cols-1" style="position: sticky; top: 1rem">
					<!-- 밥장 정보 -->
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
						<div class="p-3">책임감있는 밥장이 될게요! 믿고 맡겨 주세요~!</div>
					</div>
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
</template>

<script>
export default {
	name: 'Babsang',
	components: {},
	methods: {
		goSelectPage() {
			this.$router.push({
				path: '/babsang-select',
			});
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
