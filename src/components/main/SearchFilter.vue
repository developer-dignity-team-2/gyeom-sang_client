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
			<li class="nav-item" style="margin-bottom: 0.4rem">
				<div class="nav-link" href="#">
					기간 :
					<Datepicker
						v-model="date"
						range
						:enableTimePicker="false"
						:minDate="new Date()"
						style="display: inline-block"
						placeholder="날짜 선택하기"
					></Datepicker>
				</div>
			</li>
			<!--			<li class="nav-item">-->
			<!--				<a class="nav-link" data-bs-toggle="dropdown" href="#" role="button"-->
			<!--					>필터 초기화</a-->
			<!--				>-->
			<!--			</li>-->
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
			date: null,
			startDate: '',
			endDate: '',
			format: '',
		};
	},
	watch: {
		date() {
			this.startDate = this.date[0];
			this.endDate = this.date[1];
			this.$emit('date', this.startDate, this.endDate);
		},
	},
	methods: {
		// getformat(date) {
		// 	console.log(date);
		// },
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
.nav {
	align-items: center;
	.nav-item {
		.nav-link {
			color: #888888;
		}
	}
}
</style>
