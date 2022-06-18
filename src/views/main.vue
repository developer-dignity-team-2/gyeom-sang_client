<template>
	<div class="container">
		<!-- 검색창 -->
		<div class="row">
			<div class="col my-3">
				<form class="d-flex">
					<input class="form-control me-3" type="text" placeholder="Search" />
					<button class="btn btn-secondary" type="submit">Search</button>
				</form>
			</div>
		</div>
		<!-- 밥상카드 -->

		<div class="row">
			<div class="col">
				<BabsangCard />
			</div>
			<div class="col">
				<BabsangCard />
			</div>
			<div class="col">
				<BabsangCard />
			</div>
			<div class="col">
				<BabsangCard />
			</div>
		</div>
	</div>
</template>

<script>
import BabsangCard from '@/components/babsangCard';
export default {
	name: 'Main',
	components: {
		BabsangCard,
	},
};
</script>
