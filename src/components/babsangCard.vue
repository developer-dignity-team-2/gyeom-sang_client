<template>
	<div class="card rounded" style="overflow: hidden">
		<img
			:src="itemData.dining_thumbnail"
			class="card-img-center"
			:alt="itemData.restaurant_name"
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
				<h5 class="card-title">{{ itemData.restaurant_name }}</h5>
				<p class="card-text mb-1">{{ itemData.host_email }}</p>
				<p class="card-text mb-2">
					{{ itemData.recruit_start_date }} ~ {{ itemData.recruit_end_date }}
				</p>
			</div>
			<div>
				<button type="button" class="btn btn-primary me-2">
					{{ itemData.dining_status }}
				</button>
				<button type="button" class="btn btn-secondary me-2">
					{{ itemData.gender_check }}
				</button>
				<button type="button" class="btn btn-secondary">
					1/{{ itemData.dining_count }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BabsangCard',
	methods: {},
	props: {
		itemData: Object,
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
