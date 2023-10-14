<template>
    <div>
        <h1>Register - {{ userStore.userData }}</h1>
        <!-- <button @click="userStore.registerUser('imanolchin@digi.com')">Change</button> -->
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Introduce email" v-model.trim="email"/>
            <input type="password" placeholder="Introduce password" v-model.trim="password" />
            <button :disabled="userStore.loadingUser" type="submit">Create User</button>
        </form>
    </div>
</template>

<script setup>

import { useUserStore } from '../stores/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const userStore = useUserStore()
//const router = useRouter()

const email = ref('')
const password = ref('')

const handleSubmit = async () => {

    if (!email.value || !password.value) return alert('fill the fields!')

    await userStore.registerUser(email.value, password.value)
    console.log('processing formulary ', email.value, ' ' + password.value)

    //router.push('/')
}

</script>

<style lang="scss" scoped>

</style>