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
			let bodyEl = document.documentElement.querySelector('body');
			state.isShow = !state.isShow;
			if (state.isShow) {
				bodyEl.style.overflow = 'hidden';
			} else {
				bodyEl.style.overflow = 'auto';
			}
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
