import { ref } from 'vue'
import { projectAuth } from '@/firebase/config'

// refs & login outside of exported function
// they don't need to be re-created every time we invoke useSignup
const error = ref(null);

//fonction pour l'authentification d'un utilisateur
const login =  async (email, password) => {
    error.value = null

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        error.value = null
        console.log(res)
        return res
    } catch (err) {
        console.log(err.message)
        error.value = 'Incorrect login credentials'
    }
}

const useLogin = () => {
    return { error, login }
}

export default useLogin