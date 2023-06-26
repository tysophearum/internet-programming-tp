<script setup>
</script>

<template>
  <div class=" flex">
    <SideBar/>
    <ProductContent/>
  </div>
  
</template>

<script>
import SideBar from '../components/SideBar.vue';
import ProductContent from '../components/ProductContent.vue';

export default {
  name: "Home",
  components: {
    SideBar,
    ProductContent
  }
}
</script>
