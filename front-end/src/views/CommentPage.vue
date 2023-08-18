<template>
      <NavbarComponent />
    <div>
        <h1>Comments</h1>
        <!-- comment table -->
        <table class="min-w-full border-collapse">
            <thead>
                <tr>
                    <th class="py-2 px-3 bg-gray-200 font-semibold text-sm text-gray-600 border-b">#</th>
                    <th class="py-2 px-3 bg-gray-200 font-semibold text-sm text-gray-600 border-b"> Message </th>
                    <th class="py-2 px-3 bg-gray-200 font-semibold text-sm text-gray-600 border-b"> id_cafe </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="message in messages" :key="message.id">
                    <td class="py-2 px-3 border-b">{{ message.id }}</td>
                    <td class="py-2 px-3 border-b">{{ message.text }}</td>
                    <td class="py-2 px-3 border-b">{{ message.id_cafe }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import axios from 'axios'; 
import NavbarComponent from '../components/NavbarComponent.vue';

export default {
    name: 'CommentPage',
  components: { 
    NavbarComponent
  },
  data() {
    return {
      messages: [], 
      text: '',
      id_cafe: '',
      loading: true,
     
    };
  },
  mounted() {
    // call the fetch method here
    this.fetchMessage(); 
  },
  computed: {
    axiosParams() {
      const params = new URLSearchParams();
      params.append('page', '3');
      return params;
    }
  },
  methods: {
    // fetch the message from yii api with axios
    fetchMessage() {
      axios.get('http://localhost:8888/messages', {
        params: this.axiosParams
      })
        .then(response => {
          this.messages = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        })
        .finally(() => {
          this.loading = false;
        });
    }  
  }
};
</script>
