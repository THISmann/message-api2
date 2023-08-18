<template>
  <!-- Card component with menu detail -->
    <div class="bg-white rounded-lg shadow-md p-6 ">
      <img :src="imageUrl" alt="Image" class="rounded-lg mb-4">
      <h2 class="text-xl font-semibold mb-2">{{ title }}</h2>
      <p class="text-gray-700">{{ content }}</p>
      <p> id_cafe : <i> {{ id_cafe }}</i> </p>
      <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"> <router-link :to="'/detail/' + id_cafe">View Detail</router-link> </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageUrl: String,
      title: String,
      content: String,
      id_cafe: Number, 

    },
   
  };
  </script>
  