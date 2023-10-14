<template>
    <div>
        <h1>Home </h1>
        <p> {{ userStore.userData?.email }}</p>
    </div>
</template>

<script setup>

//import { computed } from 'vue'
import { auth } from '../firebaseConfig';
import { useUserStore } from '../stores/user'
//import { storeToRefs } from 'pinia'

const userStore = useUserStore()

//const { userData } = storeToRefs(userStore)

//const uppercase = computed(() => userStore.userData.toUpperCase())

</script>

<style >

</style>