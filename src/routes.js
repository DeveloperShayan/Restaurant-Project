import {createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import PageNotFound from './components/PageNotFound.vue'



const routes = [
    {
        name : 'Home',
        path : '/',
        component : Home,
        meta:{
            requiresAuth:true
        }
        
    },
    {
        name : 'SignUp',
        path : '/signup',
        component : SignUp,
        meta:{
            requiresAuth:false
        }

    },
    {
        name : 'Login',
        path:'/login',
        component : Login,
        meta:{
            requiresAuth:false
        }
    },
    {
        name : 'Add',
        path:'/add',
        component : Add,
        meta:{
            requiresAuth:true
        }
    },
    {
        name : 'update',
        path:'/update/:id',
        component : Update,
        meta:{
            requiresAuth:true
        }
    },

    {
        name : 'NotFound',
        path : '/:PathMatch(.*)*',
        component : PageNotFound
    }

];




const router=createRouter ({
    history :createWebHistory(),
    routes

});

router.beforeEach((to) => {
    if(to.meta.requiresAuth && !localStorage.getItem('user-info')){
            return{name:'Login'}
    }
    if(to.meta.requiresAuth == false && localStorage.getItem('user-info')){
        return{name:'Home'}
}
})

export default router;