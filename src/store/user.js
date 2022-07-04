export const user = {
	namespaced: true,
	state() {
		return {
			// userInfo: {
			// 	email: 'spoon1@gmail.com',
			// 	gender: 'F',
			// 	nickname: '숟갈1',
			// 	profile_image: require('../assets/img/users/w1.png'),
			// 	profile_description:
			// 		'개발자의 품격 4기 2팀에서 구현 중인 혼밥 매칭 서비스 "겸상"입니다.',
			// 	age_range: '20~30',
			// 	dining_score: 4.5,
			// },
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
