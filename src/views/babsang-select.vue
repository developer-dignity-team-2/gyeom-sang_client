<template>
	<div class="container">
		<div class="row my-4">
			<h3>함께 식사할 숟갈을 선택해 주세요!</h3>
		</div>
		<!-- 선택한 숟갈 -->
		<div style="position: sticky; top: 0; z-index: 1">
			<div style="opacity: 1; background-color: white">
				<h5>함께할 숟갈</h5>
				<div
					class="col-12 border rounded py-4 text-center"
					style="min-height: 175px"
				>
					<div class="col">
						<div
							class="row"
							style="
								display: flex;
								flex-flow: row wrap;
								justify-content: center;
							"
						>
							<div
								style="display: flex; flex-flow: row wrap; flex-basis: 50rem"
							>
								<div
									style="
										display: flex;
										justify-content: space-around;
										align-item: center;
									"
									class="col"
									:key="selectedSpoon.email"
									v-for="selectedSpoon in selectedSpoons"
								>
									<div style="cursor: pointer" @click="doCancel(selectedSpoon)">
										<div style="width: 6rem">
											<div class="img-wrap pf rounded-circle mb-1">
												<img :src="selectedSpoon.profile_image" alt="프로필" />
											</div>
											<strong>{{ selectedSpoon.nickname }}</strong>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 선택 완료, 메시지 발송 버튼 -->
					<div
						class="col mt-2 mb-4"
						style="display: flex; justify-content: center"
						v-show="showButton()"
					>
						<button type="button" class="btn btn-primary" @click="doComfirm()">
							선택 완료(메시지 발송)
						</button>
					</div>
				</div>
				<!-- 메시지 입력 -->
				<transition name="nested" :duration="200">
					<div class="col-12 mt-2" v-show="showButton()">
						<textarea
							class="form-control"
							style="resize: none"
							id="exampleTextarea"
							rows="3"
							v-model="babsangMessage"
						></textarea>
					</div>
				</transition>
				<div
					style="
						background: linear-gradient(to top, rgba(255, 255, 255, 0), white);
					"
				></div>
			</div>
			<!-- 확정(메시지 발송) -->
			<div
				class="col-12 border:none rounded pb-4 text-center"
				style="
					background: linear-gradient(to top, rgba(255, 255, 255, 0), white);
				"
			></div>
		</div>
		<div class="mt-4 mb-3">
			<h5>신청한 숟갈</h5>
			<div class="col">
				<div class="row">
					<!-- 정렬 버튼 -->
					<ButtonModuleForSelectSpoon />
				</div>
			</div>
		</div>
		<!-- 선택전 숟갈 카드 -->
		<div class="row">
			<div
				class="col-xl-4 col-md-6 col-sm-12 mb-4"
				:class="{
					disabled:
						spoon.email === checkedEmail[checkedEmail.indexOf(spoon.email)],
					enabled:
						spoon.email !== checkedEmail[checkedEmail.indexOf(spoon.email)],
				}"
				:key="spoon.email"
				v-for="spoon in user"
				@click="doSelect(spoon)"
			>
				<userCard
					:email="spoon.email"
					:gender="spoon.gender"
					:nickname="spoon.nickname"
					:profile_image="spoon.profile_image"
					:age_range="spoon.age_range"
					:dining_score="spoon.dining_score"
					:dining_spoons_description="spoon.dining_spoons_description"
				/>
			</div>
		</div>
	</div>
</template>
<script>
import ButtonModuleForSelectSpoon from '@/components/babsangselect/ButtonModuleForSelectSpoon';
import userCard from '@/components/UserCard';
export default {
	name: 'BabsangSelect',
	components: { userCard, ButtonModuleForSelectSpoon },
	data() {
		return {
			// trasition 버튼 용: 시작
			sortMannerScore: 'H', // 식사 매너 점수 높은 순 H, 식사 매너 점수 낮은 순 L
			sortrecruitDate: 'F', // 신청이 빠른 순 F, 신청이 느린 순 S
			// trasition 버튼 용: 끝
			// comfirm: false,
			babsang: 0,
			babsangMessage: '',
			diningTableSpoons: {
				spoon_email: 'spoon1@gmail.com',
				nickname: '숟갈1',
				dining_table_id: 1,
				dining_count: 3,
			},
			selectedSpoons: [],
			checkedNickname: [],
			checkedEmail: [],
			user: [
				{
					email: 'spoon1@gmail.com',
					gender: '여성',
					nickname: '숟갈1',
					profile_image: require('../assets/img/users/w1.png'),
					age_range: '20대',
					dining_score: 3.2,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon2@gmail.com',
					gender: '여성',
					nickname: '숟갈2',
					profile_image: require('../assets/img/users/w2.png'),
					age_range: '20대',
					dining_score: 3.5,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon3@gmail.com',
					gender: '여성',
					nickname: '숟갈3',
					profile_image: require('../assets/img/users/w3.png'),
					age_range: '20대',
					dining_score: 3.3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon4@gmail.com',
					gender: '여성',
					nickname: '숟갈4',
					profile_image: require('../assets/img/users/w4.png'),
					age_range: '20대',
					dining_score: 3.7,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon5@gmail.com',
					gender: '여성',
					nickname: '숟갈5',
					profile_image: require('../assets/img/users/w5.png'),
					age_range: '20대',
					dining_score: 3.6,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon6@gmail.com',
					gender: '여성',
					nickname: '숟갈6',
					profile_image: require('../assets/img/users/w6.png'),
					age_range: '20대',
					dining_score: 3.8,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon7@gmail.com',
					gender: '여성',
					nickname: '숟갈7',
					profile_image: require('../assets/img/users/w7.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon8@gmail.com',
					gender: '여성',
					nickname: '숟갈8',
					profile_image: require('../assets/img/users/w8.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon9@gmail.com',
					gender: '여성',
					nickname: '숟갈9',
					profile_image: require('../assets/img/users/w9.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon10@gmail.com',
					gender: '여성',
					nickname: '숟갈10',
					profile_image: require('../assets/img/users/w10.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon11@gmail.com',
					gender: '여성',
					nickname: '숟갈11',
					profile_image: require('../assets/img/users/w11.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon12@gmail.com',
					gender: '남성',
					nickname: '숟갈12',
					profile_image: require('../assets/img/users/m1.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon13@gmail.com',
					gender: '남성',
					nickname: '숟갈13',
					profile_image: require('../assets/img/users/m2.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon14@gmail.com',
					gender: '남성',
					nickname: '숟갈14',
					profile_image: require('../assets/img/users/m3.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon15@gmail.com',
					gender: '남성',
					nickname: '숟갈15',
					profile_image: require('../assets/img/users/m4.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon16@gmail.com',
					gender: '남성',
					nickname: '숟갈16',
					profile_image: require('../assets/img/users/m5.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon17@gmail.com',
					gender: '남성',
					nickname: '숟갈17',
					profile_image: require('../assets/img/users/m6.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon18@gmail.com',
					gender: '남성',
					nickname: '숟갈18',
					profile_image: require('../assets/img/users/m7.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon19@gmail.com',
					gender: '남성',
					nickname: '숟갈19',
					profile_image: require('../assets/img/users/m8.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon20@gmail.com',
					gender: '남성',
					nickname: '숟갈20',
					profile_image: require('../assets/img/users/m9.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon21@gmail.com',
					gender: '남성',
					nickname: '숟갈21',
					profile_image: require('../assets/img/users/m10.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
				{
					email: 'spoon22@gmail.com',
					gender: '남성',
					nickname: '숟갈22',
					profile_image: require('../assets/img/users/m11.png'),
					age_range: '20대',
					dining_score: 3,
					dining_spoons_description:
						'저도 그 식당 가고 싶었어요! 함께 먹고 싶어요 밥장님~',
				},
			],
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		writeMessage() {
			this.babsangMessage =
				'축하합니다 ^O^ ' +
				// this.checkedNickname.join(', ') +
				// '님은 ' +
				this.diningTableSpoons.dining_table_id +
				'번 밥상의 숟갈로 선정되셨습니다.';
		},
		showButton() {
			if (this.selectedSpoons.length === this.diningTableSpoons.dining_count) {
				return true;
			} else {
				return false;
			}
		},
		doComfirm() {
			if (this.comfirm === false) {
				this.comfirm = true;
			} else {
				this.comfirm = false;
			}
		},
		doSelect(spoon) {
			if (this.selectedSpoons.length < this.diningTableSpoons.dining_count) {
				console.log('숟갈 선택');
				this.selectedSpoons.push(spoon);
				this.checkedEmail.push(spoon.email);
				this.checkedNickname.push(spoon.nickname);
				this.writeMessage();
			}
		},
		doCancel(spoon) {
			console.log('선택 취소');
			this.selectedSpoons = this.selectedSpoons.filter(
				s => s.email !== spoon.email,
			);
			this.checkedEmail = this.checkedEmail.filter(
				email => email !== spoon.email,
			);
			this.checkedNickname = this.checkedNickname.filter(
				nickname => nickname !== spoon.nickname,
			);
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
// 선택된 숟갈 처리
.disabled {
	pointer-events: none;
	opacity: 0.4;
	cursor: not-allowed;
}
.enabled {
	pointer-events: auto;
	opacity: 1;
	cursor: pointer;
}
// 메시지 입력창 애니메이션
.nested-enter-active,
.nested-leave-active {
	transition: 0.5s;
}

.nested-enter-from,
.nested-leave-to {
	transform: translateY(-30px);
	opacity: 0;
}
// transition 버튼
.btn-container {
	display: inline-block;
	position: relative;
	height: 1em;
}

button {
	position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
	transition: all 0.1s ease-out;
}

.slide-up-enter-from {
	opacity: 0;
	transform: translateY(10px);
}

.slide-up-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
