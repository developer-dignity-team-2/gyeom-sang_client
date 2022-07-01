<template>
	<div class="col-md-12 container">
		<!-- 댓글 for문으로 가져옴/ if로 댓글 대댓글 구분 -->
		<div v-for="list in commentList" :key="list.id">
			<div class="media-block" v-if="list.comment_parent_id === null">
				<!-- 유저프로필 정보 -->
				<div class="d-flex">
					<img
						class="img-circle img-sm"
						alt="Profile"
						src="../assets/img/users/m9.png"
					/>
					<div class="media-body flex-fill">
						<div class="mar-btm">
							<a
								href="#"
								class="btn-link text-semibold fs-5"
								style="text-decoration: none; color: inherit"
								>{{ list.user_email }}</a
							>
							<p class="text-muted">{{ list.create_date }}</p>
						</div>
					</div>
					<div class="mar-btm">
						<a
							href="#"
							class="btn-link text-small"
							style="text-decoration: none; color: inherit"
							v-show="!commentSave"
							@click="doCommentSave()"
							>수정</a
						>
						|
						<a
							href="#"
							class="btn-link text-small"
							style="text-decoration: none; color: inherit"
							@click="deleteComment()"
							>삭제</a
						>
					</div>
				</div>
				<div v-show="commentSave">
					<button
						type="button"
						class="btn btn-primary mx-3"
						@click="doCommentPut()"
					>
						저장
					</button>
					<button
						type="submit"
						class="btn btn-secondary"
						@click="doCommentSave()"
					>
						취소
					</button>
				</div>

				<!-- 댓글 내용 -->

				<div class="form-group">
					<textarea
						:disabled="!commentSave"
						class="form-control"
						v-model="list.comment_description"
						id="Textarea"
						rows="3"
						style="height: 128px; resize: none"
						placeholder="댓글 내용"
					></textarea>
					{{ list.comment_description }}
				</div>

				<div class="pad-ver text-end pe-4">
					<button
						type="button"
						class="btn btn-outline-primary btn-sm"
						style="margin-top: 8px"
						@click="CeateToggle()"
					>
						답글
					</button>
				</div>
			</div>

			<hr />
			<!-- 대댓글  -->
			<div v-for="recomment in commentList" :key="recomment.id">
				<div
					class="media-block col-md-11"
					style="margin-left: auto"
					v-if="recomment.comment_parent_id === list.id"
				>
					<!-- 유저프로필 정보 -->
					<div class="d-flex">
						<img
							class="img-circle img-sm"
							alt="Profile"
							src="../assets/img/users/m9.png"
						/>
						<div class="media-body flex-fill">
							<div class="mar-btm">
								<a
									href="#"
									class="btn-link text-semibold fs-5"
									style="text-decoration: none; color: inherit"
									>{{ recomment.user_email }}</a
								>
								<p class="text-muted">{{ recomment.create_date }}</p>
							</div>
						</div>
						<div class="mar-btm">
							<a
								href="#"
								class="btn-link text-small"
								style="text-decoration: none; color: inherit"
								@click="commentChange()"
								>수정</a
							>
							|
							<a
								href="#"
								class="btn-link text-small"
								style="text-decoration: none; color: inherit"
								@click="deleteComment()"
								>삭제</a
							>
						</div>
					</div>

					<!-- 댓글 내용 -->
					<div>
						{{ recomment.comment_description }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			comment_description: '',
			comment_parent_id: '',
			commentSave: false,
			commentCeateToggle: false,
			commentList: [],
		};
	},
	setup() {},
	created() {
		this.getCommentList();
	},
	mounted() {},
	unmounted() {},
	methods: {
		// 댓글 수정/취소하는 함수
		doCommentSave() {
			if (this.commentSave === true) {
				this.commentSave = false;
			} else {
				this.commentSave = true;
			}
		},
		// 수정한 댓글 값 보내는 함수
		async doCommentPut() {
			await this.$put('comment/1', {
				param: {
					comment_description: this.commentList[0].comment_description,
				},
			});
			console.log(this.commentList[0].comment_description);
			this.commentSave = false;
		},
		// 댓글 불러오는 함수
		async getCommentList() {
			this.commentList = await this.$get(
				`https://nicespoons.com/api/v1/comment/1/`,
			);
			this.commentList = this.commentList.result[0];
			console.log(this.commentList);
			this.$emit('test', '이건 테스트입니당');
		},

		// 댓글 삭제하는 함수
		async deleteComment() {
			const confirmResult = confirm('댓글을 삭제 하시겠습니까?');
			if (confirmResult) {
				const id = this.commentList[0].id;
				await this.$delete('/comment/1' + id);
			}
		},

		// 대댓글 나오게 하는 함수(아직안함)
		CeateToggle() {
			this.commentCeateToggle = !this.commentCeateToggle;
			if (this.commentCeateToggle) {
				this.comment_parent_id = this.commentList[0].id;
				this.console.log(this.comment_parent_id);
			}
		},
	},
};
</script>
<style scoped lang="scss">
.img-wrap {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.26%;
	overflow: hidden;
	&.map-wrap {
		padding-bottom: 40%;
	}
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
.img-circle {
	border-radius: 50%;
	width: 50px;
	height: 50px;
	margin-right: 15px;
	margin-bottom: 25px;
}
</style>
