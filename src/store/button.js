export const button = {
	namespaced: true,
	state() {
		return {
			buttonSign: 'open',
			buttonSignYO: 'young',
			checkedSign: false,
			showMessage: 'R', // 받은 메시지 보기 신호 R, 보낸 메시지 보기 신호 S
			buttonSignHL: 'H', // 식사 매너 점수 높은 순 H, 식사 매너 점수 낮은 순 L
			buttonSignFS: 'F', // 신청이 빠른 순 F, 신청이 느린 순 S
		};
	},

	getters: {},

	mutations: {
		buttonSign(state, data) {
			state.buttonSign = data;
		},
		buttonSignYO(state, data) {
			state.buttonSignYO = data;
		},
		checkedSign(state, data) {
			state.checkedSign = data;
		},
		showMessage(state, data) {
			state.showMessage = data;
		},
		// 숟갈 선택 화면용
		buttonSignHL(state, data) {
			state.buttonSignHL = data;
		},
		// 숟갈 선택 화면용
		buttonSignFS(state, data) {
			state.buttonSignFS = data;
		},
	},

	actions: {},
};
