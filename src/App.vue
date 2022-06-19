<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
		<div class="container-fluid container">
			<!-- <a class="navbar-brand" href="#">겸상</a> -->
			<router-link to="/" class="navbar-brand fw-bold">겸상</router-link>
			<ul class="nav-r d-flex justify-content-center align-items-center me-2">
				<!-- <li class="me-4">
					<a href="">
						<i
							class="bi bi-bell-fill"
							style="color: #5a5a5a; font-size: 1.3rem"
						></i>
						<i class="bi bi-bell" style="color: #5a5a5a; font-size: 1.3rem"></i>
					</a>
				</li> -->
				<li class="d-flex flex-column align-items-center">
					<router-link to="/mypage/profile">
						<div class="pf-wrap" style="width: 2.5rem">
							<div
								class="img-wrap rounded-circle"
								style="border: 1px solid #d9d9d9"
							>
								<img src="@/assets/exProfile.jpg" alt="프로필" />
							</div>
						</div>
					</router-link>
					<p class="m-0 pt-0" style="font-size: 0.6rem">김민수</p>
				</li>
			</ul>
			<!-- <button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarColor03"
				aria-controls="navbarColor03"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button> -->
			<!-- <div class="collapse navbar-collapse" id="navbarColor03">
				<ul class="navbar-nav me-auto">
					<li class="nav-item">
						<router-link to="/babsang-create" class="nav-link"
							>2 밥상생성
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/babsang" class="nav-link">3 밥상 </router-link>
					</li>
					<li class="nav-item">
						<router-link to="/babsang-select" class="nav-link"
							>4 숟갈선택
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/mypage/profile" class="nav-link"
							>5 프로필
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/mypage/babsang" class="nav-link"
							>6 참여 밥상
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/mypage/favorites" class="nav-link"
							>7 찜한 밥상
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/mypage/message" class="nav-link"
							>8 메세지
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/mypage/message-view" class="nav-link"
							>9 메세지 상세
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/mypage/score" class="nav-link"
							>10 매너점수
						</router-link>
					</li>
				</ul>
			</div> -->
		</div>
	</nav>
	<router-view />
</template>

<style scoped lang="scss">
.navbar {
	padding-top: 0;
	padding-bottom: 0;
	height: 4rem;
}
.img-wrap {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 100%;
	overflow: hidden;
}
.img-wrap img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
