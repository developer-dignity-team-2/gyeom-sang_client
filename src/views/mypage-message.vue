<template>
	<div class="container mb-5">
		<div class="row my-4">
			<!-- 네브 -->
			<div class="col-xl-3 col-md-4 col-sm-12">
				<CompUserProfile />
			</div>
			<!-- 본문 -->
			<div class="col-xl-9 col-md-8 col-sm-12">
				<div class="col border rounded p-3">
					<h3>메세지함</h3>

					<!-- 버튼 -->
					<div class="row mt-4 mb-4">
						<!-- 받은메세지, 보낸메시지 -->
						<div class="col-xl-4 col-12 mb-2">
							<div class="row">
								<div
									class="col-12 btn-group"
									role="group"
									aria-label="Basic example"
								>
									<button
										type="button"
										:class="{
											'btn btn-primary':
												$store.state.button.showMessage === 'R',
											'btn btn-outline-primary':
												$store.state.button.showMessage === 'S',
										}"
										style="width: 100%"
										@click="showMessages('R')"
									>
										받은 메세지
									</button>
									<button
										type="button"
										:class="{
											'btn btn-primary':
												$store.state.button.showMessage === 'S',
											'btn btn-outline-primary':
												$store.state.button.showMessage === 'R',
										}"
										style="width: 100%"
										@click="showMessages('S')"
									>
										보낸 메세지
									</button>
								</div>
							</div>
						</div>
						<!-- 모집중/모집 마감/전체 보기, 최신순/오래된 순, 삭제 -->
						<div class="col-xl-8 col-12 mb-3">
							<div class="row">
								<div class="col-xl-10 col-md-12 col-sm-12 mb-2">
									<div class="row">
										<ButtonModule />
									</div>
								</div>
								<!-- 삭제 -->
								<div class="col-2" role="group" aria-label="Basic example">
									<button
										type="button"
										class="btn btn-danger"
										:disabled="
											this.$store.state.message.checkedMessage.length === 0
										"
										@click="doDelete"
									>
										<i class="bi bi-trash3-fill"></i>
										삭제
									</button>
								</div>
							</div>
						</div>
					</div>
					<div></div>
					<!-- pagination -->
					<div
						v-if="
							$store.state.button.showMessage === 'R' &&
							messagesData.length !== 0
						"
					>
						<grid-pagination
							:headers="headers"
							:items="messagesData"
							@click-buttons="handleClickButtons"
							v-if="window.width > 767"
						/>
						<mobile-form
							:items="messagesData"
							@click-buttons="handleClickButtons"
							v-if="window.width <= 767"
						/>
					</div>
					<div
						class="p-5"
						style="
							display: flex;
							flex-flow: row wrap;
							justify-content: center;
							align-item: center;
						"
						v-if="
							$store.state.button.showMessage === 'R' &&
							messagesData.length === 0
						"
					>
						받은 메시지가 없습니다.
					</div>
					<div
						v-if="
							$store.state.button.showMessage === 'S' &&
							messagesData.length !== 0
						"
					>
						<grid-pagination
							:headers="headers"
							:items="messagesData"
							@click-buttons="handleClickButtons"
							v-if="window.width > 767"
						/>
						<mobile-form
							:items="messagesData"
							@click-buttons="handleClickButtons"
							v-if="window.width <= 767"
						/>
					</div>
					<div
						class="p-5"
						style="
							display: flex;
							flex-flow: row wrap;
							justify-content: center;
							align-item: center;
						"
						v-if="
							$store.state.button.showMessage === 'S' &&
							messagesData.length === 0
						"
					>
						보낸 메시지가 없습니다.
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CompUserProfile from '@/components/profile/CompUserProfile';
import ButtonModule from '@/components/profile/ButtonModule';
import GridPagination from '@/components/pagination/GridPagination';
import MobileForm from '@/components/pagination/MobileForm';
export default {
	nickname: 'MypagMessage',
	components: { CompUserProfile, ButtonModule, GridPagination, MobileForm },
	data() {
		return {
			// showMessage: 'R', // 받은 메시지 신호 R, 보낸 메시지 신호 S
			signArr: [], // 신호 순서
			messagesData: [], // 가공 완료된 메시지 데이터
			headers: [
				[
					{
						title: '닉네임',
						key: 'sender_nickname',
					},
					{ title: '내용', key: 'message_description' },
					{ title: '장소', key: 'restaurant_location' },
					{ title: '작성 일시', key: 'create_date' },
				],
				[
					{
						title: '닉네임',
						key: 'receiver_nickname',
					},
					{ title: '내용', key: 'message_description' },
					{ title: '장소', key: 'restaurant_location' },
					{ title: '작성 일시', key: 'create_date' },
				],
			],
			window: { width: 0, height: 0 }, // 모바일 사이즈 화면 관련
		};
	},
	setup() {},
	created() {
		// 모바일 사이즈 화면 관련
		window.addEventListener('resize', this.handleResize);
		this.handleResize();
	},
	watch: {
		// 모집중/모집마감 버튼 이벤트 순서 결정
		'$store.state.button.buttonSign': function () {
			this.makeSequence();
			this.makeMessageResult();
		},
		// 임박(정렬) 버튼 이벤트 순서 결정
		'$store.state.button.buttonSignYO': function () {
			this.makeSequence();
			this.makeMessageResult();
		},
	},
	mounted() {
		// this.showReceivedMessages();
		this.showMessages(this.$store.state.button.showMessage);
	},
	unmounted() {
		window.removeEventListener('resize', this.handleResize); // 모바일 사이즈 화면 관련
	},
	methods: {
		// 모바일 사이즈 화면 관련
		handleResize() {
			this.window.width = window.innerWidth;
			this.window.height = window.innerHeight;
		},
		// 메시지 버튼 이벤트
		showMessages(sign) {
			this.$store.commit('button/showMessage', sign);
			this.makeSequence();
			this.makeMessageResult();
		},
		makeSequence() {
			this.signArr = [];
			this.signArr.push(this.$store.state.button.showMessage);
			this.signArr.push(this.$store.state.button.buttonSign);
			this.signArr.push(this.$store.state.button.buttonSignYO);
		},
		// 밥상 조회 최종 결과(조회, 필터, 정렬 적용)
		async makeMessageResult() {
			// 서버로 부터 밥상 목록 가져오기
			let tempResult = [];
			if (this.signArr[0] === 'R') {
				tempResult = await this.getReceivedMessages();
			} else {
				tempResult = await this.getSentMessages();
			}

			// 필터 수행
			if (this.signArr[1] === 'open') {
				tempResult = this.filterMessage(tempResult, 'open');
			} else {
				tempResult = this.filterMessage(tempResult, 'close');
			}

			// 정열 수행
			if (this.signArr[2] === 'young') {
				tempResult = this.doOrder(tempResult, 'young');
			} else {
				tempResult = this.doOrder(tempResult, 'old');
			}

			this.messagesData = tempResult;
		},
		// 받은 메시지 정보 가져오기
		async getReceivedMessages() {
			const loader = this.$loading.show({ canCancel: false });

			const userMessages = (await this.$get('/message')).result;

			loader.hide();

			// 받은 메시지
			let tmpReceivedMessage = userMessages.filter(
				message =>
					message.sender_email !== this.$store.state.user.userData.email,
			);

			return tmpReceivedMessage;
		},
		// 보낸 메시지 정보 가져오기
		async getSentMessages() {
			const loader = this.$loading.show({ canCancel: false });

			const userMessages = (await this.$get('/message')).result;

			loader.hide();

			// 보낸 메시지
			let tmpSentMessage = userMessages.filter(
				message =>
					message.sender_email === this.$store.state.user.userData.email,
			);

			return tmpSentMessage;
		},
		// 메시지 필터(모집중/모집마감)
		filterMessage(messages, sign) {
			if (sign === 'close') {
				let close = messages.filter(b => b.dining_status > 0);
				return close;
			} else {
				let open = messages.filter(b => b.dining_status === 0);
				return open;
			}
		},
		// 밥상 정렬(최신순/오래된 순)
		doOrder(messages, sign) {
			if (sign === 'old') {
				let asc = messages.sort((a, b) => a.id - b.id);
				return asc;
			} else {
				let desc = messages.sort((a, b) => b.id - a.id);
				return desc;
			}
		},
		// Pagination
		handleClickButtons(method, id) {
			if (method === 'showEditModal') {
				this.modalDetailPayload.id = id;
				this.showEditModal();
			} else if (method === 'showEList') {
				this.showEList(id);
			} else if (method === 'sendMessage') {
				this.sendMessage(id);
			}
		},
		doDelete() {
			this.$swal({
				title: '메시지를 삭제하시겠습니까?',
				text: '삭제된 메시지는 복원되지 않습니다.',
				icon: 'warning',
				showCancelButton: true,
				iconColor: '#ffcb00',
				confirmButtonColor: '#ffcb00',
				// cancelButtonColor: '#f4f4f4',
				cancelButtonColor: '#d33',
				cancelButtonText: '취소',
				confirmButtonText: '삭제',
			}).then(async result => {
				if (result.isConfirmed) {
					const loader = this.$loading.show({ canCancel: false });

					let checked = this.$store.state.message.checkedMessage;
					let r = [];

					for (let chk of checked) {
						r = await this.$delete(`/message/${chk}`);
					}

					loader.hide();

					if (r.status === 200) {
						this.$swal({
							title: '메시지가 삭제되었습니다.',
							icon: 'success',
							iconColor: '#ffcb00',
							confirmButtonText: '확인',
							confirmButtonColor: '#ffcb00',
						});
						this.$store.commit('message/checkedMessage', []); // vuex 초기화
						this.showMessages(this.$store.state.button.showMessage); // 메시지 새로 고침
					} else if (r.status === 501) {
						this.$swal({
							title: '메시지 삭제 실패!',
							text: `삭제하려는 메시지가 ${r.count}건 존재합니다.`,
							icon: 'warning',
							iconColor: '#ffcb00',
							confirmButtonText: '확인',
							confirmButtonColor: '#ffcb00',
						});
						this.showMessages(this.$store.state.button.showMessage); // 메시지 새로 고침
					}
				}
			});
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

// 받은 메시지/보낸 메시지 선택 버튼
.btn-primary {
	color: #575757;
	background-color: #ffcb00;
	border-color: #ffcb00;
	pointer-events: none;
	height: 38px;
}
.btn-outline-primary {
	color: #575757;
	border-color: #ffcb00;
	&:hover {
		background-color: #fff9e1;
	}
	height: 38px;
}

// 모집 중/모집 완료, 최신순/오래된 순 버튼
.btn-container {
	display: inline-block;
	position: relative;
	height: 1em;
}

button {
	position: absolute;
	white-space: nowrap;
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
