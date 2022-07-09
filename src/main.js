import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mixins from './mixins';

/* Sweetalert */
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

/* vue-loading-overlay */
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

/* bootstrap */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faSpoon } from '@fortawesome/free-solid-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import dotenv from 'dotenv';

dotenv.config();
/* add icons to the library */
library.add(faStar, faImage, faLocationDot, faSpoon, faBowlFood);

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(store)
	.use(router)
	.use(VueSweetalert2)
	.use(VueLoading)
	.mixin(mixins)
	.mount('#app');

window.Kakao.init(process.env.VUE_APP_KAKAO_API_KEY);
