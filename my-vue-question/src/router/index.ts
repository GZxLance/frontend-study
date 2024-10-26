import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Profile from '../views/Profile.vue';
import List from '../views/List.vue';
import Question from '../views/Question.vue';
import Add from '../views/Add.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/list',
        name: 'List',
        component: List,
      },
      {
        path: 'question/:id',
        name: 'Question',
        component: Question, 
      },
      {
        path: '/add',
        name: 'Add',
        component: Add,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile, // 添加个人中心页面路由
    meta: { requiresAuth: true },
  },
];


// 定义路由对象
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
      // 返回到浏览器保存的滚动位置（当使用浏览器后退时），否则滚动到顶部
      if (savedPosition) {
          return savedPosition;
      } else {
          return { top: 0 }; // 每次路由切换时滚动到顶部
      }
  },
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 检查用户是否登录，这里假设登录信息存储在localStorage
    const isLogged = !!localStorage.getItem('userInfo');
    if (!isLogged) {
      // 如果未登录，重定向到登录页面
      alert("请先登录");
      next('/login');
    } else {
      // 如果已登录，放行
      next();
    }
  } else {
    // 如果路由不需要登录，直接放行
    next();
  }
});


// 路由守卫，保护需要登录的页面


export default router;