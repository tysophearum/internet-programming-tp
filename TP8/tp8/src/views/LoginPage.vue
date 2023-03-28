<script setup>
</script>

<template>
  <div>
    <div class="border p-4">
      <div class="w-full flex justify-center my-5">
        <img class="w-1/3 " src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt="">
      </div>
      <label for="username" class="text-gray-500">Username</label><div class="m-2"></div>
      <input type="text" name="username" placeholder="Enter email" class="border-gray-200 h-10 border-2 w-full px-4 mb-3">
      <label for="password" class="text-gray-500">Password</label><div class="m-2"></div>
      <input type="text" name="password" placeholder="Enter Password" class="border-gray-200 h-10 border-2 w-full px-4 mb-3">
      <button class="h-10 w-full bg-[#05aa6d] text-white">Login</button>
    </div>
    <p class="w-full flex justify-end">Forget<span class="text-[#05aa6d] mx-2">password?</span></p>
  </div>
</template>
