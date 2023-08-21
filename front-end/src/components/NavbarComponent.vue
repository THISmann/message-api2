<template>
  <!-- nav bar component -->
     <nav class="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-50">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <router-link to="/" class="text-xl font-semibold">Home</router-link>
          <router-link to="/ramdom" class="text-xl font-semibold"> Ramdom </router-link> 
          <router-link to="/comment" class="text-xl font-semibold">comment</router-link> 
        </div>
        <div>
          <!-- Additional navigation items (e.g., user profile, settings) -->
        </div>
      </div>
    </nav>
  </template> 
  
  <script>
  export default {};
  </script>
  