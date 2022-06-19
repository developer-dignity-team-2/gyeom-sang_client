<template>
	<div class="container mb-5">
		<div class="row my-4">
			<!-- 네브바 -->
			<div class="col-xl-3">
				<CompUserProfile />
			</div>
			<!-- 본문영역 -->
			<div class="col-md-9">
				<div class="col border rounded p-3">
					<h3>찜한 밥상</h3>
					<!-- 버튼 -->
					<div class="row mt-4 mb-4">
						<div class="col-8 d-flex justify-content-left">
							<div class="d-flex justify-content-center"></div>
						</div>
						<div class="col">
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
						<div class="col">
							<BabsangCard />
						</div>
						<div class="col">
							<BabsangCard />
						</div>
						<div class="col">
							<BabsangCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CompUserProfile from '@/components/comp-user-profile';
import BabsangCard from '@/components/babsangCard';

export default {
	name: 'MypageFavorites',
	components: { CompUserProfile, BabsangCard },
};
</script>
