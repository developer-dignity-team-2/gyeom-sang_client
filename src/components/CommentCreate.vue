<template>
	<div class="container row">
		<!-- 댓글생성 -->
		<div class="text-end">
			<input
				class="form-check-input"
				style="margin: auto"
				type="checkbox"
				value=""
				id="flexCheckDefault"
			/>
			<label
				class="form-check-label"
				for="flexCheckDefault"
				style="margin: auto"
			>
				비밀댓글
			</label>
		</div>
		<form name="content">
			<div class="form-group">
				<textarea
					class="form-control"
					id="Textarea"
					rows="3"
					style="height: 128px; resize: none"
					placeholder="댓글 내용"
				></textarea>
			</div>
		</form>

		<!-- <div class="form-check d-flex justify-content-between"> -->

		<div class="col text-end">
			<button
				type="button"
				class="btn btn-primary"
				style="margin: auto; margin-top: 15px"
			>
				댓글 등록
			</button>
		</div>
	</div>
	<!-- </div> -->
</template>
<script>
export default {
	name: 'WriteComment',
	components: {},
	data() {
		return {
			sampleData: '',
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {},
};
</script>
<style scoped lang="scss">
.favorite {
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
}
.img-wrap {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.26%;
	overflow: hidden;
}
.img-wrap.map-wrap {
	padding-bottom: 40%;
}
.img-wrap.pf {
	padding-bottom: 100%;
}
.img-wrap img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
ul,
dl {
	padding: 0;
	margin: 0;
	list-style: none;
}
li {
	display: block;
}
dl {
	display: flex;
}
dt {
	margin-right: 1rem;
}
</style>
