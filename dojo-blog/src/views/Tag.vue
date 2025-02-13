<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
        <PostList :posts="postsWithTag"/>
        <TagCloud :posts="posts"/>
    </div>
    <div v-else>
        <Spinner />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import getPosts from '../composables/getPosts'
import TagCloud from '../components/TagCloud.vue'
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'

export default {
    props: ['tag'],
    components: { Spinner, PostList, TagCloud },
    setup() {
        const route = useRoute()
        //On récupère l'ensemble des posts à partir du composable
        const { posts, error, load } =  getPosts()

        load()
        //fonction pour selectionner les posts qui possède le tag actuel
        const postsWithTag = computed(() => {
            return posts.value.filter(p => p.tags.includes(route.params.tag))
        })

        return { posts, error, postsWithTag }
    }
}
</script>

<style>
    .tag {
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
    }
</style>