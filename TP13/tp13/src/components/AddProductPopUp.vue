<template>
    <div class=" h-[100vh] bg-[#00000037] fixed top-0 left-0 w-full flex items-center justify-center">
        <form class=" bg-white rounded-lg w-1/2 flex flex-col items-center h-[50vh]" action="">
            <div class=" h-full flex flex-col justify-center items-center">
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center">Product name: </h1>
                    <input v-model="name" type="text" name="" id="" class=" border w-72 bg-gray-50 h-12 rounded-md">
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center">Product description: </h1>
                    <input v-model="description" type="text" name="" id="" class=" border w-72 bg-gray-50 h-12 rounded-md">
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center">Product image: </h1>
                    <input v-model="image" type="text" name="" id="" class=" border w-72 bg-gray-50 h-12 rounded-md">
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center justify-start">Product category: </h1>
                    <select v-model="categoryId">
                        <option v-for="category in this.$store.state.categories" :value="category._id">{{ category.name }}</option>
                    </select>
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center justify-start">Product item: </h1>
                    <select v-model="itemId">
                        <option v-for="item in this.$store.state.items" :value="item._id">{{ item.name }}</option>
                    </select>
                </div>
                
            </div>
            <div class=" flex justify-end w-full mr-14 mb-6">
                <button class=" bg-red-700 w-fit px-3 text-white h-9 rounded mr-8" @click="showPopup(false)">Cancel</button>
                <button class=" bg-blue-700 w-fit px-3 text-white h-9 rounded" @click="addProduct()">Add</button>
                
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
      return {
        name: '',
        description: '',
        categoryId: '',
        itemId: '',
        image: ''
      };
    },
    name: "AddProductPopUp",
    methods: {
        showPopup(show) {
            console.log(this.categoryId);
            this.$store.commit("showAddProduct", show)
        },
        addProduct() {
            console.log({ 
                name: this.name, 
                description: this.description,
                categoryId: this.categoryId
            });
            axios.post("http://localhost:3000/product/create", { 
                name: this.name, 
                description: this.description,
                categoryId: this.categoryId,
                imageSrc: this.image,
                itemId: this.itemId
            })
            .then(res => {
                console.log(res);
                this.name = ""
                this.description = ""
                this.categoryId = ""
                this.itemId = ""
            })
        }
    }
}
</script>