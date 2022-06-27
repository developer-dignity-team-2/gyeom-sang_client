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
			let tmp = [];
			tmp.push(data);
			console.log(tmp);
			state.scoreResult.push(tmp);
		},
	},

	actions: {},
};
