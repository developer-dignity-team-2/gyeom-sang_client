<template>
	<div v-if="items !== undefined">
		<simple-grid
			:headers="headers"
			:items="items"
			:sliceStart="sliceStart"
			:sliceEnd="sliceEnd"
			@click-buttons="handleClickButtons"
		/>
		<pagination-packing
			:itemCount="items.length"
			@change-page="changePage"
			:items="items"
		/>
	</div>
</template>
<script>
import SimpleGrid from '@/components/pagination/SimpleGrid.vue';
import PaginationPacking from '@/components/pagination/PaginationPacking.vue';
export default {
	components: { SimpleGrid, PaginationPacking },
	props: {
		headers: {
			type: Array,
			default: function () {
				return [];
			},
		},
		items: {
			type: Array,
			default: function () {
				return [];
			},
		},
	},
	data() {
		return {
			sliceStart: 0,
			sliceEnd: 5,
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		changePage(start, end) {
			// console.log('changePage', start, end)
			this.sliceStart = start;
			this.sliceEnd = end;
		},
		handleClickButtons(method, id) {
			this.$emit('clickButtons', method, id);
		},
	},
};
</script>
