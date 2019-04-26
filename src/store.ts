import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lotteryList: [
      {
        name: 'Anny Chang',
        avator: 'https://api.adorable.io/avatars/285/AnnyChang.png'
      },
      {
        name: 'Bruce Chen',
        avator: 'https://api.adorable.io/avatars/285/BruceChen.png'
      },
      {
        name: 'Edward Kuo',
        avator: 'https://api.adorable.io/avatars/285/EdwardKuo.png'
      },
      {
        name: 'Gina Chiu',
        avator: 'https://api.adorable.io/avatars/285/GinaChiu.png'
      },
      {
        name: 'Katrina Chuang',
        avator: 'https://api.adorable.io/avatars/285/KatrinaChuang.png'
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
});
