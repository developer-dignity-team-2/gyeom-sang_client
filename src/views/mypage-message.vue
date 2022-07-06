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
										<ButtonModule @send-message="sendMessage" />
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
										:disabled="checked.length === 0"
									>
										<i class="bi bi-trash3-fill"></i>
										삭제
									</button>
								</div>
							</div>
						</div>
					</div>
					<!-- pagination -->
					<div v-if="showMessage === 'R'">
						<grid-pagination
							:headers="headers"
							:items="receivedMessage"
							@click-buttons="handleClickButtons"
						/>
					</div>
					<div v-if="showMessage === 'S'">
						<grid-pagination
							:headers="headers"
							:items="sentMessage"
							@click-buttons="handleClickButtons"
						/>
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
			// checked_all: false,
			checked: [],
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
	mounted() {
		// this.sortDescDiningStatus();
	},
	unmounted() {},
	methods: {
		// sendMessage(data) {
		// 	if (this.showMessage === 'R') {
		// 		if (data === 'L') {
		// 			console.log(data);
		// 			this.receivedMessage = this.receivedMessage.sort(function (a, b) {
		// 				return b.create_date - a.create_date;
		// 			});
		// 			console.log(this.receivedMessage);
		// 		} else if (data === 'O') {
		// 			console.log(data);
		// 			this.receivedMessage = this.receivedMessage.sort(function (a, b) {
		// 				return a.create_date - b.create_date;
		// 			});
		// 			console.log(this.receivedMessage);
		// 		} else {
		// 			console.log(data);
		// 		}
		// 	} else {
		// 		console.log(data);
		// 	}
		// },
		sendMessage(data) {
			if (data === 'open') {
				const tmpReceivedMessage = [];
				tmpReceivedMessage.push(
					this.receivedMessage.filter(m => m.dining_status === 0),
				);
				console.log(tmpReceivedMessage);
			} else if (data === 'close') {
				console.log(1);
			} else if (data === 'young') {
				console.log('young');
			} else if (data === 'old') {
				console.log('old');
			}
			// let currentStatus = this.itemData.dining_status;
			// let status;
			// if (currentStatus === 0) {
			// 	status = '모집중';
			// } else if (currentStatus === 1) {
			// 	status = '모집 마감';
			// }
		},
		sortTime() {},
		sortDescDiningStatus() {
			console.log(
				[1, 3, 5].sort(function (a, b) {
					return b - a;
				}),
			);
			console.log(this.receivedMessage[0]);
		},
		// pagination
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
		selectReceivedMessage() {
			this.showMessage = 'R';
		},
		selectSentMessages() {
			this.showMessage = 'S';
		},
		async getMessages() {
			const userMessages = await this.$get(
				'https://nicespoons.com/api/v1/message',
			);
			this.userMessages = userMessages.result;
			// console.log(this.userMessages);
			// console.log(this.$store.state.user.userData.email);
			let tmpSentMessage = [];
			tmpSentMessage.push(
				this.userMessages.filter(
					message =>
						message.sender_email === this.$store.state.user.userData.email,
				),
			);
			this.sentMessage = tmpSentMessage[0];
			// console.log(this.sentMessage);
			let tmpReceivedMessage = [];
			tmpReceivedMessage.push(
				this.userMessages.filter(
					message =>
						message.sender_email !== this.$store.state.user.userData.email,
				),
			);
			this.receivedMessage = tmpReceivedMessage[0];
			console.log(this.receivedMessage);
		},
		// async getMessageDetail() {
		// 	const userMessages = await this.$get(
		// 		'https://nicespoons.com/api/v1/message/13',
		// 	);
		// 	console.log(userMessages);
		// },
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
