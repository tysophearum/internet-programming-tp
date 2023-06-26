<template>
    <div class="grid grid-cols-5 gap-6 p-4 w-5/6">
      <StoreItem v-for="product in products" :name="product.name" :src="product.imageSrc"></StoreItem>
    </div>
</template>

<script>
import StoreItem from './StoreItem.vue';
import axios from 'axios';
export default {
    components: {
        StoreItem
    },
    name: "ProductContent",
    data() {
        return {
            products: undefined
        };
    },
    mounted() {
        this.fetchProducts();
    },
    methods: {
        fetchProducts() {
        axios.get('http://localhost:3000/product/all')
            .then(response => {
            this.products = response.data;
            console.log(this.products);
            })
            .catch(error => {
            console.error(error);
            });
        }
    }
}
</script>