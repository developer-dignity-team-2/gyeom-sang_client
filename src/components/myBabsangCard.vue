<template>
	<div
		class="card rounded"
		style="max-width: 27rem; overflow: hidden"
		@click="goDetail"
	>
		<img
			src="https://cdn.pixabay.com/photo/2016/09/23/23/23/restaurant-1690696_1280.jpg"
			class="card-img-center"
			alt="food1"
		/>
		<div class="favorite">
			<font-awesome-icon
				icon="fa-solid fa-star"
				size="2xl"
				style="color: #ffd24c"
			/>
		</div>
		<div class="card-body">
			<div>
				<h5 class="card-title">연돈</h5>
				<p class="card-text mb-1">김민수</p>
				<p class="card-text mb-2">2022.05.29~2022.06.10</p>
			</div>
			<div>
				<button type="button" class="btn btn-primary me-2">모집중</button>
				<button type="button" class="btn btn-secondary me-2">혼성</button>
				<button type="button" class="btn btn-secondary">1/4</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BabsangCard',
	methods: {
		goDetail() {
			this.$router.push({
				path: '/babsang',
			});
		},
	},
};
</script>

<style scoped lang="scss">
.favorite {
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
}
</style>
