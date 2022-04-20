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
import SideBar from '@/components/SideBar.vue'
import DashbordView from '@/views/Admin/DashbordView.vue'
import GestionUser from '@/views/Admin/GestionUser'
import NutritionView from '@/views/NutritionView.vue'
import GestionNutrition from '@/views/Admin/GestionNutrition.vue'
import EditNutrition from '@/views/Admin/EditNutrition.vue'
import EntrainementView from '@/views/EntrainementView'
import SignIn1 from '../views/Admin/SignIn1.vue'
import ArticleNutrition from '../views/ArticleNutrition.vue'
import BlogView from '@/views/BlogView.vue'
import GestionExercice from '../views/Admin/GestionExercice.vue'
import NutritionnisteView from '@/views/NutritionnisteView.vue'
import GestionNutritionniste from '../views/Admin/GestionNutritionniste.vue'
import GestionCoach from '../views/Admin/GestionCoach.vue'
import CoachView1 from '@/views/CoachView1.vue'
import ProfileView from '@/views/ProfileView.vue'
import GymView from '@/views/GymView.vue'
import store from '@/store'
import CreateWorkout from '../views/CreateWorkout.vue'





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
   
    
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component:SignUp,
    meta: { guest: true }
    
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
    component:CoachView,
     meta: { guest: true }
    
  },
  {
    path: '/UserView',
    name: 'UserView',
    component:UserView,
       meta: { guest: true }
    
  },
  {
    path: '/AddCoach',
    name: 'AddCoach',
    component:AddCoach
    
  },
   {
    path: '/SideBar',
    name: 'SideBar',
    component:SideBar
    
  },
  {
    path: '/DashbordView',
    name: 'DashbordView',
    component:DashbordView
    
  },
  {
    path: '/GestionUser',
    name: 'GestionUser',
    component:GestionUser
    
  },
  {
    path: '/GestionNutrition',
    name: 'GestionNutrition',
    component:GestionNutrition
    
  },
  {
    path: '/NutritionView',
    name: 'NutritionView',
    component:NutritionView
    
  },
  {
    path: '/EntrainementView',
    name: 'EntrainementView',
    component:EntrainementView
    
  },
  {
    path: '/EditNutrition/:id?',
    name: 'EditNutrition',
    component:EditNutrition
    
  },
  {
    path: '/SignIn1',
    name: 'SignIn1',
    component:SignIn1,
  },
  {
    path: '/ArticleNutrition',
    name: 'ArticleNutrition',
    component:ArticleNutrition,
  },
  {
    path: '/BlogView',
    name: 'BlogView',
    component:BlogView,
  },
  {
    path: '/GestionExercice',
    name: 'GestionExercice',
    component:GestionExercice,
  },
  {
    path: '/NutritionnisteView',
    name: 'NutritionnisteView',
    component:NutritionnisteView,
  },
  {
    path: '/GestionNutritionniste',
    name: 'GestionNutritionniste',
    component:GestionNutritionniste,
  },
  {
    path: '/GestionCoach',
    name: 'GestionCoach',
    component:GestionCoach,
  },
  {
    path: '/CoachView1',
    name: 'CoachView1',
    component:CoachView1,
  },
  {
    path: '/ProfileView',
    name: 'ProfileView',
    component:ProfileView,
     meta: { secure: true }
  },
  {
    path: '/GymView',
    name: 'GymView',
    component:GymView,

  },
  {
    path: '/CreateWorkout',
    name: 'CreateWorkout',
    component:CreateWorkout,

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.secure)) {
    // if no token
    if (!store.state.loggedIn) {
      //console.log("no token");
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (!store.state.loggedIn) {
      next();
    } else {
      //console.log("no token");
      next({
        path: "/profile"
      });
    }
  } else {
    next();
  }
});


export default router
