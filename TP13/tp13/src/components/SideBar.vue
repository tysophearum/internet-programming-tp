<template>
    <div class="h-[100vh] w-1/6 bg-black">
        <h1 class="text-white text-4xl text-center mb-4">លេខមួយ</h1>
        <div class="bg-white " v-for="category in categories">
            <h1 class="text-xl ">{{ category.name }}</h1>
            <h1 class=" bg-gray-300 pl-3" v-for="Items in category.Items">{{ Items.name }}</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                categories: undefined,
            };
        },
        name: "SideBar",
        mounted() {
            this.fetchCategories();
        },
        methods: {
            fetchCategories() {
                axios.get('http://localhost:3000/category/all/items')
                    .then(response => {
                        this.categories = response.data;
                        console.log(this.categories);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },
        }
    }
</script>