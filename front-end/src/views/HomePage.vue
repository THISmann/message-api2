<!-- src/views/About.vue -->
<template>
  <div>

    <NavbarComponent />

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <!-- {{food.name}} -->
      <!-- card component with diffirent menu from the external api  -->
      <CardComponent v-for="food in foods" :key="food.id" :imageUrl="food.photo || imageSrc" :title="food.name"
        :content="food.landmark" :id_cafe="food.id" />
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
//import qs from 'qs'
import CardComponent from '../components/CardComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
export default {
  name: 'HomePage', // Update the component name
  components: {
    CardComponent,
    NavbarComponent
  },
  data() {
    return {
      foods: [],
       // image src
       imageSrc: require('@/assets/logo.png')
    }
  },
  mounted() {
    this.fetchFood();
  },
  methods: {
    // fetch the menu from the external api 
    fetchFood() {
      axios.get('https://bandaumnikov.ru/api/test/site/get-index', {
        params: this.axiosParams
      })
        .then(response => {
          this.foods = response.data.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  }

};
</script>