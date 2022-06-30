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
					{{ list.comment_description }}
				</div>

				<div class="pad-ver text-end pe-4">
					<button
						type="button"
						class="btn btn-outline-primary btn-sm"
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
			commentCeateToggle: false,
			comment_parent_id: '',
			commentList: [
				{
					id: 1,
					dining_id: 32,
					user_email: '김준현',
					comment_description: '안녕하세요. 초코빵도 같이 먹을수있나요?',
					create_date: '2022-12-12',
					secret_check: false,
					comment_parent_id: null,
				},
				{
					id: 2,
					dining_id: 1,
					user_email: '문세윤',
					comment_description: '네 저도 초코빵 좋아해요',
					create_date: '2022-12-12',
					secret_check: false,
					comment_parent_id: 1, // 부모댓글의 id
				},
				{
					id: 3,
					dining_id: 1,
					user_email: '부끄뚱',
					comment_description: '혹시 25~26 여행하시면 칼국수도 같이 먹을까요?',
					create_date: '2022-12-12',
					secret_check: false,
					comment_parent_id: null,
				},
				{
					id: 4,
					dining_id: 1,
					user_email: '배고파',
					comment_description: '만약 밥장님이 안되신다고 하면 저랑 드실래여?',
					create_date: '2022-12-12',
					secret_check: false,
					comment_parent_id: 3, // 부모댓글의 id
				},
			],
		};
	},
	setup() {},
	created() {
		// this.getCommentList();
	},
	mounted() {},
	unmounted() {},
	methods: {
		// 대댓글 나오게 하는 함수
		CeateToggle() {
			this.commentCeateToggle = !this.commentCeateToggle;
			if (this.commentCeateToggle) {
				console.log(this.commentCeateToggle);
			}
		},

		// async getCommentList() {
		// 	this.commentList = await this.$get(
		// 		`https://nicespoons.com/api/v1/comment/1/`,
		// 	);
		// 	// this.commentList = this.commentList.result[0];
		// 	// console.log(this.commentList);
		// 	this.$emit('test', '이건 테스트입니당');
		// },
		// async deleteComment() {
		// 	const confirmResult = confirm('댓글을 삭제 하시겠습니까?');
		// 	if (confirmResult) {
		// 		const id = this.$route.params.id;
		// 		await this.$delete('/comment/1' + id);
		// 	}
		// },
		commentChange() {},
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
