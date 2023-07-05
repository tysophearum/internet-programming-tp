<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div class="h-[100vh] w-1/6 border flex flex-col items-center py-6">
        <img src="https://hearingnumber.org/wp-content/themes/yootheme/cache/one-67713905.png" class="w-24" alt="">
        <div v-for="(side, index) in this.$store.state.sides" :key="index" :class="{ 'bg-blue-300': selectedItem === index }" class="w-[86%] py-3 text-center rounded-lg my-2" @click="handleClick(index)">
            <h1 class="text-[#939393]">{{ side }}</h1>
        </div>
        <RouterLink to="/AdminCategory">aaa</RouterLink>
        
        <RouterView />
    </div>
</template>

<script>

export default {
    name: "Admin",
    data() {
        return {
            selectedItem: null ,
        };
    },
    methods: {
        handleClick(index) {
            this.selectedItem = index
        }
    }
}
</script>