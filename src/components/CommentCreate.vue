<template>
	<div class="container row">
		<!-- 댓글생성 -->
		<div class="text-end">
			<!-- 비밀댓글 체크여부 -->
			<input
				class="form-check-input"
				v-model="secret_check"
				type="checkbox"
				value=""
				id="flexCheckDefault"
				style="margin: auto"
			/>
			<label
				class="form-check-label"
				for="flexCheckDefault"
				style="margin: auto"
			>
				비밀댓글 {{ secret_check }}
			</label>
		</div>
		<!-- 댓글내용 입력 -->
		<form name="content">
			<div class="form-group">
				<textarea
					class="form-control"
					v-model="comment_description"
					id="Textarea"
					rows="3"
					style="height: 128px; resize: none"
					placeholder="댓글 내용"
				></textarea>
				{{ comment_description }}
			</div>
		</form>
		<div class="col text-end">
			<button
				type="button"
				class="btn btn-primary"
				style="margin: auto; margin-top: 15px"
				@click="createComment"
			>
				댓글 등록
			</button>
		</div>
	</div>
</template>
<script>
export default {
	name: 'CommentCreate',
	components: {},
	data() {
		return {
			comment_description: '',
			secret_check: false,
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		// async createComment() {
		// 	await this.$post('https://nicespoons.com/api/v1/comment', {
		// 		param: {
		// 			dining_id: 1,
		// 			user_email: '김준현',
		// 			comment_description: this.comment_description,
		// 			create_date: '2022-12-12',
		//          update_date:'',
		// 			secret_check: this.secret_check,
		// 			comment_parent_id: 1,
		// 		},
		// 	});
		// 	this.comment_description = '';
		// },
	},
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
