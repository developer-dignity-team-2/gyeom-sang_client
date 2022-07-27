import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
const instance = axios.create({
	headers: {
		authorization: `Bearer ${localStorage.getItem('jwt')}`,
	},
});
// ↑ 위에 코드가 실행 될 때 localStorage에 jwt값이 없어 토큰에 req.header가 안담겨서 감
export default {
	data() {
		return {};
	},
	computed: {
		VUE_APP_DOMAIN_URL() {
			return process.env.VUE_APP_DOMAIN_URL;
		},
	},
	methods: {
		async $get(url) {
			return (await instance.get(url)).data;
		},
		async $post(url, data) {
			return await instance.post(url, data);
		},
		async $put(url, data) {
			return await instance.put(url, data);
		},
		async $delete(url) {
			return await instance.delete(url);
		},
		async $upload(url, file) {
			const formData = new FormData();
			formData.append('file', file);
			return await instance.post(url, formData).then(res => {
				return res.data;
			});
		},
		// router mixins
		$goBack() {
			this.$router.go(-1);
		},
		$goMain() {
			this.$router.push({
				path: '/',
			});
		},
		// 연령대
		$ageRangeForm(age) {
			const front = String(age).slice(0, 1);
			let range = '';
			switch (front) {
				case '1':
					range = '10대';
					break;
				case '2':
					range = '20대';
					break;
				case '3':
					range = '30대';
					break;
				case '4':
					range = '40대';
					break;
				case '5':
					range = '50대';
					break;
				case 6:
					range = '60대';
					break;
				case 7:
					range = '70대';
					break;
				case 8:
					range = '80대';
					break;
				case 9:
					range = '90대';
					break;
			}
			return range;
		},
	},
};
