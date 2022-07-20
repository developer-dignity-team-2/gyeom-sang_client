import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/main.vue';
import store from '../store';

const routes = [
	{
		path: '/',
		name: 'main',
		component: Main,
		meta: { authRequired: false },
	},
	{
		path: '/babsang-create/:babsangId?',
		name: 'BabsangCreate',
		component: () => import('../views/babsang-create'),
		meta: { authRequired: true },
	},
	{
		path: '/babsang/:babsangId?',
		name: 'Babsang',
		component: () => import('../views/babsang'),
		meta: { authRequired: true },
	},
	{
		path: '/babsang-select',
		name: 'BabsangSelect',
		component: () => import('../views/babsang-select'),
		meta: { authRequired: true },
	},
	{
		path: '/mypage/profile',
		name: 'MypageProfile',
		component: () => import('../views/mypage-profile'),
		meta: { authRequired: true },
	},
	{
		path: '/mypage/babsang',
		name: 'MypageBabsang',
		component: () => import('../views/mypage-babsang'),
		meta: { authRequired: true },
	},
	{
		path: '/mypage/favorites',
		name: 'MypageFavorites',
		component: () => import('../views/mypage-favorites'),
		meta: { authRequired: true },
	},
	{
		path: '/mypage/score',
		name: 'MypageScore',
		component: () => import('../views/mypage-score'),
		meta: { authRequired: true },
	},
	{
		path: '/mypage/message',
		name: 'MypageMessage',
		component: () => import('../views/mypage-message'),
		meta: { authRequired: true },
	},
	{
		path: '/mypage/message-view',
		name: 'MypageMessageView',
		component: () => import('../views/mypage-message-view'),
		meta: { authRequired: true },
	},
	{
		path: '/babsang-score',
		name: 'GiveScore',
		component: () => import('../views/babsang-score'),
		meta: { authRequired: true },
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	if (
		to.matched.some(function (routeInfo) {
			return routeInfo.meta.authRequired && !store.state.user.isUser;
		})
	) {
		alert('로그인해 주세요!');
		router.push({
			path: '/',
		});
	} else {
		next(); // 페이지 전환
	}
});

export default router;
