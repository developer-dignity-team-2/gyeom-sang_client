import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import { user } from './user';

export default createStore({
	state() {
		return {
			isShow: false,
		};
	},

	getters: {},

	mutations: {
		toggleShow(state) {
			state.isShow = !state.isShow;
			console.log(state.isShow);
		},
	},
	actions: {},
	modules: {
		user,
	},
	plugins: [
		createPersistedState({
			paths: ['user'],
		}),
	],
});
