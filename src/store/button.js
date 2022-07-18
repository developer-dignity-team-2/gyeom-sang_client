export const button = {
	namespaced: true,
	state() {
		return {
			buttonSign: 'open',
			buttonSignYO: 'young',
			checkedSign: [],
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
	},

	actions: {},
};
