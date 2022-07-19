export const button = {
	namespaced: true,
	state() {
		return {
			buttonSign: 'open',
			buttonSignYO: 'young',
			checkedSign: false,
			showMessage: 'R', // 받은 메시지 보기 신호 R, 보낸 메시지 보기 신호 S
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
	},

	actions: {},
};
