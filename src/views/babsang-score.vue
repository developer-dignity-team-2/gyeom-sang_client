<template>
	<div class="container">
		<div class="row my-4">
			<!-- 밥장 매너 -->
			<div>
				<h4>밥장의 밥상 매너는 어땠나요?</h4>
				<div class="row">
					<div class="col-xl-6 col-md-12 col-sm-12 mb-4">
						<MannerGiveScoreCard
							:mannerTitle="giveScore[2][0].mannerTitle"
							:giveScore="giveScore[2][1]"
						/>
					</div>
					<div class="col-xl-6 col-md-12 col-sm-12">
						<MannerGiveScoreCard
							:mannerTitle="giveScore[3][0].mannerTitle"
							:giveScore="giveScore[3][1]"
						/>
					</div>
				</div>
			</div>
			<div>
				<h4>숟갈의 밥상 매너는 어땠나요?</h4>
				<div class="row">
					<div class="col-xl-6 col-md-12 col-sm-12 mb-4">
						<MannerGiveScoreCard
							:mannerTitle="giveScore[0][0].mannerTitle"
							:giveScore="giveScore[0][1]"
						/>
					</div>
					<div class="col-xl-6 col-md-12 col-sm-12">
						<MannerGiveScoreCard
							:mannerTitle="giveScore[1][0].mannerTitle"
							:giveScore="giveScore[1][1]"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import MannerGiveScoreCard from '@/components/mannerGiveScoreCard';

export default {
	components: { MannerGiveScoreCard },
	data() {
		return {
			showCard: true,
			giveScore: [
				[
					{ mannerTitle: '금매너' },
					[
						{ id: 1, question: '식사 후 냅킨을 챙겨줘요.', count: 1 },
						{ id: 2, question: '수저를 챙겨줘요.', count: 9 },
						{ id: 3, question: '물을 따라줘요.', count: 1 },
						{ id: 4, question: '부족한 반찬, 음식을 챙겨줘요.', count: 1 },
						{ id: 5, question: '분위기를 편하게 만들어요.', count: 1 },
					],
				],
				[
					{ mannerTitle: '똥매너' },
					[
						{ id: 1, question: '약속 시간을 안 지켜요.', count: 1 },
						{ id: 2, question: '음식을 지저분하게 먹어요.', count: 1 },
						{
							id: 3,
							question: '맛있는 음식을 지나치게 가져가요.',
							count: 1,
						},
						{ id: 4, question: '식사 중 대화 예의가 없어요.', count: 1 },
						{ id: 5, question: '돈 정산이 깔끔하지 않아요.', count: 1 },
					],
				],
				[
					{ mannerTitle: '금매너' },
					[
						{ id: 1, question: '당신은 겸상 매너요정 이에요.', count: 9 },
						{ id: 2, question: '밥장이 밥상을 잘 주도해요.', count: 10 },
					],
				],
				[
					{ mannerTitle: '똥매너' },
					[
						{ id: 1, question: '밥장이 사람을 차별해요.', count: 2 },
						{ id: 2, question: '밥장이 독단적으로 행동해요.', count: 1 },
					],
				],
			],
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		methods: {
			selectMannerCard() {
				this.showCard = true;
			},
			selectBabjangMannerCard() {
				this.showCard = false;
			},
		},
	},
};
</script>
