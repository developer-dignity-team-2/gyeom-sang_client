<template>
	<div
		class="col-xl-4 col-md-6 col-sm-12 mb-4"
		v-for="(item, index) in babsangData"
		:key="index"
	>
		<BabsangCard :itemData="item" />
	</div>
</template>
<script>
import BabsangCard from '@/components/babsangCard';
export default {
	name: 'MainCardList',
	data() {
		return {};
	},
	components: {
		BabsangCard,
	},
	props: {
		babsangData: Object,
	},
};
</script>
