<template>
	<div class="card rounded p-3" style="overflow: hidden">
		<div class="d-flex align-items-center mb-3">
			<div class="profile me-3" style="width: 6rem">
				<div class="img-wrap pf rounded-circle">
					<img :src="profile_image" alt="프로필" />
				</div>
			</div>
			<ul>
				<li class="mb-1">
					<strong>{{ nickname }}</strong>
				</li>
				<li class="mb-1">{{ gender }}{{ ageRangeForm() }}</li>
				<!-- 별점 기능 -->
				<li>
					<stars-rating :config="config" />
				</li>
			</ul>
		</div>
		<div class="p-1">{{ dining_spoons_description }}</div>
	</div>
</template>

<script>
import starsRating from '@/components/RatingStars';
export default {
	components: { starsRating },
	props: [
		'email',
		'gender',
		'nickname',
		'profile_image',
		'age_range',
		'dining_score',
		'dining_spoons_description',
	],
	data: function () {
		return {
			config: {
				rating: 0,
				isIndicatorActive: false,
				style: {
					fullStarColor: '#ffcb00',
					emptyStarColor: '#737373',
					starWidth: 20,
					starHeight: 20,
				},
			},
		};
	},
	created() {
		this.config.rating = this.dining_score;
	},

	methods: {
		ageRangeForm() {
			const front = String(this.age_range).slice(0, 1);
			if (front == 1) {
				return '10대';
			} else if (front == 2) {
				return '20대';
			} else if (front == 3) {
				return '30대';
			} else if (front == 4) {
				return '40대';
			} else if (front == 5) {
				return '50대';
			} else if (front == 6) {
				return '60대';
			} else if (front == 7) {
				return '70대';
			} else {
				return '80대';
			}
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
