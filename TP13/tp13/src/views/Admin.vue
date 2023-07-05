<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div class=" flex w-full">
        <div class="h-[100vh] w-1/6 border flex flex-col items-center py-6">
            <img src="https://hearingnumber.org/wp-content/themes/yootheme/cache/one-67713905.png" class="w-24" alt="">
            <RouterLink v-for="(side, index) in this.$store.state.sides" :key="index" :class="{ 'bg-blue-300': selectedItem === index }" :to="'/' + side" class="w-[86%] py-3 text-center rounded-lg my-2 text-[#939393]" @click="handleClick(index); getData(side)">
                {{ side }}
            </RouterLink>
            
            
        </div>
        <RouterView class="w-5/6"/>

    </div>
</template>

<script>
import axios from 'axios';
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
        },
        getData(side) {
            if(side === "Category"){
                axios.get("http://localhost:3000/category/all")
                .then(res => {
                    this.$store.commit("setCategories", res.data)
                })
            }
            else if (side === "Items") {
                axios.get("http://localhost:3000/item/all")
                .then(res => {
                    this.$store.commit("setItems", res.data)
                })
            }
            else if (side === "Products") {
                axios.get("http://localhost:3000/product/all")
                .then(res => {
                    this.$store.commit("setProducts", res.data)
                })
            }
        }
    },
    mounted() {
        axios.get("http://localhost:3000/category/all")
            .then(res => {
                this.$store.commit("setCategories", res.data)
        })
        axios.get("http://localhost:3000/item/all")
            .then(res => {
                this.$store.commit("setItems", res.data)
        })
        axios.get("http://localhost:3000/product/all")
            .then(res => {
                this.$store.commit("setProducts", res.data)
        })
    }
}
</script>