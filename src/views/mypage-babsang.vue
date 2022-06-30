<template>
	<div class="container mb-5">
		<div class="row my-4">
			<!-- 네브바 -->
			<div class="col-xl-3 col-md-4 col-sm-12">
				<CompUserProfile />
			</div>
			<!-- 본문영역 -->
			<div class="col-xl-9 col-md-8 col-sm-12">
				<div class="col border rounded p-3">
					<h3>참여한 밥상 목록</h3>
					<!-- 버튼 -->
					<div class="row mt-4">
						<div class="col-xl-8 col-md-12 col-sm-12 mb-4">
							<div class="row">
								<div class="btn-group" role="group" aria-label="Basic example">
									<button type="button" class="btn btn-outline-primary">
										숟갈 얹은 밥상
									</button>
									<button type="button" class="btn btn-outline-primary">
										차려 놓은 밥상
									</button>
									<button type="button" class="btn btn-outline-primary">
										선정된 밥상
									</button>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-md-12 col-sm-12 mb-4">
							<div class="row">
								<!-- 모집중, 최신순 -->
								<div
									class="btn-group"
									role="group"
									aria-label="Button group with nested dropdown"
								>
									<button type="button" class="btn btn-primary">모집중</button>
									<div class="btn-group" role="group">
										<button
											id="btnGroupDrop4"
											type="button"
											class="btn btn-primary dropdown-toggle"
											data-bs-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										></button>
										<div
											class="dropdown-menu"
											aria-labelledby="btnGroupDrop4"
											style=""
										>
											<a class="dropdown-item" href="#">모집마감</a>
										</div>
									</div>

									<button type="button" class="btn btn-primary">최신순</button>
									<div class="btn-group" role="group">
										<button
											id="btnGroupDrop4"
											type="button"
											class="btn btn-primary dropdown-toggle"
											data-bs-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										></button>
										<div
											class="dropdown-menu"
											aria-labelledby="btnGroupDrop4"
											style=""
										>
											<a class="dropdown-item" href="#">오래된순</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 밥상카드 -->
					<div class="row">
						<BabsangCardList :babsangData="babsangData.result" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CompUserProfile from '@/components/profile/CompUserProfile';
import BabsangCardList from '@/components/profile/BabsangCardList';

export default {
	name: 'MypageProfile',
	components: { CompUserProfile, BabsangCardList },
	data() {
		return {
			babsangData: [],
		};
	},
	computed: {},
	mounted() {
		this.getBabsangData();
	},
	methods: {
		async getBabsangData() {
			this.babsangData = await this.$get(
				`https://nicespoons.com/api/v1/babsang`,
			);
		},
	},
};
</script>
<style scoped lang="scss">
.btn-primary {
	color: #575757;
	background-color: #ffcb00;
	border-color: #ffcb00;
}
.btn-outline-primary {
	color: #575757;
	border-color: #ffcb00;
	&:hover {
		background-color: #ffcb00;
	}
}
</style>
