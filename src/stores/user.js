import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { defineStore } from 'pinia'
import { auth } from '../firebaseConfig'
import router from '../router'
import { onAuthStateChanged } from 'firebase/auth';


export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: 'imanolcondedev@gmail.com',
        loadingUser: false
    }),
    actions: {
        async registerUser(email, password) {
            this.loadingUser = true
            try {
                const { user } = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                )

                this.userData = { email: email, uid: user.uid }

                router.push('/')
            } catch (err) {
                console.log(err)
            } finally {
                this.loadingUser = false
            }
        },
        async loginUser(email, password) {
            this.loadingUser = true
            try {
                const { user } = await signInWithEmailAndPassword(auth, email, password)
                this.userData = { email: email, uid: user.uid }
                router.push('/')
            } catch (err) {
                console.log(err)
            } finally {
                this.loadingUser = false
            }
        },
        async logoutUser() {
            try {
                await signOut(auth)
                this.userData = null
                router.push('/login')
            } catch (err) {
                console.log(err)
            }
        },
        async currentUser() {
         
            return new Promise((resolve, reject) => {

                const unsubscribe = onAuthStateChanged(auth, user => {

                    if (user) this.userData = { email: user.email, uid: user.uid }
                    else this.userData = null

                    resolve({user: user, unsubscribe: unsubscribe})

                }, e => {
                    reject(e)
                })

            }).then(res => {
                res.unsubscribe()
                return res.user
            })
        }
    }
})