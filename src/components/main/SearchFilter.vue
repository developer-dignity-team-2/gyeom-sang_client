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
</template>

<script>
export default {};
</script>
