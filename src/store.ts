import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lotteryList: [
      {
        name: 'Anny Chang',
        avator: 'https://kingstono365-my.sharepoint.com/personal/annychang_kingstono365_onmicrosoft_com/Documents/%E9%9B%9C%E9%A0%85/xmas/2019/anny.png',
      },
      {
        name: 'Bruce Chen',
        avator: 'https://kingstono365-my.sharepoint.com/personal/annychang_kingstono365_onmicrosoft_com/Documents/%E9%9B%9C%E9%A0%85/xmas/2019/bruce.png',
      },
      {
        name: 'Carl Yang',
        avator: 'https://kingstono365-my.sharepoint.com/personal/annychang_kingstono365_onmicrosoft_com/Documents/%E9%9B%9C%E9%A0%85/xmas/2019/carl.png',
      },
      {
        name: 'Danny Lai',
        avator: 'https://kingstono365-my.sharepoint.com/personal/annychang_kingstono365_onmicrosoft_com/Documents/%E9%9B%9C%E9%A0%85/xmas/2019/danny.png',
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
