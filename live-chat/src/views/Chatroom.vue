<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import NewChatForm from '@/components/NewChatForm.vue';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
import { watch } from 'vue';

export default {
    components: { Navbar, NewChatForm, ChatWindow },
    setup() {
      const router = useRouter()
      const { user } = getUser()

      //if the user value is ever null
      // if the user value is ever null, redirect to welcome screen
      watch(user, () => {
        if (!user.value) {
          router.push({ name: 'Welcome' })
        }
      })
      
    }
}
</script>

<style>
  
</style>