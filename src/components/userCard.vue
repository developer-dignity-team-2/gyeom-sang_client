<template>
	<div class="col border rounded p-3">
		<div class="d-flex align-items-center">
			<div class="profile me-3" style="width: 6rem">
				<div class="img-wrap pf rounded-circle">
					<img :src="profile_image" alt="프로필" />
				</div>
			</div>
			<ul>
				<li class="mb-1">
					<strong>{{ nickname }}</strong>
				</li>
				<li class="mb-1">{{ gender }}{{ age_range }}</li>
				<li>
					<font-awesome-icon icon="fa-solid fa-star" style="color: #ffd24c" />
					<font-awesome-icon icon="fa-solid fa-star" style="color: #ffd24c" />
					<font-awesome-icon icon="fa-solid fa-star" style="color: #ffd24c" />
					<font-awesome-icon icon="fa-solid fa-star" style="color: #ffd24c" />
					<font-awesome-icon icon="fa-solid fa-star" style="color: #ffd24c" />
				</li>
			</ul>
		</div>
		<div class="p-3">{{ dining_spoons_description }}</div>
	</div>
</template>

<script>
export default {
	props: {
		email: { type: String, default: '' },
		gender: { type: String, default: '' },
		nickname: { type: String, default: '' },
		profile_image: { type: String, default: '' },
		age_range: { type: String, default: '' },
		mannerScore: { type: Number, default: 0 },
		dining_spoons_description: { type: String, default: '' },
	},
};
</script>
<style scoped>
.favorite {
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
}
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
</style>
