<template>
	<div class="container">
		<!-- 검색창 -->
		<div class="row row-cols-1 mt-3">
			<div
				class="col my-5 d-flex flex-column align-items-center justify-content-center"
			>
				<div class="">
					<input
						class="search-bar form-control me-3"
						type="search"
						placeholder="원하는 식당 이름을 검색해보세요!"
						v-model.trim="babsangSearchValue"
						@input="onInputBabsangSearch($event)"
						@keyup.enter="onKeyupBabsangSearch"
					/>
					<p class="m-2 ps-4" style="color: #999; font-size: 0.9rem">
						원하는 밥상이 없다면 직접 차려보세요.
						<router-link
							to="/babsang-create"
							class="fw-bold"
							style="
								color: orange;
								text-decoration: none;
								border-bottom: 1px solid orange;
							"
						>
							Try it out!
						</router-link>
					</p>
					<!-- <button class="btn btn-secondary" type="submit">Search</button> -->
				</div>
			</div>
		</div>
		<!-- 검색 필터 -->
		<div class="row">
			<SearchFilter @change="getAreaValue"></SearchFilter>
		</div>
		<!-- 밥상카드 -->
		<div class="row">
			<MainCardList :babsangData="babsangData" />
		</div>
	</div>
</template>

<script>
import MainCardList from '@/components/main/MainCardList';
import SearchFilter from '@/components/main/SearchFilter';
export default {
	name: 'Main',
	components: {
		MainCardList,
		SearchFilter,
	},
	data() {
		return {
			babsangData: [],
			allData: [],
			filterData: [],
			babsangSearchValue: '',
		};
	},
	computed: {},
	created() {},
	watch: {
		babsangData(newVal) {
			this.babsangData = newVal;
		},
	},
	mounted() {
		this.getBabsang();
	},
	methods: {
		getAreaValue(area) {
			this.babsangData = this.allData;
			this.filterData = this.babsangData.filter(item =>
				item.restaurant_location.includes(area),
			);
			this.babsangData = this.filterData;
		},
		async getBabsang(type = '') {
			this.babsangData = await this.$get(`/babsang${type}`);
			this.babsangData.result.sort(function (a, b) {
				return b.id - a.id;
			});
			this.babsangData = this.babsangData.result;
			this.allData = this.babsangData;
			console.log('밥상 데이터 리스트', this.babsangData);
		},
		onInputBabsangSearch(event) {
			if (event.target.value === '') {
				this.getBabsang();
			} else {
				this.getBabsang(`?nameSearch=${this.babsangSearchValue}`);
			}
		},
		onKeyupBabsangSearch() {
			this.getBabsang(`?nameSearch=${this.babsangSearchValue}`);
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
