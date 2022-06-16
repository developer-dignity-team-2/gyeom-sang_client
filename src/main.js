import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* bootstrap */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faTwitter, faUsers);

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(store)
	.use(router)
	.mount('#app');
