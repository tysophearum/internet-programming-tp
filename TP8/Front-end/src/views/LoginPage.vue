<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col w-full h-[100vh] justify-center items-center md:flex-row">
    <header class="flex items-center">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> 
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Log in</RouterLink><br>
          <RouterLink to="/register">Register</RouterLink>
        </nav>
      </div>
    </header>
    <div>
      <form onsubmit="return false" class="border p-4">
        <div class="w-full flex justify-center my-5">
          <img class="w-1/3 " src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt="">
        </div>
        <label for="username" class="text-gray-500">Username</label><div class="m-2"></div>
        <input v-model="email" type="text" name="username" placeholder="Enter email" class="border-gray-200 h-10 border-2 w-full px-4 mb-3">
        <label for="password" class="text-gray-500">Password</label><div class="m-2"></div>
        <input v-model="password" type="password" name="password" placeholder="Enter Password" class="border-gray-200 h-10 border-2 w-full px-4 mb-3">
        <button @click="login();" class="h-10 w-full bg-[#05aa6d] text-white">Login</button>
      </form>
      <p class="w-full flex justify-end">Forget<span class="text-[#05aa6d] mx-2">password?</span></p>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function () {
      // console.log($refs.email.value);s
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify( {
          email: this.email,
          password: this.password
        })
      }).then(async (res) => {
        const data = await res.json();
        if(data.success === true){
          this.$router.push('/home')
        }
      })
      this.email=''
      this.password=''
    }
  }
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>