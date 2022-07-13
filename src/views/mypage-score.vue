<template>
	<div class="container mb-5">
		<div class="row my-4">
			<div class="col-xl-3 col-md-4 col-sm-12">
				<CompUserProfile />
			</div>
			<!-- 본문영역 -->
			<div class="col-xl-9 col-md-8 col-sm-12">
				<div class="col border rounded p-3" style="min-height: 480px">
					<h3>식사 매너 점수</h3>
					<!-- 버튼 -->
					<div class="row mt-4">
						<div class="col-xl-6 col-md-12 col-sm-12 mb-4">
							<div class="row">
								<div class="btn-group" role="group" aria-label="Basic example">
									<button
										type="button"
										:class="{
											'btn btn-primary': showCard,
											'btn btn-outline-primary': !showCard,
										}"
										@click="selectMannerCard"
									>
										식사 매너
									</button>
									<button
										type="button"
										:class="{
											'btn btn-primary': !showCard,
											'btn btn-outline-primary': showCard,
										}"
										@click="selectBabjangMannerCard"
									>
										밥장 매너
									</button>
								</div>
							</div>
						</div>
					</div>
					<!-- 매너 카드 -->
					<!-- 식사 매너 -->
					<div v-if="showCard">
						<div
							class="pt-5"
							style="
								display: flex;
								flex-flow: row wrap;
								justify-content: center;
								align-item: center;
							"
							v-if="countMannerArr[0] === 0 && countMannerArr[1] === 0"
						>
							받은 식사 매너 평가가 없습니다.
						</div>
						<div class="row">
							<!-- 식사매너: 금매너 -->
							<div
								class="col-xl col-md-12 col-sm-12 mb-4"
								v-if="countMannerArr[0] > 0"
							>
								<MannerCard
									:mannerTitle="myManners[0][0].mannerTitle"
									:myManners="myManners[0][1]"
									:highlighter="true"
								/>
							</div>
							<!-- 식사매너: 똥매너 -->
							<div
								class="col-xl col-md-12 col-sm-12"
								v-if="countMannerArr[1] > 0"
							>
								<MannerCard
									:mannerTitle="myManners[1][0].mannerTitle"
									:myManners="myManners[1][1]"
									:highlighter="false"
								/>
							</div>
						</div>
					</div>
					<!-- 밥장 매너 -->
					<div v-if="!showCard">
						<div
							class="pt-5"
							style="
								display: flex;
								flex-flow: row wrap;
								justify-content: center;
								align-item: center;
							"
							v-if="countMannerArr[2] === 0 && countMannerArr[3] === 0"
						>
							받은 밥장 매너 평가가 없습니다.
						</div>
						<div class="row">
							<!-- 밥장 매너: 금매너 -->
							<div
								class="col-xl col-md-12 col-sm-12 mb-4"
								v-if="countMannerArr[2] > 0"
							>
								<MannerCard
									:mannerTitle="myManners[2][0].mannerTitle"
									:myManners="myManners[2][1]"
									:highlighter="true"
								/>
							</div>
							<!-- 밥장 매너: 똥매너 -->
							<div
								class="col-xl col-md-12 col-sm-12"
								v-if="countMannerArr[3] > 0"
							>
								<MannerCard
									:mannerTitle="myManners[3][0].mannerTitle"
									:myManners="myManners[3][1]"
									:highlighter="false"
								/>
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
import MannerCard from '@/components/profile/MannerCard';

export default {
	name: 'MypageScore',
	components: {
		CompUserProfile,
		MannerCard,
	},
	data() {
		return {
			showCard: true,
			countMannerArr: [],
			// 서버에서 값을 받을 때 받은 평가가 없다면 mannerTitle 객체와 , 빈 배열[]로 받을 것
			myManners: [
				[
					{ mannerTitle: '받은 금매너' },
					[
						// { id: 'sg1', question: '식사 후 냅킨을 챙겨줘요.', count: 1 },
						// { id: 'sg2', question: '수저를 챙겨줘요.', count: 9 },
						// { id: 'sg3', question: '물을 따라줘요.', count: 1 },
						// { id: 'sg4', question: '부족한 반찬, 음식을 챙겨줘요.', count: 1 },
						// { id: 'sg5', question: '분위기를 편하게 만들어요.', count: 1 },
					],
				],
				[
					{ mannerTitle: '받은 똥매너' },
					[
						// { id: 'sb1', question: '약속 시간을 안 지켜요.', count: 1 },
						// { id: 'sb2', question: '음식을 지저분하게 먹어요.', count: 1 },
						// {
						// 	id: 'sb3',
						// 	question: '맛있는 음식을 지나치게 가져가요.',
						// 	count: 1,
						// },
						// { id: 'sb4', question: '식사 중 대화 예의가 없어요.', count: 1 },
						// { id: 'sb5', question: '돈 정산이 깔끔하지 않아요.', count: 1 },
					],
				],
				[
					{ mannerTitle: '받은 금매너' },
					[
						{ id: 'bg1', question: '당신은 겸상 매너요정 이에요.', count: 9 },
						{ id: 'bg2', question: '밥장이 밥상을 잘 주도해요.', count: 10 },
					],
				],
				[
					{ mannerTitle: '받은 똥매너' },
					[
						{ id: 'bb1', question: '밥장이 사람을 차별해요.', count: 2 },
						{ id: 'bb2', question: '밥장이 독단적으로 행동해요.', count: 1 },
					],
				],
			],
		};
	},
	setup() {},
	created() {},
	mounted() {
		this.countManner(this.myManners);
	},
	unmounted() {},
	methods: {
		selectMannerCard() {
			this.showCard = true;
		},
		selectBabjangMannerCard() {
			this.showCard = false;
		},
		countManner(manners) {
			for (const i of manners) {
				this.countMannerArr.push(i[1].length);
			}
			console.log(this.countMannerArr);
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
		background-color: #fff9e1;
	}
}
</style>
