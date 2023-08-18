<!-- <template>
  <div>
    <h1>message API Example</h1>
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

    <div class="grid gap-x-8 gap-y-4 grid-cols-4" >
      <!-- {{food.name}} -->
      <CardComponent v-for="food in foods" :key="food.id" :imageUrl="food.photo" :title="food.name"
        :content="food.landmark" :id_cafe="food.id" /> 
   
        
    </div>


    <!-- <div>
      <input v-model="id_cafe" type="text" /> <br />
      <textarea v-model="text" type="text"> </textarea> <br />
      <button @click="postMessage()"> Post message </button>
    </div> -->
    <div class=" mt-8 bg-white p-6 rounded shadow-md">
      <h2 class="text-xl font-semibold mb-4">Contact Form</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-600">id_cafe</label>
          <input v-model="id_cafe" type="text" id="name" name="name" class="mt-1 p-2 w-full border rounded" />
        </div>
        <div class="mb-4">
          <label for="text" class="block text-sm font-medium text-gray-600">Text</label>
          <textarea v-model="text" type="text" id="text" name="text" class="mt-1 p-2 w-full border rounded" />
        </div>
        <div class="mb-4">
          <button @click="postMessage()"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
        </div>
      </form>
    </div>




  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs'
import CardComponent from './CardComponent.vue'
//let queryString = qs.stringify(params)

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      messages: [],
      foods: [],
      formData: {
        name: '',
        email: '',
      },
      text: '',
      id_cafe: '',
      loading: true,
      messageInfo: {
        text: this.text,
        id_cafe: this.id_cafe
      }
    };
  },
  mounted() {
    this.fetchMessage();
    this.fetchFood();
  },
  computed: {
    axiosParams() {
      const params = new URLSearchParams();
      params.append('page', '3');
      return params;
    }
  },
  methods: {
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
    },
    fetchFood(){
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
    postMessage() {
      axios.post('http://localhost:8888/messages', qs.stringify({ 'text': this.text, 'id_cafe': this.id_cafe })).then(response => {
        this.messages = [...this.messages, response.data];
        this.fetchMessage();
        console.log(this.messages);
      }).catch(error => {
        console.error('Error posting data:', error);
      });

    }
  }
};
</script> -->
