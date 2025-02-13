import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'


const getPosts = () => {
    const posts = ref([]) //stocker les données dans un tableau
    const error = ref(null) //message d'erreur

    const load = async () => {
      try {
        // simulate delay
        //Le spinner défini va tourner pendant deux secondes en attendant que les données soients chargées.
        /*await new Promise(resolve => {
            setTimeout(resolve, 2000)
        })

        let data = await fetch('http://localhost:3000/posts')
        if(!data.ok) {
          throw Error('no available data')
        }
        posts.value = await data.json()
        console.log(posts.value)*/
        
        // On récupère la collection qui contient les posts
        const res = await projectFirestore.collection('posts')
        .orderBy('createdAt', 'desc')
        .get() 

        posts.value = res.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })
        console.log(posts.value)
      }
      catch(err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { posts, error, load }
}

export default getPosts