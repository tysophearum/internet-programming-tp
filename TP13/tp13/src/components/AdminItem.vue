<template>
    <div>
        <AddItemPopUp v-if="this.$store.state.showAddItem"/>
        <DeleteItemPopup v-if="this.$store.state.showDeleteItem" />
        <EditItemPopUp v-if="this.$store.state.showEditItem"/>
        <h1 class=" text-4xl m-7">Item</h1>
        <div class=" flex justify-end m-2">
            <button class=" bg-blue-700 w-fit px-3 text-white h-9 rounded" @click="showPopup(true)">Add Item</button>
        </div>
        <div class=" w-full h-12 rounded bg-blue-300 grid grid-cols-3">
            <div class=" flex items-center justify-center font-bold">Name</div>
            <div class=" flex items-center justify-center font-bold">Description</div>
            <div class=" flex items-center justify-center font-bold">Action</div>
        </div>
        <div v-for="(item, index) in this.$store.state.items" class=" w-full h-12 rounded bg-blue-100 grid grid-cols-3">
            <div class=" flex items-center justify-center">{{ item.name }}</div>
            <div class=" flex items-center justify-center">{{ item.description }}</div>
            <div class="flex items-center justify-between px-28">
                <button class=" bg-white w-20 h-9 rounded" @click="showEditItem(item._id)">Edit</button>
                <button class=" bg-red-700 w-20 h-9 rounded text-white" @click="showDeleteItem(); passId(item._id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import AddItemPopUp from './AddItemPopUp.vue';
import DeleteItemPopup from './DeleteItemPopup.vue';
import EditItemPopUp from './EditItemPopUp.vue';
import axios from 'axios';
    export default {
        name: "AdminProduct",
        components: {
            AddItemPopUp,
            DeleteItemPopup,
            EditItemPopUp
        },
        methods: {
            showPopup(show) {
                this.$store.commit("showAddItem", show)
            },
            showDeleteItem() {
                this.$store.commit("showDeleteItem", true)
            },
            passId(id) {
                this.$store.commit("deleteItemId", id)
                console.log(this.$store.state.deleteItemId);
            },
            showEditItem(id) {
                this.$store.commit("showEditItem", true)
                axios.get("http://localhost:3000/item/find/"+id)
                .then(res => {
                    this.$store.commit("editItem", res.data)
                })
            }
        }
    }
    
</script>