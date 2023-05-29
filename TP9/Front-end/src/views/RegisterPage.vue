

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
    <div class="border p-4">
    <div class="w-full flex justify-center">
      <img class="w-1/3 " src="https://cdn-icons-png.flaticon.com/512/6238/6238238.png" alt="">
    </div>
    <p class="mb-5 border-b-2">Please in the form to create an account.</p>
    <label for="Email" class="text-gray-500">Email</label><div class="m-2"></div>
    <input type="email" v-model="email" name="Email" placeholder="Enter email" class="border-gray-200 h-10 border-2 w-full px-4 mb-3">
    <label for="Username" class="text-gray-500">Username</label><div class="m-2"></div>
    <input type="text" v-model="username" name="Username" placeholder="Enter Username" class="border-gray-200 h-10 border-2 w-full px-4 mb-3">
    <label for="First name" class="text-gray-500">First name</label><div class="m-2"></div>
    <input type="text" v-model="firstname" name="First name" placeholder="Enter First name" class="border-gray-200 h-10 border-2 w-full px-4 mb-3">
    <label for="Last name" class="text-gray-500">Last name</label><div class="m-2"></div>
    <input type="text" v-model="lastname" name="Last name" placeholder="Enter Last name" class="border-gray-200 h-10 border-2 w-full px-4 mb-3">
    <label for="password" class="text-gray-500">Password</label><div class="m-2"></div>
    <input type="password" v-model="password" name="password" placeholder="Enter password" class="border-gray-200 h-10 border-2 w-full px-4 mb-3">
    <p class="w-full my-3">By craeting an account you agree to our<span class="text-blue-700 mx-2">Terms & Privicy</span>.</p>
    <button class="h-10 w-1/2 bg-[#05aa6d] text-white" @click="signup">Sign Up</button>
  </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      email: '',
      username: '',
      firstname: '',
      lastname: '',
      password: ''
    };
  },
  methods: {
    signup: function () {
      fetch("http://localhost:3000/register", {
        method: "POST",
        body: JSON.stringify( {
          email: this.email,
          username: this.username,
          firstName: this.firstname,
          lastName: this.lastname,
          password: this.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => response.json()).then((json) => console.log(json));

      this.email = ''
      this.username = ''
      this.firstname = ''
      this.lastname = ''
      this.password = ''

      this.$router.push('/')
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
