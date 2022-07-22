<template>
	<div class="input-message-warning-container" v-show="open">
		<img src="@/assets/img/input-message_warning.png" alt="인풋 메시지 경고" />
		<span>최대 글자 수 {{ inputMaxLength }}</span>
	</div>
</template>

<script>
export default {
	components: {},
	props: {
		inputMaxLength: {
			type: Number,
			default: function () {
				return 0;
			},
		},
		open: {
			type: Boolean,
			default: function () {
				return false;
			},
		},
	},
	data() {
		return {};
	},
	beforeCreate() {},
	created() {},
	beforeMount() {},
	mounted() {},
	beforeUpdate() {},
	updated() {},
	beforeUnmount() {},
	unmounted() {},
	methods: {},
};
</script>

<style scoped lang="scss">
.input-message-warning-container {
	margin-left: 4px;
	margin-top: 8px;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	img {
		width: 16px;
		height: 16px;
	}

	span {
		margin-left: 8px;
		font-weight: 400;
		font-size: 12px;
		line-height: 18px;
		color: #ef387a;
	}
}
</style>
