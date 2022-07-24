export const user = {
	namespaced: true,
	state() {
		return {
			userData: {},
			isUser: false, // 로그인 여부
		};
	},

	getters: {},

	mutations: {
		getUserData(state, data) {
			state.userData = data;
		},
		// guest와 user 분기처리
		userCheck(state, payload) {
			state.isUser = payload;
		},
	},

	actions: {},
};
