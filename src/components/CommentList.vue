<template>
	<div>
		<div class="col-md-12 container">
			<!-- 댓글목록 -->
			<div v-for="list in commentList" :key="list.dining_table_id">
				<div class="media-block d-flex">
					<!-- 유저프로필 정보 -->
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
								>{{ list.email }}</a
							>
						</div>
					</div>
					<p class="text-muted">{{ list.create_date }}</p>
				</div>

				<!-- 댓글 내용 -->
				<div>
					{{ list.comment_description }}
				</div>
				<div class="pad-ver text-end pe-4">
					<button type="button" class="btn btn-outline-primary btn-sm">
						답글
					</button>
				</div>
				<!-- 구분선 -->
				<div class="col my-3">
					<hr style="background-color: #999" />
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
			commentList: [
				{
					dining_table_id: 1,
					email: '김민수',
					comment_description: '안녕하세요. 초코빵도 같이 먹을수있나요?',
					create_date: '2000-12-12',
				},
				{
					dining_table_id: 2,
					comment_description: '배고프네요',
					create_date: '2000-12-12',
					email: '원신희',
				},
				{
					dining_table_id: 3,
					comment_description: '혹시 25~26 여행하시면 칼국수도 같이 먹을까요?',
					create_date: '2000-12-12',
					email: '양세영',
				},
				{
					dining_table_id: 4,
					comment_description: '치즈돈까스도 먹나요?',
					create_date: '2000-12-12',
					email: '유승완',
				},
				{
					dining_table_id: 5,
					comment_description: '혹시 25~26 여행하시면 칼국수도 같이 먹을까요?',
					create_date: '2000-12-12',
					email: '윤여진',
				},
			],
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
