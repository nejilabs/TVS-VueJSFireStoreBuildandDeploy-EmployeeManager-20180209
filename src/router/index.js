import Vue from 'vue'
import Router from 'vue-router'

//Components
import Dashboard from '@/components/Dashboard.vue'
import NewEmployee from '@/components/NewEmployee.vue'
import ViewEmployee from '@/components/ViewEmployee.vue'
import EditEmployee from '@/components/EditEmployee.vue'

import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

import firebase from 'firebase'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta:{
        requiresAuth:true,
      }
    },
    {
      path: '/new_employee',
      name: 'new-employee',
      component: NewEmployee,
      meta:{
        requiresAuth:true,
      }
    },
    {
      path: '/view_employee/:employee_id',
      name: 'view-employee',
      component: ViewEmployee,
      meta:{
        requiresAuth:true,
      }
    },
    {
      path: '/edit_employee/:employee_id',
      name: 'edit-employee',
      component: EditEmployee,
      meta:{
        requiresAuth:true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        requiresGuest:true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{
        requiresGuest:true,
      }
    }
  ]
})

// Navbar Guards
router.beforeEach((to,from,next) => {
  // Check for requiredAuth guard
  if(to.matched.some(record => record.meta.requiresAuth)){
    // Check if user IS NOT LOGGED IN
    if(!firebase.auth().currentUser){
      // Got back to login
      next({
        path:'/login',
        query:{
          redirect:to.fullPath
        }
      })
    }else{
      // Proceed to route
      next();
    }
  }else if(to.matched.some(record => record.meta.requiresGuest)){
     // Check if user IS LOGGED IN
    if(firebase.auth().currentUser){
      // Got back to login
      next({
        path:'/',
        query:{
          redirect:to.fullPath
        }
      })
    }else{
      // Proceed to route
      next();
    }
  } else{
    // Proceed to route
    next();
  }
})

export default router