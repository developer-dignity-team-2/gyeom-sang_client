<template>
	<div class="container">
		<!-- 검색창 -->
		<div class="row row-cols-1 mt-3">
			<div
				class="col my-5 d-flex flex-column align-items-center justify-content-center"
			>
				<div class="">
					<input
						class="search-bar form-control"
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
			<SearchFilter
				@area="getAreaValue"
				@date="getDateValue"
				@gender="getGenderValue"
			></SearchFilter>
		</div>
		<!-- 밥상카드 -->
		<transition name="babsang">
			<div class="row">
				<MainCardList :babsangData="babsangData" />
				<div
					v-if="babsangData.length === 0"
					class="d-flex justify-content-center align-items-center"
				>
					일치하는 조건의 밥상이 없습니다😭
				</div>
			</div>
		</transition>
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
			filterData: '',
			babsangSearchValue: '',
			areaVal: '',
			genderVal: '',
			date: {
				start: '',
				end: '',
			},
			babsangInitData: '',
		};
	},
	watch: {},
	mounted() {
		this.getBabsang();
	},
	methods: {
		// 기간 데이터
		getDateValue(start, end) {
			const s_year = start.getFullYear();
			let s_month = start.getMonth() + 1;
			s_month = s_month >= 10 ? s_month : '0' + s_month;
			const s_day = start.getDate();
			this.date.start = `${s_year}-${s_month}-${s_day}`;

			const e_year = end.getFullYear();
			let e_month = end.getMonth() + 1;
			e_month = e_month >= 10 ? e_month : '0' + e_month;
			const e_day = end.getDate();
			this.date.end = `${e_year}-${e_month}-${e_day}`;

			this.searchFilter();
		},

		// 성별 데이터
		getGenderValue(gender) {
			this.genderVal = gender;
			console.log('선택한 성별 :', this.genderVal);

			this.searchFilter();
		},
		//지역 데이터
		getAreaValue(area) {
			if (area === '전국') {
				area = '';
			}
			this.areaVal = area;
			console.log('선택한 지역 :', this.areaVal);

			this.searchFilter();
		},
		//필터
		searchFilter() {
			let start = this.date.start;
			let end = this.date.end;
			this.filterData = this.babsangInitData;

			this.filterData = this.filterData
				.filter(item => item.restaurant_location.includes(this.areaVal))
				.filter(item => item.gender_check.includes(this.genderVal));

			this.filterData =
				start && end
					? this.filterData.filter(item => {
							const startDate = new Date(start);
							const endDate = new Date(end);
							let date = new Date(item.dining_datetime.slice(0, 10));
							return date >= startDate && date <= endDate;
					  })
					: this.filterData;

			console.log('filter Array :', this.filterData);
			this.babsangData = this.filterData;
		},

		async getBabsang(type = '') {
			this.babsangData = await this.$get(`/babsang${type}`);
			this.babsangInitData = this.babsangData.result;

			this.babsangData.result.sort(function (a, b) {
				return b.id - a.id;
			});
			console.log('모든 밥상 리스트 :', this.babsangData);
			this.babsangData = this.babsangData.result.filter(
				item => item.dining_status === 0,
			);
			console.log('모집중인 밥상', this.babsangData);
		},
		onInputBabsangSearch(event) {
			if (event.target.value === '') {
				this.getBabsang();
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
@media (max-width: 767px) {
	.search-bar {
		width: 27rem;
		padding-left: 4rem;
		line-height: 3rem;
		background: url('../assets/img/svg/search.svg') no-repeat 1.5rem 1.2rem;
		background-size: 1.3rem;
		border-radius: 3rem;
		border: 2px solid #999;
		font-size: 0.9rem;
	}
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
