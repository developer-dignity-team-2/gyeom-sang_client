<template>
	<div class="card rounded p-3" style="overflow: hidden">
		<div>
			<div class="list-group list-group-checkable d-grid gap-3 border-0 w-auto">
				<h5>{{ mannerTitle }}</h5>
				<ul :key="manner.id" v-for="manner in mannerQuestions">
					<li>
						<input
							type="checkbox"
							class="list-group-item-check pe-none"
							name=""
							:id="manner.id"
							:value="manner.id"
							v-model="checkedQuestion"
						/><label
							class="list-group-item rounded-3 py-3"
							style="text-align: center; cursor: pointer"
							:for="manner.id"
							>{{ manner.question }}</label
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		mannerTitle: { type: String, default: '' },
		mannerQuestions: {
			type: Array,
			default: function () {
				return [];
			},
		},
		babsangScore: {
			type: Array,
			default: function () {
				return [];
			},
		},
	},
	computed: {},
	data() {
		return {
			checkedQuestion: [],
		};
	},
	mounted() {},
	methods: {},
};
</script>
<style scoped lang="scss">
/* 매너 질문 스타일 */
.list-group {
	// max-width: 460px;
	margin: 1rem auto;
}

.form-check-input:checked + .form-checked-content {
	opacity: 0.5;
}

.form-check-input-placeholder {
	border-style: dashed;
}
[contenteditable]:focus {
	outline: 0;
}

.list-group-checkable .list-group-item {
	cursor: pointer;
}
.list-group-item-check {
	position: absolute;
	clip: rect(0, 0, 0, 0);
}
.list-group-item-check:hover + .list-group-item {
	background-color: var(--bs-light);
}
.list-group-item-check:checked + .list-group-item {
	color: #fff;
	background-color: var(--bs-yellow);
}
.list-group-item-check[disabled] + .list-group-item,
.list-group-item-check:disabled + .list-group-item {
	pointer-events: none;
	filter: none;
	opacity: 0.5;
}

.list-group-radio .list-group-item {
	cursor: pointer;
	border-radius: 0.5rem;
}
.list-group-radio .form-check-input {
	z-index: 2;
	margin-top: -0.5em;
}
.list-group-radio .list-group-item:hover,
.list-group-radio .list-group-item:focus {
	background-color: var(--bs-light);
}

.list-group-radio .form-check-input:checked + .list-group-item {
	background-color: var(--bs-body);
	border-color: var(--bs-blue);
	box-shadow: 0 0 0 2px var(--bs-blue);
}
.list-group-radio .form-check-input[disabled] + .list-group-item,
.list-group-radio .form-check-input:disabled + .list-group-item {
	pointer-events: none;
	filter: none;
	opacity: 0.5;
}
</style>
