<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<script>
import Login from './views/Login.vue';
import Admin from './views/Admin.vue'
export default {
  data() {
    return {
      logout: true,
    };
  },
  name: "App",
  components: {
    Login,
    Admin
  }
}
</script>