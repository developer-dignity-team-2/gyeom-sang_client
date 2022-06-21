import axios from 'axios';
export default {
	namespaced: true,
	state: () => ({
		babsangInfo: {},
	}),

	getters: {},

	mutations: {},

	actions: {
		upLoadBabsang(context, payload) {
			const url = 'https://nicespoons.com/api/v1/babsang';
			axios.post(url, {
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
