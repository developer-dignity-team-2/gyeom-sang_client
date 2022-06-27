export const score = {
	namespaced: true,
	state() {
		return {
			scoreResult: [],
		};
	},

	getters: {},

	mutations: {
		babsangScore(state, data) {
			state.scoreResult.push(data);
		},
	},

	actions: {},
};
