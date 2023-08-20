<template>
    <NavbarComponent />



    <!-- comment form -->
    <div class="min-h-screen  bg-gray-100 grid ">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
            <div class="md:w-4/4 sm:w-4/4 m-8 bg-white rounded-lg shadow-md p-3  ">
                <h2 class="text-xl font-semibold mb-4">{{ this.details.title }}</h2>
                <img :src="this.details.photo" alt="Item Image" class="mb-4 rounded-lg">
                <p class="text-gray-700">{{ this.details.address }}</p>
            </div>

            <div class="md:w-4/4 sm:w-4/4 m-8 bg-white p-6 rounded shadow-md  ">
                <table class="w-3/4 border-collapse border border-gray-300 m-5">
                    <h1> More Details</h1>
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"> name </td>
                            <td class="border border-gray-300 px-4 py-2"> {{ this.details.name }} </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"> address </td>
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

                <a :href="telegramShareUrl" target="_blank" rel="noopener noreferrer"
                    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <!-- Replace this path with the appropriate Telegram icon SVG path -->
                        <path fill="currentColor"
                            d="M18.755 0H5.244A5.256 5.256 0 000 5.244v12.51A5.256 5.256 0 005.244 23h12.51A5.256 5.256 0 0023 17.756V5.244A5.256 5.256 0 0017.756 0zm-3.783 15.672c-.482 0-.89.384-1.203.867l-2.978 3.625a.88.88 0 01-1.257.16.867.867 0 01-.159-1.227l2.85-3.468-6.267-4.284a.867.867 0 01-.25-1.203.878.878 0 011.205-.252l7.064 4.835 2.744-3.34c.31-.383.722-.601 1.204-.601a.878.878 0 01.619 1.5l-2.978 3.625a.88.88 0 01-1.256.161l-1.977-1.4-4.11 4.988a.88.88 0 01-1.204.161.867.867 0 01-.161-1.203l4.236-5.147.72-.878a1.72 1.72 0 012.473-.334l3.38 2.395a1.72 1.72 0 01.335 2.473l-1.2 1.458a.867.867 0 01-.643.286z" />
                    </svg>
                    Share on Telegram
                </a>
            </div>
        </div>
        <div class="md:w-4/4 sm:w-4/4 m-8 bg-white p-6 rounded shadow-md">

            <h1 class="text-2xl font-semibold mb-4">Comment and Notation</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
                <div class="md:w-2/4 sm:w-4/4">
                    <form @submit.prevent="submitNotation" class="max-w-md">
                        <div class="mb-6">
                            <label class="block font-semibold mb-2" for="rating">Rating</label>
                            <select v-model="note" id="rating" name="rating" class="w-full px-4 py-2 border rounded-lg">
                                <option value="5">5 - Excellent</option>
                                <option value="4">4 - Very Good</option>
                                <option value="3">3 - Good</option>
                                <option value="2">2 - Fair</option>
                                <option value="1">1 - Poor</option>
                            </select>
                        </div>
                        <button @click="postNote()" class="bg-blue-500 text-white px-4 py-2 rounded-lg">Submit</button>
                    </form>
                </div>

                <div class="md:w-2/4 sm:w-4/4">
                    <form @submit.prevent="submitForm" class="max-w-md">
                        <div class="mb-4">
                            <label for="text" class="block text-sm font-medium text-gray-600"> comment </label>
                            <textarea type="text" v-model="text" id="text" name="text"
                                class="mt-1 p-2 w-full border rounded" />
                        </div>
                        <div class="mb-4">
                            <button @click="postMessage()"
                                class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send</button>
                        </div>
                    </form>
                </div>
            </div>


        </div>


        <div class="md:w-4/4 sm:w-4/4 m-8 bg-white p-6 rounded shadow-md flex items-center">
            <div v-for="star in avrNote" :key="star" class="cursor-pointer">
                <svg :class="{ 'text-yellow-500': avrNote >= star }" xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 fill-current" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1l2.39 6.47h6.73l-5.46 4.43 2.39 6.47-5.46-4.43-5.46 4.43 2.39-6.47-5.46-4.43h6.73z" />
                </svg>
            </div>
        </div>

        <div class="md:w-4/4 sm:w-4/4 m-8 bg-white p-6 rounded shadow-md">
            <ul role="list" class="divide-y divide-gray-100">
                <li v-for="message in messageById" :key="message.id" class="flex justify-between gap-x-6 py-5">
                    <div class="flex min-w-0 gap-x-4">
                        <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="imageSrc" alt="profile" />
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900"> Anonyme </p>
                            <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ message.text }}</p>
                        </div>
                    </div>
                    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm leading-6 text-gray-900"> Restaurant ID </p>
                    </div>
                </li>
            </ul>


        </div>



    </div>
</template>
  
<script>
import axios from 'axios';
import qs from 'qs';
import NavbarComponent from '../components/NavbarComponent.vue';
//import RatingComponent from '../components/RatingComponent.vue';
//import { response } from 'express';
//import { response } from 'express';
export default {
    components: {
        NavbarComponent
    },
    data() {
        return {
            item: {},
            details: {},
            text: '',
            note: 1,
            avrNote: 1,
            messageById: [],
            notation: {
                rating: '5',
                comment: '',
            },
            imageSrc: require('@/assets/logo.png')
        };
    },
    computed: {
        telegramShareUrl() {
            // Replace 'YOUR_URL_HERE' with the content you want to share
            const contentToShare = JSON.stringify({ 'name': this.details.name, 'address': this.details.address, 'price': this.details.price });

            // Construct the Telegram share URL
            return `https://t.me/share/url?url=${contentToShare}`;
        },
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
                this.getMessageFromIdCafe(itemId);
                this.getNoteFromIdCafe(itemId);
            });
    },
    methods: {
        // push message to the local api
        postMessage() {
            axios.post('http://localhost:8888/messages', qs.stringify({ 'text': this.text, 'id_cafe': this.$route.params.itemId })).then(response => {
                console.log(response.data);
                this.messageById = [...this.messageById, response.data];
                this.text = "";
            }).catch(error => {
                console.error('Error posting data:', error);
            });

        },
        postNote() {
            axios.post('http://localhost:8888/notes', qs.stringify({ 'note': this.note, 'id_cafe': this.$route.params.itemId })).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error('Error posting data:', error);
            });
        },
        getMessageFromIdCafe(id_cafe) {
            axios.get(`http://localhost:8888/messages-by-cafe/${id_cafe}`, {
                // params 
            }).then(response => {
                this.messageById = response.data
                console.log(this.messageById);
            }).catch(error => {
                console.error('Error fetching data:', error);
            })
        },
        getNoteFromIdCafe(id_cafe) {
            axios.get(`http://localhost:8888/notes-by-cafe/${id_cafe}`, {}).then(response => {
                console.log(response.data);
                if (response.data.length >= 1) {
                    this.avrNote = parseInt((response.data.reduce((accumulator, currentObject) => accumulator + currentObject.note, 0)) / response.data.length);

                }

                console.log(this.avrNote);
            }).catch(error => {
                console.error('error fetch data:', error);
            })
        }
    }
};
</script>
  