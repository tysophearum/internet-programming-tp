<template>
    <div>
        <AddProductPopUp v-if="this.$store.state.showAddProduct"/>
        <DeleteProductPopup v-if="this.$store.state.showDeleteProduct"/>
        <EditProductPopUp v-if="this.$store.state.showEditProduct"/>
        <h1 class=" text-4xl m-7">Product</h1>
        <div class=" flex justify-end m-2">
            <button class=" bg-blue-700 w-fit px-3 text-white h-9 rounded" @click="showPopup(true)">Add Product</button>
        </div>
        <div class=" w-full h-12 rounded bg-blue-300 grid grid-cols-4">
            <div class=" flex items-center justify-center font-bold">Name</div>
            <div class=" flex items-center justify-center font-bold">Description</div>
            <div class=" flex items-center justify-center font-bold">Image Source</div>
            <div class=" flex items-center justify-center font-bold">Action</div>
        </div>
        <div v-for="(product, index) in this.$store.state.products" class=" w-full h-12 rounded bg-blue-100 grid grid-cols-4">
            <RouterLink to="/Product/detail" @click="selectPoduct(product._id)" class=" flex items-center justify-center underline">{{ product.name }}</RouterLink>
            <div class=" flex items-center justify-center">{{ product.description }}</div>
            <!-- <div class=" flex items-center justify-center">{{ product.imageSrc }}</div> -->
            <div class=" h-12 flex justify-center">
                <img :src="product.imageSrc" alt="" class=" h-full">

            </div>
            <div class="flex items-center justify-between px-16">
                <button class=" bg-white w-20 h-9 rounded" @click="showEditProduct(product._id)">Edit</button>
                <button class=" bg-red-700 w-20 h-9 rounded text-white" @click="showDeleteProduct(); passId(product._id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import AddProductPopUp from './AddProductPopUp.vue';
import DeleteProductPopup from './DeleteProductPopup.vue';
import EditProductPopUp from './EditProductPopUp.vue';
import axios from 'axios';
    export default {
        name: "AdminProduct",
        components: {
            AddProductPopUp,
            DeleteProductPopup,
            EditProductPopUp
        },
        methods: {
            showPopup(show) {
                this.$store.commit("showAddProduct", show)
            },
            showDeleteProduct() {
                this.$store.commit("showDeleteProduct", true)
            },
            passId(id) {
                this.$store.commit("deleteProductId", id)
            },
            showEditProduct(id) {
                this.$store.commit("showEditProduct", true)
                axios.get("http://localhost:3000/product/find/"+id)
                .then(res => {
                    this.$store.commit("editProduct", res.data)
                })
            },
            selectPoduct(id) {
                this.$store.commit("setSelectedProductId", id)
            }
        }
    }
    
</script>