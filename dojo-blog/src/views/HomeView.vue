<template>
  <div class="home"> 
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template> 

<script> 
import { ref } from 'vue'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'HomeView', 
  components: { PostList, Spinner },
  setup() {

    const { posts, error, load } = getPosts() //récupère les valeur retournées par la fonction getPosts

    load()
    
    return { posts, error }
  } 
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>