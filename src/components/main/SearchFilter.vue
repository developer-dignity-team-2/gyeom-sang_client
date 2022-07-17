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
					>지역</a
				>
				<div class="dropdown-menu" style="" @click="selectArea($event)">
					<a class="dropdown-item" href="#">서울</a>
					<a class="dropdown-item" href="#">부산</a>
					<a class="dropdown-item" href="#">대구</a>
					<a class="dropdown-item" href="#">인천</a>
					<a class="dropdown-item" href="#">광주</a>
					<a class="dropdown-item" href="#">대전</a>
					<a class="dropdown-item" href="#">울산</a>
					<a class="dropdown-item" href="#">세종</a>
					<a class="dropdown-item" href="#">경기</a>
					<a class="dropdown-item" href="#">강원</a>
					<a class="dropdown-item" href="#">충북</a>
					<a class="dropdown-item" href="#">충남</a>
					<a class="dropdown-item" href="#">전북</a>
					<a class="dropdown-item" href="#">전남</a>
					<a class="dropdown-item" href="#">경북</a>
					<a class="dropdown-item" href="#">경남</a>
					<a class="dropdown-item" href="#">제주</a>
					<!-- <div class="dropdown-divider"></div> -->
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
</template>

<script>
export default {
	name: 'SearchFilter',
	data() {
		return {
			areaValue: '',
		};
	},
	watch: {
		areaValue(newVal) {
			this.$emit('change', newVal);
		},
	},
	methods: {
		selectArea(e) {
			// console.log(e.target.innerText);
			this.areaValue = e.target.innerText;
		},
	},
};
</script>
