<template>
    <div class=" h-[100vh] bg-[#00000037] fixed top-0 left-0 w-full flex items-center justify-center">
        <form class=" bg-white rounded-lg w-1/2 flex flex-col items-center h-[50vh]" action="">
            <div class=" h-full flex flex-col justify-center items-center">
                <div class=" grid grid-cols-2 gap-4 mb-5">
                    <h1 class=" text-lg font-bold flex items-center">Item name: </h1>
                    <input type="text" name="" id="" class=" border w-72 bg-gray-50 h-12 rounded-md" v-model="this.$store.state.editItem.name">
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center">Item description: </h1>
                    <input type="text" name="" id="" class=" border w-72 bg-gray-50 h-12 rounded-md" v-model="this.$store.state.editItem.description">
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center justify-start">Item category: </h1>
                    <select v-model="this.$store.state.editItem.categoryId">
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
        categoryId: null
      };
    },
    name: "EditItemPopUp",
    methods: {
        showPopup(show) {
            this.$store.commit("showEditItem", show)
            console.log({ 
                _id: this.$store.state.editItem._id,
                name: this.$store.state.editItem.name, 
                description: this.$store.state.editItem.description,
                categoryId: this.$store.state.editItem.categoryId
            });
        },
        addItem() {
            axios.post("http://localhost:3000/item/update", { 
                _id: this.$store.state.editItem._id,
                name: this.$store.state.editItem.name, 
                description: this.$store.state.editItem.description,
                categoryId: this.$store.state.editItem.categoryId
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