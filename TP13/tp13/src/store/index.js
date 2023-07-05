import { createStore } from "vuex";

const store = createStore({
    state: {
      sides: [
        "Category",
        "Items",
        "Products"
      ],
      categories: null,
      items: null,
      products: null,
      showAddCat: false,
      showAddItem: false,
      showAddProduct: false,
      showDeleteProduct: false,
      showDeleteItem: false,
      showDeleteCat: false,
      showEditProduct: false,
      showEditItem: false,
      showEditCat: false,
      deleteProductId: null,
      deleteItemId: null,
      deleteCategoryId: null,
      editCategory: {
        name: "",
        description: ""
      },
      editItem: {
        name: "",
        description: ""
      },
      editItem: {
        name: "",
        description: "",
        categoryId: ""
      },
      editProduct: {
        name: "",
        description: "",
        categoryId: "",
        itemId: "",
        imageSrc: ""
      },
      price: null,
      selectedProductId: null
    },
    mutations: {
      setCategories(state, data) {
        state.categories = data
      },
      setItems(state, data) {
        state.items = data
      },
      setProducts(state, data) {
        state.products = data
      },
      setSelectedProductId(state, data) {
        state.selectedProductId = data
      },
      showAddCat(state, data) {
        state.showAddCat = data
      },
      showAddItem(state, data) {
        state.showAddItem = data
      },
      showAddProduct(state, data) {
        state.showAddProduct = data
      },
      showDeleteProduct(state, data) {
        state.showDeleteProduct = data
      },
      deleteProductId(state, data) {
        state.deleteProductId = data
      },
      showDeleteItem(state, data) {
        state.showDeleteItem = data
      },
      deleteItemId(state, data) {
        state.deleteItemId = data
      },
      showDeleteCategory(state, data) {
        state.showDeleteCat = data
      },
      deleteCategoryId(state, data) {
        state.deleteCategoryId = data
      },
      showEditCat(state, data) {
        state.showEditCat = data
      },
      showEditItem(state, data) {
        state.showEditItem = data
      },
      showEditProduct(state, data) {
        state.showEditProduct = data
      },
      editCategory(state, data) {
        state.editCategory = data
      },
      editItem(state, data) {
        state.editItem = data
      },
      editProduct(state, data) {
        state.editProduct = data
      },
    },
    getters: {

    }
})

export default store