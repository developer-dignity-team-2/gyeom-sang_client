export const message = {
	namespaced: true,
	state() {
		return {
			checkedMessage: [],
		};
	},

	getters: {},

	mutations: {
		checkedMessage(state, data) {
			state.checkedMessage = data;
		},
	},

	actions: {},
};
