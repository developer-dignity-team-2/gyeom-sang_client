import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import { user } from './user';
import { score } from './score';

export default createStore({
	modules: {
		user,
		score,
	},
	plugins: [
		createPersistedState({
			paths: ['user'],
		}),
	],
});
