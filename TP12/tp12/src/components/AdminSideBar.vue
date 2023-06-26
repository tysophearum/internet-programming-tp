<template>
    <div class="h-[100vh] w-1/6 border flex flex-col items-center py-6">
        <img src="https://hearingnumber.org/wp-content/themes/yootheme/cache/one-67713905.png" class="w-24" alt="">
        <div class="w-[86%] py-3 text-center rounded-lg my-2" :class="colorClass" @click="handleClick">
            <h1 class="text-[#939393]">Category</h1>
        </div>
        <div class="w-[86%] py-3 text-center rounded-lg my-2" :class="colorClass" @click="handleClick">
            <h1 class="text-[#939393]">Items</h1>
        </div>
        <div class="w-[86%] py-3 text-center rounded-lg my-2" :class="colorClass" @click="handleClick">
            <h1 class="text-[#939393]">Products</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdminSideBar",
    data() {
        return {
            isClicked: false,
            colorClass: ''
        };
    },
    methods: {
        handleClick() {
            this.isClicked = !this.isClicked;
            this.colorClass = this.isClicked ? 'clicked' : '';
        }
    }
}
</script>

<style scoped>
.clicked {
  background-color: #f90a0e;
  /* Add any other styles you want */
}
</style>