<template>
	<div class="card rounded" style="overflow: hidden; cursor: pointer">
		<img
			:src="'https://nicespoons.com/static/images/' + itemData.dining_thumbnail"
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
				<p class="card-text mb-1">{{ itemData.nickname }}</p>
				<p class="card-text mb-2">
					{{ itemData.recruit_start_date }} ~ {{ itemData.recruit_end_date }}
				</p>
			</div>
			<div>
				<button type="button" class="btn btn-primary me-2">
					{{ currentStatus() }}
				</button>
				<button type="button" class="btn btn-secondary me-2">
					{{ recruitGender() }}
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
	data() {
		return {};
	},
	props: {
		itemData: Object,
	},
	computed() {},
	methods: {
		currentStatus() {
			let currentStatus = this.itemData.dining_status;
			let status;
			if (currentStatus === 0) {
				status = '모집중';
			} else if (currentStatus === 1) {
				status = '모집 마감';
			} else {
				status = '모집 확정';
			}
			return status;
		},
		recruitGender() {
			let gender = this.itemData.gender_check;
			let genderStatus;
			if (gender === 'ALL') {
				genderStatus = '혼성';
			} else if (gender === 'F') {
				genderStatus = '여성';
			} else {
				genderStatus = '남성';
			}
			return genderStatus;
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
.card-img-center {
	max-height: 15rem;
	object-fit: cover;
}
</style>
