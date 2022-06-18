<template>
	<div class="container">
		<div class="row my-4">
			<div class="col-md-3 col-sm-12">
				<CompUserProfile />
			</div>
			<div class="col-md-9 col-sm-12">content</div>
		</div>
	</div>
</template>

<script>
import CompUserProfile from '@/components/comp-user-profile';

export default {
	name: 'MypageScore',
	components: {
		CompUserProfile,
	},
};
</script>
