import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/main.vue';

const routes = [
	{
		path: '/',
		name: 'main',
		component: Main,
	},
	{
		path: '/babsang-create',
		name: 'BabsangCreate',
		component: () => import('../views/babsang-create'),
	},
	{
		path: '/babsang/:babsangId?',
		name: 'Babsang',
		component: () => import('../views/babsang'),
	},
	{
		path: '/babsang-select',
		name: 'BabsangSelect',
		component: () => import('../views/babsang-select'),
	},
	{
		path: '/mypage/profile',
		name: 'MypageProfile',
		component: () => import('../views/mypage-profile'),
	},
	{
		path: '/mypage/babsang',
		name: 'MypageBabsang',
		component: () => import('../views/mypage-babsang'),
	},
	{
		path: '/mypage/favorites',
		name: 'MypageFavorites',
		component: () => import('../views/mypage-favorites'),
	},
	{
		path: '/mypage/score',
		name: 'MypageScore',
		component: () => import('../views/mypage-score'),
	},
	{
		path: '/mypage/message',
		name: 'MypageMessage',
		component: () => import('../views/mypage-message'),
	},
	{
		path: '/mypage/message-view',
		name: 'MypageMessageView',
		component: () => import('../views/mypage-message-view'),
	},
	{
		path: '/babsang-score',
		name: 'GiveScore',
		component: () => import('../views/babsang-score'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
