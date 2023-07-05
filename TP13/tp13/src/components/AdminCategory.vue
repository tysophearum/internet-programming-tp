<template>
    <div>
        <AddCategoryPopUp v-if="this.$store.state.showAddCat"/>
        <DeleteCategoryPopup v-if="this.$store.state.showDeleteCat"/>
        <EditCategoryPopUp v-if="this.$store.state.showEditCat"/>
        <h1 class=" text-4xl m-7">Category</h1>
        <div class=" flex justify-end m-2">
            <button class=" bg-blue-700 w-fit px-3 text-white h-9 rounded" @click="showPopup(true)">Add Category</button>
        </div>
        <div class=" w-full h-12 rounded bg-blue-300 grid grid-cols-3">
            <div class=" flex items-center justify-center font-bold">Name</div>
            <div class=" flex items-center justify-center font-bold">Description</div>
            <div class=" flex items-center justify-center font-bold">Action</div>
        </div>
        <div v-for="(category, index) in this.$store.state.categories" class=" w-full h-12 rounded bg-blue-100 grid grid-cols-3">
            <div class=" flex items-center justify-center">{{ category.name }}</div>
            <div class=" flex items-center justify-center">{{ category.description }}</div>
            <div class="flex items-center justify-between px-24">
                <button class=" bg-white w-20 h-9 rounded" @click="showEditCat(category._id)">Edit</button>
                <button class=" bg-red-700 w-20 h-9 rounded text-white" @click="showDeleteCat(); passId(category._id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
    import AddCategoryPopUp from './AddCategoryPopUp.vue';
    import DeleteCategoryPopup from './DeleteCategoryPopup.vue';
    import EditCategoryPopUp from './EditCategoryPopUp.vue';
    import axios from 'axios';
    export default {
        name: "AdminCategory",
        components: {
            AddCategoryPopUp,
            DeleteCategoryPopup,
            EditCategoryPopUp
        },
        methods: {
            showPopup(show) {
                this.$store.commit("showAddCat", show)
            },
            showDeleteCat() {
                this.$store.commit("showDeleteCategory", true)
            },
            showEditCat(id) {
                this.$store.commit("showEditCat", true)
                axios.get("http://localhost:3000/category/find/"+id)
                .then(res => {
                    this.$store.commit("editCategory", res.data)
                })
            },
            passId(id) {
                this.$store.commit("deleteCategoryId", id)
            }
        }
    }
    
</script>