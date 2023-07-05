<template>
    <div class="">
        <h1 class="text-3xl m-7">Product Detail</h1>
        <div class="flex">
            <img class="h-52" :src="selectedProduct.imageSrc" alt="">
            <div class="m-8">
                <div class="text-lg"><span class="font-bold">Name: </span><span>{{ selectedProduct.name }}</span></div>
                <div class="text-lg"><span class="font-bold">Description: </span><span>{{ selectedProduct.description }}</span></div>
                <div class="text-lg"><span class="font-bold">Category: </span><span>{{ selectedProduct.category.name }}</span></div>
                <div class="text-lg"><span class="font-bold">Item: </span><span>{{ selectedProduct.item.name }}</span></div>
                
            </div>
        </div>
        <div>
            <h1 class="text-xl font-bold m-3">Price detail</h1>
            <form class="grid grid-cols-3 my-4">
                <input v-model="price" class="border h-10 rounded-md text-center" placeholder="Enter price here" type="number">
                <input v-model="shopName" class="border h-10 rounded-md text-center" placeholder="Enter shop name here" type="text">
                <div class=" flex justify-center">
                    <button @click="addPrice" type="submit" class=" bg-blue-700 w-fit px-3 text-white h-9 rounded">Add New Price</button>
                </div>
            </form>
            <div class=" w-full h-12 rounded bg-blue-300 grid grid-cols-3">
                <div class=" flex items-center justify-center font-bold">Price</div>
                <div class=" flex items-center justify-center font-bold">Source</div>
                <div class=" flex items-center justify-center font-bold">Action</div>
            </div>
            <div v-for="(price, index) in selectedProduct.prices" class=" w-full h-12 rounded bg-blue-100 grid grid-cols-3">
                <div class=" flex items-center justify-center">{{ price.price }}</div>
                <div class=" flex items-center justify-center">{{ price.shop }}</div>
                <div class="flex items-center justify-center px-28">
                    <button class=" bg-red-700 w-20 h-9 rounded text-white" @click="deletePrice(price._id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "AdminProductDetail",
        data() {
            return {
                shopName: null,
                price: null,
                selectedProduct: {
                    name: "",
                    description: "",
                    imageSrc: "",
                    category:{name: ""},
                    item: {name: ""},
                    prices: [
                        {
                            shop: "",
                            price: ""
                        }
                    ]
                },
            };
        },
        components: {
            
        },
        methods: {
            async addPrice() {
                await axios.post("http://localhost:3000/price/create", {
                    productId: localStorage.getItem("selectedProductId"),
                    shop: this.shopName,
                    price: this.price
                })
                .then(res => {
                    
                })
            },
            deletePrice(id) {
                axios.post("http://localhost:3000/price/delete", {
                    _id: id
                })
                .then(res => {
                    this.callData()
                })
            },
            async callData() {
                if(this.$store.state.selectedProductId != null){
                    localStorage.setItem("selectedProductId", this.$store.state.selectedProductId)
                }

                let id = localStorage.getItem("selectedProductId")

                await axios.get("http://localhost:3000/product/find/detail/" + id)
                .then(res => {
                    this.selectedProduct = res.data[0]
                })
            }
        },
        async mounted() {
            this.callData()
        }
    }
    
</script>