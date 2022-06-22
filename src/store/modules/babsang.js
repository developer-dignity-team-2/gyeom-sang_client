import axios from 'axios';
export default {
	namespaced: true,
	state: () => ({
		babsangData: [],
	}),

	getters: {
		getBabsangData(state) {
			return state.babsangData;
		},
	},

	mutations: {
		setBabsangData(state, payload) {
			state.babsangData = payload;
			console.log(payload);
		},
	},

	actions: {
		loadBabsangData({ commit }) {
			axios.get('https://nicespoons.com/api/v1/babsang').then(res => {
				const res_data = res.data.result;
				commit('setBabsangData', res_data);
			});
		},

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
