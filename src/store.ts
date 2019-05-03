import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lotteryList: [
      {
        name: 'Anny Chang',
        avator: 'https://api.adorable.io/avatars/200/AnnyChang.png',
      },
      {
        name: 'Bruce Chen',
        avator: 'https://api.adorable.io/avatars/200/BruceChen.png',
      },
      {
        name: 'Carl Yang',
        avator: 'https://api.adorable.io/avatars/200/CarlYang.png',
      },
      {
        name: 'Danny Lai',
        avator: 'https://api.adorable.io/avatars/200/DannyLai.png',
      },
      {
        name: 'Edward Kuo',
        avator: 'https://api.adorable.io/avatars/200/EdwardKuo.png',
      },
      {
        name: 'Gina Chiu',
        avator: 'https://api.adorable.io/avatars/200/GinaChiu.png',
      },
      {
        name: 'Katrina Chuang',
        avator: 'https://api.adorable.io/avatars/200/KatrinaChuang.png',
      },
      {
        name: 'Poy Chang',
        avator: 'https://api.adorable.io/avatars/200/PoyChang.png',
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
});
