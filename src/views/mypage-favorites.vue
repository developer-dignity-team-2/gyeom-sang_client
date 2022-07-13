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
					<h3>찜한 밥상</h3>
					<div class="row mt-4 mb-2">
						<div>
							<!-- 버튼 -->
							<div class="row mb-4">
								<!-- 모집중, 최신순 -->
								<ButtonModule />
							</div>
							<!-- 밥상카드 -->
							<div class="row">
								<!-- <BabsangCardList :babsangData="babsangData.result" /> -->
								<!-- <BabsangCardList :babsangData="babsangData"  /> -->
								<BabsangCardList :babsangData="babsangData.result" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CompUserProfile from '@/components/profile/CompUserProfile';
import BabsangCardList from '@/components/profile/BabsangCardList';
import ButtonModule from '@/components/profile/ButtonModule';
export default {
	name: 'MypageProfile',
	components: { CompUserProfile, BabsangCardList, ButtonModule },
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
				'https://nicespoons.com/api/v1/babsang/get?type=bookmarkedList',
			);
			console.log('------------like-babsangData--------------');
			console.log(this.babsangData);
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
