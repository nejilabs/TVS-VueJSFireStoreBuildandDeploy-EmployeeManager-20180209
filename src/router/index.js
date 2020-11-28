import Vue from 'vue'
import Router from 'vue-router'

//Components
import Dashboard from '@/components/Dashboard.vue'
import NewEmployee from '@/components/NewEmployee.vue'
import ViewEmployee from '@/components/ViewEmployee.vue'
import EditEmployee from '@/components/EditEmployee.vue'

import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new_employee',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/view_employee/:employee_id',
      name: 'view-employee',
      component: ViewEmployee
    },
    {
      path: '/edit_employee/:employee_id',
      name: 'edit-employee',
      component: EditEmployee
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
