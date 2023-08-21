import { createStore } from 'vuex';
import axios from 'axios';


export default createStore({
state: {
    firstName: 'John',
    lastName: 'Doe',
    data: {},
  },
mutations: {
    setData(state, data) {
        state.data = data;
      },
},
actions: {
    fetchData({ commit }) {
        axios
          .get('https://bandaumnikov.ru/api/test/site/get-index')
          .then(response => {
            commit('setData', response.data.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
},
getters: {

}
})