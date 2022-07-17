export const button = {
	namespaced: true,
	state() {
		return {
			buttonOCSign: 'open',
			buttonYOSign: 'young',
		};
	},

	getters: {},

	mutations: {
		getButtonOCSign(state, sign) {
			state.buttonOCSign = sign;
		},
		getButtonYOSign(state, sign) {
			state.buttonYOSign = sign;
		},
	},

	actions: {},
};
