import { createRouter, createWebHistory } from 'vue-router' 
import Welcome from '../views/Welcome.vue'
import Chatroom from '@/views/Chatroom.vue'
import { projectAuth } from '@/firebase/config'

//auth guards function
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser // on récupère l'utilisateur connecté
  console.log('current user in auth guard: ', user)
  //Si l'utilisateur n'est pas connecté on le redirige vers la page d'accueil sinon il a accès au chat
  if (!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}

//Si l'utilisateur est déja connecté il doit plus avoir accès à la page de login
const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (user) {
    next({ name: 'Chatroom' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth,
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
