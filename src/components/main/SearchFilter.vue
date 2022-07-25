<template>
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
					>지역 : {{ areaValue }}</a
				>
				<div class="dropdown-menu" style="" @click="selectArea($event)">
					<div class="dropdown-item">전국</div>
					<div class="dropdown-item">서울</div>
					<div class="dropdown-item">부산</div>
					<div class="dropdown-item">대구</div>
					<div class="dropdown-item">인천</div>
					<div class="dropdown-item">광주</div>
					<div class="dropdown-item">대전</div>
					<div class="dropdown-item">울산</div>
					<div class="dropdown-item">세종</div>
					<div class="dropdown-item">경기</div>
					<div class="dropdown-item">강원</div>
					<div class="dropdown-item">충북</div>
					<div class="dropdown-item">충남</div>
					<div class="dropdown-item">전북</div>
					<div class="dropdown-item">전남</div>
					<div class="dropdown-item">경북</div>
					<div class="dropdown-item">경남</div>
					<div class="dropdown-item">제주</div>
				</div>
			</li>

			<li class="nav-item dropdown">
				<a
					class="nav-link dropdown-toggle"
					data-bs-toggle="dropdown"
					href="#"
					role="button"
					aria-haspopup="true"
					aria-expanded="false"
					>성별 : {{ gender }}</a
				>
				<div class="dropdown-menu" @click="selectGender($event)">
					<div class="dropdown-item">혼성</div>
					<div class="dropdown-item">남성</div>
					<div class="dropdown-item">여성</div>
				</div>
			</li>
			<li class="nav-item me-2">
				<div class="nav-link">
					<span>기간 : </span>
					<Datepicker
						input-class-name="range-pick"
						v-model="date"
						range
						:enableTimePicker="false"
						:minDate="new Date()"
						style="display: inline-block; vertical-align: middle"
						placeholder="날짜 선택하기"
						:clearable="false"
					></Datepicker>
				</div>
			</li>
			<li>
				<button
					class="btn btn-secondary reset"
					@click="reset"
					style="line-height: 1.5rem"
				>
					<i
						class="bi bi-arrow-clockwise"
						style="
							line-height: 1em;
							vertical-align: text-bottom;
							margin-right: 4px;
						"
					></i>
					<span>필터 초기화</span>
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
export default {
	name: 'SearchFilter',
	components: { Datepicker },
	data() {
		return {
			areaValue: '전국',
			genderValue: '혼성',
			gender: '선택',
			date: [],
			startDate: '',
			endDate: '',
			format: '',
		};
	},
	watch: {
		date() {
			if (this.date[1] === null) {
				this.$swal({
					title: `마지막 날짜를 선택해 주세요.`,
					icon: 'warning',
					iconColor: '#ffcb00',
					confirmButtonColor: '#ffcb00',
					cancelButtonColor: '#d33',
					confirmButtonText: '확인',
				});
				this.date = [];
				this.startDate = '';
				this.endDate = '';
				this.$emit('date', this.startDate, this.endDate);
				this.$el.querySelector('.range-pick').placeholder = '날짜 선택하기';
			} else {
				this.startDate = this.date[0];
				this.endDate = this.date[1];
				this.$emit('date', this.startDate, this.endDate);
			}
		},
	},
	methods: {
		reset() {
			this.areaValue = '전국';
			this.gender = '선택';
			this.date = [];
			this.$emit('reset');
		},
		selectGender(e) {
			const value = e.target.innerText;
			this.gender = value;
			if (value === '혼성') {
				this.genderValue = 'ALL';
			} else if (value === '남성') {
				this.genderValue = 'M';
			} else {
				this.genderValue = 'W';
			}
			this.$emit('gender', this.genderValue);
		},
		selectArea(e) {
			this.areaValue = e.target.innerText;
			this.$emit('area', this.areaValue);
		},
	},
};
</script>
<style scoped lang="scss">
::v-global(.dp__theme_light) {
	--dp-background-color: #fff;
	--dp-text-color: #212121;
	--dp-hover-color: #f3f3f3;
	--dp-hover-text-color: #212121;
	--dp-hover-icon-color: #959595;
	--dp-primary-color: #ffcb00;
	--dp-primary-disabled-color: #6bacea;
	--dp-primary-text-color: #f8f5f5;
	--dp-secondary-color: #c0c4cc;
	--dp-border-color: #ddd;
	--dp-menu-border-color: #ddd;
	--dp-border-color-hover: #aaaeb7;
	--dp-disabled-color: #f6f6f6;
	--dp-scroll-bar-background: #f3f3f3;
	--dp-scroll-bar-color: #959595;
	--dp-success-color: #ffcb00;
	--dp-success-color-disabled: #a3d9b1;
	--dp-icon-color: #959595;
	--dp-danger-color: #ff6f60;
	--dp-marker-color: #ff6f60;
	--dp-tooltip-color: #fafafa;
	--dp-disabled-color-text: #8e8e8e;
}
.nav {
	align-items: center;
	.nav-item {
		.nav-link {
			color: #888888;
		}
	}
}
button {
	&.reset {
		background: #fff;
		border: 1px solid #ddd;
	}
}
.range-pick {
	margin-top: 1rem;
}
</style>
