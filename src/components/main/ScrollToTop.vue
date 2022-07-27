<template>
	<div v-show="isVisible" class="scroll-to-top-container" @click="scrollToTop">
		<div>
			<img src="@/assets/img/chevron-top.png" alt="화살표 위쪽" />
			<h3>TOP</h3>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	props: {},
	data() {
		return {
			isVisible: false,
		};
	},
	mounted() {
		window.addEventListener('scroll', this.toggleVisibility);
	},
	unmounted() {
		window.removeEventListener('scroll', this.toggleVisibility);
	},
	methods: {
		scrollToTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		},
		toggleVisibility() {
			if (window.pageYOffset > 500) {
				this.isVisible = true;
			} else {
				this.isVisible = false;
			}
		},
	},
};
</script>

<style scoped lang="scss">
.scroll-to-top-container {
	align-self: flex-end;
	cursor: pointer;
	z-index: 100;
	position: sticky;
	width: 72px;
	height: 80px;
	right: 80px;
	bottom: 80px;
	background: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		img {
			width: 30px;
			height: 15px;
		}
		h3 {
			margin-top: 8px;
			font-weight: 700;
			font-size: 18px;
			line-height: 160%;
			letter-spacing: 0.03em;
			text-align: center;
			color: #ffffff;
		}
	}
}
</style>
