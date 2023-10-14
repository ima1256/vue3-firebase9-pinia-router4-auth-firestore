<script setup>
import { useUserStore } from '../stores/user'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const userStore = useUserStore()

//const router = useRouter()

const email = ref('')
const password = ref('')

const handleSubmit = async () => {

    if (!email.value || !password.value) return alert('fill the fields!')

    await userStore.loginUser(email.value, password.value)

    //router.push('/')
}

</script>

<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Introduce email" v-model.trim="email"/>
            <input type="password" placeholder="Introduce password" v-model.trim="password" />
            <button type="submit">Access</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>

</style>