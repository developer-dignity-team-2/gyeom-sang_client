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
											'btn btn-primary': showMessage === 'R',
											'btn btn-outline-primary': showMessage === 'S',
										}"
										style="width: 100%"
										@click="selectReceivedMessage"
									>
										<!-- <button type="button" class="btn btn-outline-primary"> -->
										받은 메세지
									</button>
									<button
										type="button"
										:class="{
											'btn btn-primary': showMessage === 'S',
											'btn btn-outline-primary': showMessage === 'R',
										}"
										style="width: 100%"
										@click="selectSentMessages"
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
										<ButtonModule @button-signal="buttonSignal" />
									</div>
								</div>
								<!-- 삭제 -->
								<div
									class="col-xl-2 col-md-3btn-group"
									role="group"
									aria-label="Basic example"
								>
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
					<!-- pagination -->
					<div v-if="showMessage === 'R' && receivedMessage.length !== 0">
						<grid-pagination
							:headers="headers"
							:items="receivedMessage"
							@click-buttons="handleClickButtons"
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
						v-if="showMessage === 'R' && receivedMessage.length === 0"
					>
						받은 메시지가 없습니다.
					</div>
					<div v-if="showMessage === 'S' && sentMessage.length !== 0">
						<grid-pagination
							:headers="headers"
							:items="sentMessage"
							@click-buttons="handleClickButtons"
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
						v-if="showMessage === 'S' && sentMessage.length === 0"
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
export default {
	nickname: 'MypagMessage',
	components: { CompUserProfile, ButtonModule, GridPagination },
	data() {
		return {
			userMessages: [],
			receivedMessage: [],
			sentMessage: [],
			showMessage: 'R', // 받은 메시지 R, 보낸 메시지 S
			headers: [
				{
					title: '닉네임',
					key: 'sender_nickname',
				},
				{ title: '내용', key: 'message_description' },
				{ title: '장소', key: 'restaurant_location' },
				{ title: '날짜', key: 'create_date' },
			],
		};
	},
	setup() {},
	created() {
		this.getMessages();
	},
	mounted() {},
	unmounted() {},
	methods: {
		buttonSignal(sign) {
			if (this.showMessage === 'R') {
				let tmp = this.receivedMessage;
				if (sign === 'open') {
					console.log('open');
					tmp = this.controlMessage(tmp, sign);
					this.receivedMessage = tmp;
				} else if (sign === 'close') {
					console.log('close');
					tmp = this.controlMessage(tmp, sign);
					console.log('후 : ', tmp);
					this.receivedMessage = tmp;
				} else if (sign === 'young') {
					console.log('young');
					tmp = this.controlMessage(tmp, sign);
					this.receivedMessage = tmp;
				} else if (sign === 'old') {
					console.log('old');
					tmp = this.controlMessage(tmp, sign);
					this.receivedMessage = tmp;
				}
			} else if (this.showMessage === 'S') {
				console.log(sign);
			}
		},
		selectReceivedMessage() {
			this.showMessage = 'R';
		},
		selectSentMessages() {
			this.showMessage = 'S';
		},
		// 메시지 필터, 정렬 모듈
		controlMessage(data, sign) {
			if (sign === 'open') {
				// 보낸 메시지(모집중)
				const rstMessage = data.filter(m => m.dining_status < 1);
				console.log('모집 중');
				console.log(rstMessage);
				return rstMessage;
			} else if (sign === 'close') {
				// 보낸 메시지(모집완료)
				const rstMessage = data.filter(m => m.dining_status > 0);
				console.log('모집 마감');
				console.log(rstMessage);
				return rstMessage;
			} else if (sign === 'young') {
				// 보낸 메시지(최신순)
				const rstMessage = data.sort((a, b) => b.id - a.id);
				console.log('최신순');
				console.log(rstMessage);
				return rstMessage;
			} else if (sign === 'old') {
				// 보낸 메시지(오래된 순)
				const rstMessage = data.sort((a, b) => a.id - b.id);
				console.log('오래된 순');
				console.log(rstMessage);
				return rstMessage;
			}
		},
		// 메시지 정보 가져오기
		async getMessages() {
			const userMessages = await this.$get(
				'https://nicespoons.com/api/v1/message',
			);
			this.userMessages = userMessages.result;
			console.log(userMessages);
			// console.log(this.$store.state.user.userData.email);

			// 받은 메시지
			let tmpReceivedMessage = this.userMessages.filter(
				message =>
					message.sender_email !== this.$store.state.user.userData.email,
			);
			// 받은 메시지 초기화(모집중, 최신순)
			tmpReceivedMessage = this.controlMessage(
				this.controlMessage(tmpReceivedMessage, 'open'),
				'young',
			);
			this.receivedMessage = tmpReceivedMessage;

			// 보낸 메시지
			let tmpSentMessage = this.userMessages.filter(
				message =>
					message.sender_email === this.$store.state.user.userData.email,
			);
			// 받은 메시지 초기화(모집중, 최신순)
			tmpSentMessage = this.controlMessage(
				this.controlMessage(tmpSentMessage, 'open'),
				'young',
			);
			this.sentMessage = tmpSentMessage;
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
						r = await this.$delete(
							`https://nicespoons.com/api/v1/message/${chk}`,
						);
					}

					loader.hide();

					console.log(r);
					if (r.status === 200) {
						this.$swal({
							title: '메시지가 삭제되었습니다.',
							icon: 'success',
							iconColor: '#ffcb00',
							confirmButtonText: '확인',
							confirmButtonColor: '#ffcb00',
						});
						this.$store.commit('message/checkedMessage', []); // vuex 초기화
						this.getMessages(); // 메시지 새로 고침
					} else if (r.status === 501) {
						this.$swal({
							title: '메시지 삭제 실패!',
							text: `삭제하려는 메시지가 ${r.count}건 존재합니다.`,
							icon: 'warning',
							iconColor: '#ffcb00',
							confirmButtonText: '확인',
							confirmButtonColor: '#ffcb00',
						});
						this.getMessages();
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
}
.btn-outline-primary {
	color: #575757;
	border-color: #ffcb00;
	&:hover {
		background-color: #fff9e1;
	}
}

// 모집 중/모집 완료, 최신순/오래된 순 버튼
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
