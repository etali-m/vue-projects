<template>
    <form @submit.prevent="handleSubmit">
       <input type="email" required placeholder="email" v-model="email">
       <input type="password" required placeholder="password" v-model="password">
       <div class="error">{{ error }}</div>
       <button>Log in</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue'
  import useLogin from '@/composables/useLogin'
  
  export default {
      setup(props, context) {
          //ref
          const email = ref('')
          const password = ref('')

          //useLogin
          const { error, login } = useLogin()

          const handleSubmit = async () => {
                await login(email.value, password.value)
                if (!error.value){ 
                    context.emit('login') // rediriger vers la page chatroom
                }
                console.log(email.value, password.value)
          }
  
          return { email, password, handleSubmit, error }
      }
  }
  </script>
  
  <style>
  
  </style>