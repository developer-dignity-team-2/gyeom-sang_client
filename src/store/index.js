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
			let bodyEl = document.documentElement.querySelector('body');
			if (state.isShow) {
				bodyEl.style.overflow = 'hidden';
			} else {
				bodyEl.style.overflow = 'auto';
			}
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
