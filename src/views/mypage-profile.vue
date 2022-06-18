<template>
	<div class="container">
		<div class="row bg-primary">
			<div class="col bg-secondary">Profile</div>
			<div class="col bg-success"></div>
		</div>

		<div class="row">
			<div class="col">
				<CompUserProfile />
			</div>
		</div>
	</div>
</template>

<script>
import CompUserProfile from '@/components/comp-user-profile';
export default {
	name: 'MypageProfile',
	components: { CompUserProfile },
	data() {
		return {};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {},
};
</script>
