import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import TeamView from '../views/TeamView.vue'
import PopupView from '@/components/PopupView.vue'
import BoutiqueView from '../views/BoutiqueView.vue'
import exampleView from '@/views/exampleView.vue'
import SignUp from '@/views/SignUp.vue'
import CoachView from '@/views/CoachView.vue'
import SignIn from '@/views/SignIn.vue'
import UserView from '@/views/UserView'
import AddCoach from '@/views/AddCoach'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AboutView',
    name: 'AboutView',
    component:AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/TeamView',
    name: 'TeamView',
    component:TeamView
    
  },
  {
    path: '/exampleView',
    name: 'exampleView',
    component:exampleView,
    
    
  },
  {
    path: '/PopupView',
    name: 'PopupView',
    component:PopupView
    
  },
  {
    path: '/BoutiqueView',
    name: 'BoutiqueView',
    component:BoutiqueView,
    meta: { secure: true }
    
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component:SignUp
    
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component:SignIn,
    meta: { guest: true }
    
  },
  {
    path: '/CoachView',
    name: 'CoachView',
    component:CoachView
    
  },
  {
    path: '/UserView',
    name: 'UserView',
    component:UserView
    
  },
  {
    path: '/AddCoach',
    name: 'AddCoach',
    component:AddCoach
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) =>{
 if(to.matched.some(record => record.meta.secure)){
   if(localStorage.getItem("token") == null){
     console.log("no token");
     next({
       path:"/SignIn"
     });
   }else{
     next();
   }
 }else{
   next()
 }
});


export default router