<template>
	<div
		class="col-xl-4 col-md-6 col-sm-12 mb-4"
		v-for="item in babsangData"
		:key="item.id"
		@click="detail(item.id)"
	>
		<BabsangCard :itemData="item" />
	</div>
</template>
<script>
import BabsangCard from '@/components/BabsangCard';
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
	methods: {
		detail(id) {
			this.$router.push({
				name: 'Babsang',
				params: { babsangId: id },
			});
		},
	},
};
</script>
