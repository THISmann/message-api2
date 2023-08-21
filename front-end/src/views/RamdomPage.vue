<template>
    <NavbarComponent />
    
    <div class="bg-white">
        <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div
                class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <svg viewBox="0 0 1024 1024"
                    class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                        fill-opacity="0.7" />
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                            <stop stop-color="#7775D6" />
                            <stop offset="1" stop-color="#E935C1" />
                        </radialGradient>
                    </defs>
                </svg>
                <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl"> you can chose a random
                        .<br />Start now.</h2>
                    <p class="mt-6 text-lg leading-8 text-gray-300"> get a ramdom restaurant.</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <a @click="fetchData"
                            class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get
                            started</a>
                    </div>
                </div>

                <div class="relative mt-16 h-80 md:m-24 bg-white p-6 rounded shadow-md">
                   <div v-for="(item, index) in fetchedData" :key="index" class="divide-y divide-gray-100 ">
                    <div v-if="index === 0">
                
                    </div>
                    <div v-else>
                        <p class="m-4"> Name : {{ item.name }}  </p>
                        <p class="m-4"> Address :{{ item.address }}  </p>       
                        <p class="m-4"> Cuisine :{{ item.cuisine }}  </p>
                        <p class="m-4"> Price {{ item.price }}  </p> 
                        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"> <router-link :to="'/detail/' + item.id">View Detail</router-link> </button>
                    </div>
                        

                    </div>    
                </div>
            </div>
        </div>
    </div>

   
</template>
<script>
// import axios from 'axios';
// import qs from 'qs';
import NavbarComponent from '../components/NavbarComponent.vue';
import { mapState, mapActions } from 'vuex';

export default {

    components: {
        NavbarComponent
    },
    computed: {
        ...mapState(['data']),
        fetchedData() {
            const arrData = Object.entries(this.data);
            //const arrayP = this.data;
            const random = Math.floor(Math.random() * (arrData).length);
            //const arr = arrayP.map(proxyObject => Object.fromEntries(Object.entries(proxyObject)));
          //  console.log(Object.keys(arrData[random]));
            return arrData[random];
            //[random];
        },
    },
    data() {
        return {

        };
    },
    methods: {
        getRandomRestaurant() {


            //      // Fetch or set the item data based on the itemId
            // axios.get(`https://bandaumnikov.ru/api/test/site/get-view?id=${itemId}`, {
            //     // params: this.axiosParams
            // })
            //     .then(response => {
            //         this.details = response.data.data;
            //         console.log(this.details.id)
            //     })
            //     .catch(error => {
            //         console.error('Error fetching data:', error);
            //     })
            //     .finally(() => {
            //         this.loading = false;
            //         this.getMessageFromIdCafe(itemId);
            //         this.getNoteFromIdCafe(itemId);
            //     });
        },
        ...mapActions(['fetchData']),
    },
}

</script>