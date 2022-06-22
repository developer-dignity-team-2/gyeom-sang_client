import axios from 'axios';
export default {
	namespaced: true,
	state: () => ({
		babsangData: [],
	}),

	getters: {
		getBabsangData(state) {
			// console.log('gettter');
			// console.log(state.babsangData);
			return state.babsangData;
		},
		// getBabsangData: state => state.babsangData,
	},

	mutations: {
		setBabsangData(state, payload) {
			state.babsangData = payload;
			// console.log('mutation');
			console.log(payload);
			// console.log(state.babsangData);
		},
	},

	actions: {
		loadBabsangData({ commit }) {
			return axios.get('https://nicespoons.com/api/v1/babsang').then(res => {
				const res_data = res.data.result;
				// console.log(res_data);
				commit('setBabsangData', res_data);
				// if (payload.onLoad !== undefined)
				// payload.onLoad(getters.getBabsangData);
			});
		},
		// loadBabsangData(context) {
		// 	axios.get('https://nicespoons.com/api/v1/babsang').then(res => {
		// 		console.log(res.data.result);
		// 		// context.commit('setBabsangData', res.data.result);
		// 		context.state.babsangData = res.data.result;
		// 	});
		// },

		upLoadBabsang(context, payload) {
			axios.post('https://nicespoons.com/api/v1/babsang', {
				param: {
					restaurant_name: payload.restaurant_name,
					dining_datetime: payload.dining_datetime,
					recruit_start_date: payload.recruit_start_date,
					recruit_end_date: payload.recruit_end_date,
					gender_check: payload.gender_check,
					dining_description: payload.dining_description,
					restaurant_location: payload.restaurant_location,
					dining_thumbnail: payload.dining_thumbnail,
				},
			});
		},
	},
};
