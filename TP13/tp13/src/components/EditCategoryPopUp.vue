<template>
    <div class=" h-[100vh] bg-[#00000037] fixed top-0 left-0 w-full flex items-center justify-center">
        <form class=" bg-white rounded-lg w-1/2 flex flex-col items-center h-[50vh]" action="">
            <div class=" h-full flex flex-col justify-center items-center">
                <div class=" grid grid-cols-2 gap-4 mb-5">
                    <h1 class=" text-lg font-bold flex items-center">Category name: </h1>
                    <input type="text" name="" id="" class=" border w-72 bg-gray-50 h-12 rounded-md" v-model="this.$store.state.editCategory.name">
                </div>
                <div class=" grid grid-cols-2 gap-4">
                    <h1 class=" text-lg font-bold flex items-center">Category description: </h1>
                    <input type="text" name="" id="" class=" border w-72 bg-gray-50 h-12 rounded-md" v-model="this.$store.state.editCategory.description">
                </div>
            </div>
            <div class=" flex justify-end w-full mr-14 mb-6">
                <button class=" bg-red-700 w-fit px-3 text-white h-9 rounded mr-8" @click="showPopup(false)">Cancel</button>
                <button class=" bg-blue-700 w-fit px-3 text-white h-9 rounded" @click="addCategory()">Edit</button>
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
    name: "EditCategoryPopUp",
    methods: {
        showPopup(show) {
            this.$store.commit("showEditCat", show)
            console.log({ 
                _id: this.$store.state.editCategory._id,
                name: this.$store.state.editCategory.name, 
                description: this.$store.state.editCategory.description
            });
        },
        addCategory() {
            
            axios.post("http://localhost:3000/category/update", { 
                _id: this.$store.state.editCategory._id,
                name: this.$store.state.editCategory.name, 
                description: this.$store.state.editCategory.description
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