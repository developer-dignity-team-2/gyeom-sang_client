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
									v-for="selectedSpoon in mixSpoons"
								>
									<div style="cursor: pointer" @click="doCancel(selectedSpoon)">
										<div style="width: 6rem">
											<div class="img-wrap pf rounded-circle mb-1">
												<img
													:src="selectedSpoon.spoon_profile_image"
													alt="프로필"
												/>
											</div>
											<strong>{{ selectedSpoon.spoon_nickname }}</strong>
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
						<button
							type="button"
							:class="{
								'btn btn-primary': buttonSignal === 0,
								'btn btn-outline-primary': buttonSignal !== 0,
							}"
							@click="doFinalSpoons()"
						>
							총 {{ babsangInfo.dining_count - 1 }}명 중
							{{ mixSpoons.length }}명 확정(메시지 발송)
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
		<div class="row" v-if="appliedSpoons.length > 0">
			<div
				class="col-xl-4 col-md-6 col-sm-12 mb-4"
				:class="{
					disabled:
						spoon.spoon_email ===
						checkedEmail[checkedEmail.indexOf(spoon.spoon_email)],
					enabled:
						spoon.spoon_email !==
						checkedEmail[checkedEmail.indexOf(spoon.spoon_email)],
				}"
				:key="spoon.spoon_email"
				v-for="spoon in appliedSpoons"
				@click="doSelect(spoon)"
			>
				<!-- <div
				class="col-xl-4 col-md-6 col-sm-12 mb-4"
				:class="{
					disabled:
						spoon.spoon_email ===
						checkedEmail[checkedEmail.indexOf(spoon.spoon_email)],
					enabled:
						spoon.spoon_email !==
						checkedEmail[checkedEmail.indexOf(spoon.spoon_email)],
				}"
				:key="spoon.spoon_email"
				v-for="spoon in appliedSpoons"
				@click="doSelect(spoon)"
			> -->
				<userCard
					:email="spoon.spoon_email"
					:gender="spoon.spoon_gender"
					:nickname="spoon.spoon_nickname"
					:profile_image="spoon.spoon_profile_image"
					:age_range="spoon.spoon_age_range"
					:dining_score="spoon.spoon_dining_score"
					:dining_spoons_description="spoon.dining_spoon_description"
				/>
			</div>
		</div>
		<div
			class="pt-5"
			style="
				display: flex;
				flex-flow: row wrap;
				justify-content: center;
				align-item: center;
			"
			v-if="appliedSpoons.length === 0"
		>
			이 밥상에 신청한 숟갈이 없습니다.
		</div>
	</div>
</template>
<script>
import ButtonModuleForSelectSpoon from '@/components/babsangselect/ButtonModuleForSelectSpoon';
import userCard from '@/components/profile/UserCard';
export default {
	name: 'BabsangSelect',
	components: { userCard, ButtonModuleForSelectSpoon },
	data() {
		return {
			babsangMessage: '',
			babsangInfo: {},
			babsangDetailData: [],
			appliedSpoons: [], // 신청한 숟갈
			selectedSpoons: [], // 현재 선택한 숟갈
			fixedSpoons: [], // 신청한 숟갈 중 이미 선택된 숟갈
			checkedEmail: [], // 현재 선택한 숟갈의 이메일(함께할 숟갈 화면 표시용)
		};
	},
	computed: {
		buttonSignal: function () {
			return this.selectedSpoons.length - (this.babsangInfo.dining_count - 1);
		},
		mixSpoons: function () {
			return [...this.fixedSpoons, ...this.selectedSpoons];
		},
	},
	setup() {},
	created() {},
	mounted() {
		this.getBabsangInfo();
		this.getBabsangSpoons();
		console.log(this.mixSpoons);
		// console.log(this.$store.state.user.userData);
	},
	unmounted() {},
	methods: {
		// 신청한 숟갈, 선택된 숟갈 정보 가져오기
		async getBabsangSpoons() {
			const loader = this.$loading.show({ canCancel: false });

			const temp = await this.$get(
				`https://nicespoons.com/api/v1/babsang/${this.$route.query.babsangId}/babsangSpoons`,
			);
			this.appliedSpoons = temp.result.filter(spoon => spoon.apply_yn === 'Y');
			// console.log('신청한 숟갈 : ', this.appliedSpoons);
			this.fixedSpoons = this.appliedSpoons.filter(
				spoon => spoon.selected_yn === 'Y',
			);
			// console.log('이미 선택된 숟갈 : ', this.fixedSpoons);
			// console.log('이미 선택된 숟갈 : ', this.fixedSpoons[0]);
			this.checkedEmail = this.fixedSpoons.map(s => s.spoon_email);

			loader.hide();
		},
		// 밥상 정보 가져오기
		async getBabsangInfo() {
			const loader = this.$loading.show({ canCancel: false });

			const temp = (
				await this.$get(
					`https://nicespoons.com/api/v1/babsang/${this.$route.query.babsangId}`,
				)
			).result[0];
			this.babsangInfo = temp;
			// console.log('밥상 정보 : ', this.babsangInfo);
			// console.log('밥상 정보 temp : ', temp);

			loader.hide();
		},
		// 밥장의 숟갈 선정(확정)
		async pickSpoon(spoon_email) {
			await this.$put(
				`https://nicespoons.com/api/v1/babsang/${this.$route.query.babsangId}/babsangSpoons?type=pick`,
				{
					spoon_email: spoon_email,
					param: {
						selected_yn: 'Y',
					},
				},
			);
		},
		// 숟갈 선택 취소(이미 확정된 숟갈의 경우 취소시 취소 안내 메시지 밝송)
		doCancel(spoon) {
			console.log('선택 취소');
			console.log(spoon);
			console.log('doCancle_fixedSpoons :', this.fixedSpoons);

			console.log(this.fixedSpoons.indexOf(spoon));

			if (this.fixedSpoons.indexOf(spoon) >= 0) {
				console.log('이미 선택된 숟갈의 확정 취소', spoon);
				this.cancleSpoon(spoon);
			} else {
				console.log('지금 선택 중인 숟갈의 취소', spoon);
				this.selectedSpoons = this.selectedSpoons.filter(
					s => s.spoon_email !== spoon.spoon_email,
				);
				this.checkedEmail = this.checkedEmail.filter(
					email => email !== spoon.spoon_email,
				);
			}
		},
		// 받장의 숟갈 취소(확정 취소 - 선정 메일 발송 완료된 이후)
		async cancleSpoon(spoon) {
			this.$swal({
				title: `이 숟갈을 빼시겠습니까?`,
				text: `이미 확정 안내를 받으신 ${spoon.spoon_nickname}님께 실례가 될 수 있으므로 신중하게 결정해 주세요!`,
				icon: 'warning',
				showCancelButton: true,
				iconColor: '#ffcb00',
				confirmButtonColor: '#ffcb00',
				// cancelButtonColor: '#f4f4f4',
				cancelButtonColor: '#d33',
				cancelButtonText: '취소',
				confirmButtonText: '숟갈 빼기',
			}).then(async result => {
				if (result.isConfirmed) {
					const loader = this.$loading.show({ canCancel: false });

					let r = await this.$put(
						`https://nicespoons.com/api/v1/babsang/${this.$route.query.babsangId}/babsangSpoons?type=pickCancel`,
						{
							spoon_email: spoon.spoon_email,
							param: {
								selected_yn: 'N',
								// cancel_date: '2022-06-10',
							},
						},
					);

					loader.hide();

					console.log(r);
					if (r.status === 200) {
						this.$swal({
							title: `${spoon.spoon_nickname}님의 숟갈 빼기 완료!`,
							icon: 'success',
							iconColor: '#ffcb00',
							confirmButtonText: '확인',
							confirmButtonColor: '#ffcb00',
						});

						// 함께할 숟갈 화면에서 해당 숟갈 빼기
						this.fixedSpoons = this.fixedSpoons.filter(
							s => s.spoon_email !== spoon.spoon_email,
						);
						this.checkedEmail = this.checkedEmail.filter(
							email => email !== spoon.spoon_email,
						);
					} else if (r.status === 501) {
						this.$swal({
							title: `${spoon.spoon_nickname}님의 숟갈 빼기 실패!`,
							icon: 'warning',
							iconColor: '#ffcb00',
							confirmButtonText: '확인',
							confirmButtonColor: '#ffcb00',
						});
					}
				}
			});
		},
		// 선택된 숟갈 메시지 발송
		async sendMessage(spoon_email) {
			await this.$post('https://nicespoons.com/api/v1/message', {
				param: {
					receiver_email: spoon_email,
					dining_table_id: this.babsangInfo.id,
					message_type: 'S',
					message_description: this.babsangMessage,
				},
			});
		},
		// 선택된 숟갈 확정 및 메시지 발송
		async doFinalSpoons() {
			const loader = this.$loading.show({ canCancel: false });

			for (let spoon of this.selectedSpoons) {
				this.pickSpoon(spoon.spoon_email); // 숟갈 확정
				this.sendMessage(spoon.spoon_email); // 확정된 숟갈 메시지 발송
			}

			loader.hide();
		},
		writeMessage() {
			let dateTime = this.babsangInfo.dining_datetime;
			this.babsangMessage = `축하합니다 ^O^ ${this.babsangInfo.restaurant_name} 밥상(${dateTime})의 숟갈로 선정되셨습니다.`;
		},
		showButton() {
			// if (this.selectedSpoons.length === this.diningTableSpoons.dining_count) {
			if (this.selectedSpoons.length > 0) {
				return true;
			} else {
				return false;
			}
		},
		doSelect(spoon) {
			console.log('doSelect1_spoon :', spoon);
			console.log('doSelect1_fixedSpoons :', this.fixedSpoons);

			if (this.selectedSpoons.length < this.babsangInfo.dining_count - 1) {
				this.selectedSpoons.push(spoon);
				this.checkedEmail.push(spoon.spoon_email);
				this.writeMessage();
				console.log('mixSpoons : ', this.mixSpoons);
			}
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

// 메시지 발송 버튼
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
