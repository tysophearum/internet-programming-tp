<template>
    <div class=" h-[100vh] bg-[#00000037] fixed top-0 left-0 w-full flex items-center justify-center">
        <form class=" bg-white rounded-lg w-1/2 flex flex-col items-center h-[50vh]" action="">
            <div class=" h-full flex flex-col justify-center items-center">
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center">Product name: </h1>
                    <input v-model="this.$store.state.editProduct.name" type="text" id="" class=" border w-72 bg-gray-50 h-12 rounded-md">
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center">Product description: </h1>
                    <input v-model="this.$store.state.editProduct.description" type="text" id="" class=" border w-72 bg-gray-50 h-12 rounded-md">
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center">Product image: </h1>
                    <input v-model="this.$store.state.editProduct.imageSrc" type="text" id="" class=" border w-72 bg-gray-50 h-12 rounded-md">
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center justify-start">Product category: </h1>
                    <select v-model="this.$store.state.editProduct.categoryId">
                        <option v-for="category in this.$store.state.categories" :value="category._id">{{ category.name }}</option>
                    </select>
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center justify-start">Product item: </h1>
                    <select  v-model="this.$store.state.editProduct.itemId">
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
      };
    },
    name: "EditProductPopUp",
    methods: {
        showPopup(show) {
            this.$store.commit("showEditProduct", show)
        },
        addProduct() {
            axios.post("http://localhost:3000/product/update", { 
                _id: this.$store.state.editProduct._id,
                name: this.$store.state.editProduct.name, 
                description: this.$store.state.editProduct.description,
                categoryId: this.$store.state.editProduct.categoryId,
                itemId: this.$store.state.editProduct.itemId,
                imageSrc: this.$store.state.editProduct.imageSrc
            })
            .then(res => {
                console.log(res);
                this.name = ""
                this.description = ""
            })
        }
    }
}
</script>