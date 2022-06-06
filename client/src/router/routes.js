
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      { path: '/create-babsang', component: () => import('pages/CreateBabsang.vue') },
      { path: '/read-babsang', component: () => import('pages/ReadBabsang.vue') },
      { path: '/select-spoon', component: () => import('pages/SelectSpoon.vue') },
      { path: '/user-profile', component: () => import('pages/UserProfile.vue') },
      { path: '/join-babsang', component: () => import('pages/JoinBabsang.vue') },
      { path: '/wish-babsang', component: () => import('pages/WishBabsang.vue') },
      { path: '/message', component: () => import('pages/UserMessage.vue') },
      { path: '/message/read', component: () => import('pages/MessageDetail.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
