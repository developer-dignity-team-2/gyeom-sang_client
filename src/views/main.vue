<template>
	<div class="container">
		<!-- 검색창 -->
		<div class="row row-cols-1 mt-3">
			<div
				class="col my-5 d-flex flex-column align-items-center justify-content-center"
			>
				<form class="">
					<input
						class="search-bar form-control me-3"
						type="text"
						placeholder="원하는 식당 이름을 검색해보세요!"
					/>
					<p class="m-2 ps-4" style="color: #999; font-size: 0.9rem">
						원하는 밥상이 없다면 직접 차려보세요.
						<router-link
							to="/babsang-create"
							class="fw-bold"
							style="color: orange"
						>
							Try!
						</router-link>
					</p>
					<!-- <button class="btn btn-secondary" type="submit">Search</button> -->
				</form>
			</div>
		</div>
		<div class="row">
			<div class="my-3">
				<ul class="nav nav-pills">
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							data-bs-toggle="dropdown"
							href="#"
							role="button"
							aria-haspopup="true"
							aria-expanded="false"
							>지역</a
						>
						<div class="dropdown-menu" style="">
							<a class="dropdown-item" href="#">서울</a>
							<a class="dropdown-item" href="#">대전</a>
							<a class="dropdown-item" href="#">대구</a>
							<!-- <div class="dropdown-divider"></div> -->
							<a class="dropdown-item" href="#">부산</a>
						</div>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">기간</a>
					</li>

					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							data-bs-toggle="dropdown"
							href="#"
							role="button"
							aria-haspopup="true"
							aria-expanded="false"
							>성별</a
						>
						<div class="dropdown-menu" style="">
							<a class="dropdown-item" href="#">혼성</a>
							<a class="dropdown-item" href="#">남성</a>
							<a class="dropdown-item" href="#">여성</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 밥상카드 -->
		<div class="row">
			<MainCardList :babsangData="babsangData.result" />
		</div>
	</div>
</template>

<script>
import MainCardList from '@/components/main/MainCardList';

export default {
	name: 'Main',
	components: {
		MainCardList,
	},
	data() {
		return {
			babsangData: [],
		};
	},
	computed: {},
	created() {},
	mounted() {
		this.getBabsangData();
	},
	methods: {
		async getBabsangData() {
			this.babsangData = await this.$get('/babsang');
			this.babsangData.result.sort(function (a, b) {
				return b.id - a.id;
			});
			console.log(this.babsangData.result);
		},
	},
};
</script>
<style scoped lang="scss">
.search-bar {
	width: 40rem;
	padding-left: 4rem;
	line-height: 3rem;
	background: url('../assets/img/svg/search.svg') no-repeat 1.5rem 1.2rem;
	background-size: 1.3rem;
	border-radius: 3rem;
	border: 2px solid #999;
	font-size: 0.9rem;
}
.nav {
	.nav-item {
		display: flex;
		justify-content: center;
		width: 5rem;
		border: 1px solid #999;
		border-radius: 2rem;
		margin-right: 0.5rem;
		a {
			color: #999;
		}
	}
}
</style>
