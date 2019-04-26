<template>
  <div class="home">
    <div class="videoWrapper">
      <iframe
        class="YTbg"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6oD1uYkbc9Y?controls=0&autoplay=1&loop=1"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="randonList">
      <div class="wrapCircle">
        <ul class="avatarList">
          <li v-for="a in lotteryList" :key="a.name">
            <div class="avatar" :style='`background-image: url(${a.avator})`'>
            {{ a.name }}
            </div>
          </li>
        </ul>
        <v-btn color="error" @click="randomLot">Start</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    // HelloWorld,
  }
})
export default class Home extends Vue {
  // initial data
  lotteryList = this.$store.state.lotteryList;
  winner = null;

  /**
   * Delay 延遲秒數
   */
  delayTime (interval: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, interval);
    });
  }

  /**
   * Random lottery
   */
  async randomLot() {
    let nextDelay = 100;
    let retryNumber = 50;
    let max = this.lotteryList.length - 1;
    let min = 0;

    // for (let i = 0; i < retryNumber; i++) {
    //   let ranIndex = Math.floor(Math.random() * max) + min; 
    //   // 延遲 nextDelay 秒後
    //   await this.delayTime(nextDelay);
    //   this.winner = this.lotteryList[ranIndex];
    // }
  }
}
</script>

<style lang="stylus">
.home {
  position: relative;

  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .randonList {
    width: 100%;
    position: absolute;
    text-align: center;
    top: 0;

    .wrapCircle {
      position: relative;
      margin: 10% auto 0 auto;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);

      ul.avatarList {
        padding-top: 40%;
        padding-bottom: 50px;
        li {
          list-style none
        }
      }
    }
  }
}
</style>

