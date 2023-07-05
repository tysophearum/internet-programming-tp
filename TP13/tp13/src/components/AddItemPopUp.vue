<template>
    <div class=" h-[100vh] bg-[#00000037] fixed top-0 left-0 w-full flex items-center justify-center">
        <form class=" bg-white rounded-lg w-1/2 flex flex-col items-center h-[50vh]" action="">
            <div class=" h-full flex flex-col justify-center items-center">
                <div class=" grid grid-cols-2 gap-4 mb-5">
                    <h1 class=" text-lg font-bold flex items-center">Item name: </h1>
                    <input v-model="name" type="text" name="" id="" class=" border w-72 bg-gray-50 h-12 rounded-md">
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center">Item description: </h1>
                    <input v-model="description" type="text" name="" id="" class=" border w-72 bg-gray-50 h-12 rounded-md">
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center justify-start">Item category: </h1>
                    <select v-model="categoryId">
                        <option v-for="category in this.$store.state.categories" :value="category._id">{{ category.name }}</option>
                    </select>
                </div>
                
            </div>
            <div class=" flex justify-end w-full mr-14 mb-6">
                <button class=" bg-red-700 w-fit px-3 text-white h-9 rounded mr-8" @click="showPopup(false)">Cancel</button>
                <button class=" bg-blue-700 w-fit px-3 text-white h-9 rounded" @click="addItem()">Add</button>
                
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
        categoryId: ''
      };
    },
    name: "AddItemPopUp",
    methods: {
        showPopup(show) {
            console.log(this.categoryId);
            this.$store.commit("showAddItem", show)
        },
        addItem() {
            console.log({ 
                name: this.name, 
                description: this.description,
                categoryId: this.categoryId
            });
            axios.post("http://localhost:3000/item/create", { 
                name: this.name, 
                description: this.description,
                categoryId: this.categoryId
            })
            .then(res => {
                console.log(res);
                this.name = ""
                this.description = ""
                this.categoryId = ""
                
            })
        }
    }
}
</script>