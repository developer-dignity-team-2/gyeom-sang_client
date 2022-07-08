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
							<div
								class="btn-group btn-group-sm"
								role="group"
								style="cursor: pointer; margin-right: 5px"
							>
								{{ list.user_email }}
							</div>
							<p class="text-muted">{{ list.create_date }}</p>
							<!-- <a
								href="#"
								class="btn-link text-semibold fs-5"
								style="text-decoration: none; color: inherit"
								>{{ list.user_email }}
							</a>
							<p class="text-muted">{{ list.create_date }}</p> -->
						</div>
					</div>
					<div class="mar-btm">
						<div
							class="btn-group btn-group-sm"
							role="group"
							v-show="!commentSave"
							style="cursor: pointer; margin-right: 5px"
							@click="doCommentSave(list.id)"
						>
							수정 |
						</div>

						<div
							class="btn-group btn-group-sm"
							role="group"
							v-show="!commentSave"
							style="cursor: pointer"
							@click="deleteComment(list.id)"
						>
							삭제
						</div>

						<!-- <a
                     onclick=""
                     class="btn-link text-small"
                     style="text-decoration: none; color: inherit"
                     v-show="!commentSave"
                     @click="doCommentSave(list.id)"
                     >수정</a
                  >
                  |
                  <a
                     href="#"
                     class="btn-link text-small"
                     style="text-decoration: none; color: inherit"
                     @click="deleteComment(list.id)"
                     >삭제</a
                  > -->
					</div>
				</div>
				<div v-show="commentSave" style="float: right">
					<button
						type="button"
						class="btn btn-primary mx-2"
						@click="doCommentPut(list.id, list.comment_description)"
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
				</div>

				<div class="pad-ver text-end pe-4">
					<button
						type="button"
						class="btn btn-outline-primary btn-sm"
						style="margin-top: 8px"
						v-show="!recommentSave"
						@click="CeateToggle(list.id)"
					>
						답글
					</button>
				</div>
				<!-- RecommentCreate에 parent_id를 넘겨주는 부분  -->
				<div v-show="recommentSave" style="margin-top: 15px">
					<RecommentCreate :parent_id="(this.comment_parent_id = list.id)" />
				</div>
			</div>
			<!-- 대댓글  -->
			<div
				v-for="recomment in commentList"
				:key="recomment.id"
				style="margin-top: 10px"
			>
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
								<div
									class="btn-group btn-group-sm"
									role="group"
									style="cursor: pointer; margin-right: 5px"
								>
									{{ recomment.user_email }}
								</div>
								<p class="text-muted">{{ recomment.create_date }}</p>
							</div>
						</div>
						<div class="mar-btm">
							<div class="mar-btm">
								<div
									class="btn-group btn-group-sm"
									role="group"
									v-show="!commentSave"
									style="cursor: pointer; margin-right: 5px"
									@click="doCommentSave(recomment.id)"
								>
									수정 |
								</div>

								<div
									class="btn-group btn-group-sm"
									role="group"
									v-show="!commentSave"
									style="cursor: pointer"
									@click="deleteComment(recomment.id)"
								>
									삭제
								</div>
								<!-- <a
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
                     > -->
							</div>
						</div>

						<!-- 댓글 내용 -->
						<div>
							<textarea
								class="form-control"
								v-model="recomment.comment_description"
								id="Textarea"
								rows="3"
								style="height: 128px; resize: none"
								placeholder="댓글 내용"
							></textarea>
						</div>
					</div>
				</div>
				<hr />
			</div>
		</div>
	</div>
</template>
<script>
import RecommentCreate from '@/components/RecommentCreate';
export default {
	components: { RecommentCreate },
	data() {
		return {
			comment_description: '',
			comment_parent_id: '',
			commentSave: false,
			recommentSave: false,
			commentCeateToggle: false,
			commentList: [],
		};
	},
	setup() {},
	created() {
		this.commentList = this.getCommentList();
	},
	mounted() {},
	unmounted() {},
	methods: {
		// 댓글 수정/취소하는 함수 o
		doCommentSave(ListId) {
			console.log(ListId);
			if (this.commentSave === true) {
				this.commentSave = false;
			} else {
				this.commentSave = true;
			}
		},
		// 수정한 댓글 값 보내는 함수
		async doCommentPut(commentId, comment_description) {
			console.log(commentId);
			console.log(comment_description);
			await this.$put('/comment/' + commentId, {
				param: {
					comment_description: comment_description,
				},
			});
			console.log(this.commentList.comment_description);
			this.commentSave = false;
		},
		// 댓글 삭제하는 함수
		async deleteComment(commentListId) {
			console.log(commentListId);
			const confirmResult = confirm('댓글을 삭제 하시겠습니까?');
			if (confirmResult) {
				// const id = this.commentList.id;
				await this.$delete('/comment/' + commentListId);
			}
		},
		// 댓글 불러오는 함수 o
		async getCommentList() {
			this.commentList = await this.$get(
				'/comment/' + this.$route.params.babsangId,
			);
			this.commentList = this.commentList.result;
			console.log('------------commentList------------');
			console.log(this.commentList);
		},
		// 대댓글 나오게 하는 함수
		// CeateToggle(recommentId) {
		//    this.commentCeateToggle = !this.commentCeateToggle;
		//    if (this.commentCeateToggle) {
		//       console.log(this.commentCeateToggle);
		//       if (this.recommentSave === true) {
		//          this.recommentSave = false;
		//       } else {
		//          this.recommentSave = true;
		//       }
		//       this.comment_parent_id = recommentId;
		//       console.log(this.comment_parent_id);
		//       return this.comment_parent_id;
		//    }
		// },
		CeateToggle(ListId) {
			console.log(ListId);
			if (this.recommentSave === true) {
				this.recommentSave = false;
			} else {
				this.recommentSave = true;
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
