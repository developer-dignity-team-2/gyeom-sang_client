import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import { user } from './user';
import { message } from './message';
import { button } from './button';

export default createStore({
	state() {
		return {
			isShow: false,
			isNavShow: true,
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
		setNavShow(state, payload) {
			this.state.isNavShow = payload;
		},
	},
	actions: {},
	modules: {
		user,
		message,
		button,
	},
	plugins: [
		createPersistedState({
			paths: ['user'],
		}),
	],
});
