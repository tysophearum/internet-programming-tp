<template>
    <div class="body bg-gray-100 flex items-center justify-center min-h-screen">
        <div id="wrapper" class="shadow-md rounded-xl px-8 py-6 w-1/3">
        <h2 class="text-2xl font-bold mb-6 text-white">Login</h2>
        <form method="post" @submit="login">
          <div class="mb-4">
            <label class="block text-black text-sm font-bold mb-2" for="username">Username</label>
            <input v-model="username" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your username">
          </div>
          <div class="mb-6">
            <label class="block text-black text-sm font-bold mb-2" for="password">Password</label>
            <input v-model="password" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password">
          </div>
          <div class="flex items-center justify-start">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                username: '',
                password: ''
            };
        },
        name: "Login",
        methods: {
            login (event) {
                event.preventDefault(); // Prevent default form submission

                let data = {
                    username: this.username,
                    password: this.password
                }

                axios.post("http://localhost:3000/login", data)
                    .then(response => {
                        // Handle the API response
                        let res = response.data;
                        // Reset the form
                        this.username = '';
                        this.password = '';

                        if(res.success) {
                            this.$router.push("/home")
                        }
                    })
                    .catch(error => {
                        // Handle any errors
                        console.error(error);
                    });
            }
        }
    }
</script>
<style scoped>
    .body{
      background-image: url("https://images.squarespace-cdn.com/content/v1/59f6af428c56a8c070e33354/1563397786708-IFSQCT4AHKZS4XZTP5VP/cafe.png?format=2500w");
      background-repeat: no-repeat;
      background-size: cover;
    }
    #wrapper{
      backdrop-filter: blur(20px);
    }
</style>