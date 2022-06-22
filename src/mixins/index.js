import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

export default {
	data() {
		return {};
	},
	methods: {
		async $get(url) {
			return (
				await axios.get(url).catch(e => {
					console.log(e);
				})
			).data;
		},
	},
};
