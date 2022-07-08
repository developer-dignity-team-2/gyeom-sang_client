<template>
	<div class="col-xl-6 col-12 mb-4" v-for="item in babsangData" :key="item.id">
		<!-- 클릭 이벤트는 BabsangCard.vue에 적용하였음 -->
		<!-- <div
		class="col-xl-6 col-12 mb-4"
		v-for="item in babsangData"
		:key="item.id"
		@click="detail(item.id)"
	> -->
		<BabsangCard :itemData="item" />
	</div>
</template>
<script>
import BabsangCard from '@/components/common/BabsangCard';
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
		// 클릭 이벤트는 BabsangCard.vue에 적용하였음
		// detail(id) {
		// 	this.$router.push({
		// 		name: 'Babsang',
		// 		params: { babsangId: id },
		// 	});
		// },
	},
};
</script>
