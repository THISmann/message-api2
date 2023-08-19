<template>
    <NavbarComponent />

    <div class="">

        <!-- comment form -->
        <div class="min-h-screen  bg-gray-100  justify-center items-center">
            <div class="md:w-2/4 sm:w-4/4 m-8 bg-white rounded-lg shadow-md p-6  ">
                <h2 class="text-xl font-semibold mb-4">{{ this.details.title }}</h2>
                <img :src="this.details.photo" alt="Item Image" class="mb-4 rounded-lg">
                <p class="text-gray-700">{{ this.details.address }}</p>
            </div>

            <div class="md:w-2/4 sm:w-4/4 m-8 bg-white p-6 rounded shadow-md  ">
                <form @submit.prevent="submitForm">
                    <div class="mb-4">
                        <label for="text" class="block text-sm font-medium text-gray-600"> comment </label>
                        <textarea type="text" v-model="text" id="text" name="text" class="mt-1 p-2 w-full border rounded" />
                    </div>
                    <div class="mb-4">
                        <button @click="postMessage()"
                            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send</button>
                    </div>
                </form>
            </div>

            <table class="w-3/4 border-collapse border border-gray-300 m-5">
                    <h1> More Details</h1>
                    <thead>
                        <!-- <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left">More Details </th>
                            <th class="border border-gray-300 px-4 py-2 text-left">More Details </th>
                        </tr> -->

                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"> name </td>
                            <td class="border border-gray-300 px-4 py-2"> {{ this.details.name }} </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"> details </td>
                            <td class="border border-gray-300 px-4 py-2"> {{ this.details.address }} </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"> landmark </td>
                            <td class="border border-gray-300 px-4 py-2"> {{ this.details.landmark }} </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"> cuisine </td>
                            <td class="border border-gray-300 px-4 py-2"> {{ this.details.cuisine }} </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"> distance </td>
                            <td class="border border-gray-300 px-4 py-2"> {{ this.details.distance }} </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"> time </td>
                            <td class="border border-gray-300 px-4 py-2"> {{ this.details.time }} </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"> price </td>
                            <td class="border border-gray-300 px-4 py-2"> {{ this.details.price }} Rub</td>
                        </tr>
                    </tbody>
                </table>


        </div>

       

    </div>
</template>
  
<script>
import axios from 'axios';
import qs from 'qs';
import NavbarComponent from '../components/NavbarComponent.vue';
export default {
    components: {
        NavbarComponent
    },
    data() {
        return {
            item: {},
            details: {},
            text: '',
        };
    },
    mounted() {
        // Access the itemId parameter from the route
        const itemId = this.$route.params.itemId;

        // Fetch or set the item data based on the itemId
        // For demonstration purposes, using static data
        this.item = {
            title: `Item ${itemId}`,
            imageUrl: `https://via.placeholder.com/300?text=Item+${itemId}`,
            description: `Description for Item ${itemId}`,
        };


        axios.get(`https://bandaumnikov.ru/api/test/site/get-view?id=${itemId}`, {
            // params: this.axiosParams
        })
            .then(response => {
                this.details = response.data.data;
                console.log(this.details.id)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                this.loading = false;
            });
    },
    methods: {
        // push message to the local api
        postMessage() {
            axios.post('http://localhost:8888/messages', qs.stringify({ 'text': this.text, 'id_cafe': this.$route.params.itemId })).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error('Error posting data:', error);
            });

        }
    }
};
</script>
  