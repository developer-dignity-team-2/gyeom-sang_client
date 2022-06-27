import { createStore } from 'vuex';

import { user } from './user';
import { score } from './score';

export default createStore({
	modules: {
		user,
		score,
	},
});
