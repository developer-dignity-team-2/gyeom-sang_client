<template>
	<div class="container row" v-if="this.$store.state.user.isUser">
		<!--   <div class="container row">-->
		<!-- 댓글생성 -->

		<!-- 댓글내용 입력 -->
		<form name="content">
			<div class="form-group">
				<textarea
					class="form-control"
					v-model="comment_description"
					id="Textarea"
					rows="3"
					style="height: 128px; resize: none"
					placeholder="대댓글 입력해야해요"
				></textarea>
			</div>
		</form>
		<div class="d-flex justify-content-between align-items-center">
			<!-- 비밀댓글 체크여부 -->

			<label class="col form-check-label">
				<input
					class="form-check-input"
					v-model="secret_check"
					type="checkbox"
					style="margin-right: 4px"
					@change="checkedSecert"
				/>
				비밀댓글
			</label>

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
	</div>
</template>
<script>
export default {
	name: 'CommentCreate',
	components: {},
	props: {
		parent_id: {
			type: Number,
		},
	},
	data() {
		return {
			comment_description: '',
			secret_check: 'N',
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		async createComment() {
			await this.$post('/comment', {
				param: {
					dining_id: this.$route.params.babsangId,
					user_email: this.$store.state.user.userData.email,
					comment_description: this.comment_description,
					comment_parent_id: this.parent_id,
					secret_check: this.secret_check,
				},
			});
			this.comment_description = '';
			this.$router.go();
		},
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
