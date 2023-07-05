<template>
    <div class="h-96 rounded-2xl bg-gray-500 flex flex-col justify-center items-center p-3">
        <img v-bind:src="src" class="drop-shadow-lg w-fit h-fit mb-4" alt="shoe2">
        <button class="w-full h-fit bg-white p-4 rounded-2xl shadow-lg flex flex-col justify-center items-center mt-4 hover:bg-black hover:text-white hover:duration-300">
            <h1 class="text-lg font-bold mb-2">{{ name }}</h1>
        </button>
    </div>
</template>

<script>
    export default {
        name: "StoreItem",
        props: ['name', 'src'],
    }
    
</script>