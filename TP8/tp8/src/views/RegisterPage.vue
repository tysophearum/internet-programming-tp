<template>
  <div class="border p-4">
    <div class="w-full flex justify-center">
      <img class="w-1/3 " src="https://cdn-icons-png.flaticon.com/512/6238/6238238.png" alt="">
    </div>
    <p class="mb-5 border-b-2">Please in the form to create an account.</p>
    <label for="Email" class="text-gray-500">Email</label><div class="m-2"></div>
    <input type="text" name="Email" placeholder="Enter email" class="border-gray-200 h-10 border-2 w-full px-4 mb-3">
    <label for="Username" class="text-gray-500">Username</label><div class="m-2"></div>
    <input type="text" name="Username" placeholder="Enter Username" class="border-gray-200 h-10 border-2 w-full px-4 mb-3">
    <label for="First name" class="text-gray-500">First name</label><div class="m-2"></div>
    <input type="text" name="First name" placeholder="Enter First name" class="border-gray-200 h-10 border-2 w-full px-4 mb-3">
    <label for="Last name" class="text-gray-500">Last name</label><div class="m-2"></div>
    <input type="text" name="Last name" placeholder="Enter Last name" class="border-gray-200 h-10 border-2 w-full px-4 mb-3">
    <label for="password" class="text-gray-500">Password</label><div class="m-2"></div>
    <input type="text" name="password" placeholder="Enter Password" class="border-gray-200 h-10 border-2 w-full px-4 mb-3">
    <p class="w-full my-3">By craeting an account you agree to our<span class="text-blue-700 mx-2">Terms & Privicy</span>.</p>
    <button class="h-10 w-1/2 bg-[#05aa6d] text-white">Sign Up</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
