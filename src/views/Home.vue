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
          <div class="animateCircle"></div>
          <li v-for="a in lotteryList" :key="a.name">
            <div class="avatar" :style="`background-image: url(${a.avator})`"></div>
          </li>
        </ul>
        <div class="winner display-3">{{ winner }}</div>
        <v-btn color="error" @click="randomLot">Start</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {
  // initial data
  private prevIndex = -1;
  private lotteryList = this.$store.state.lotteryList;
  private winner = 'Ready';

  /**
   * Delay 延遲秒數
   */
  private delayTime(interval: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, interval);
    });
  }

  /**
   * Random Index
   */
  private randomIndex() {
    const max = this.lotteryList.length - 1;
    const min = 0;
    return Math.floor(Math.random() * max) + min;
  }

  /**
   * Random lottery
   */
  private async randomLot() {
    const nextDelay = 500;
    const retryNumber = 5;
    const circle = document.querySelector('.animateCircle') as HTMLElement;
    const winner = document.querySelector('.winner') as HTMLElement;

    if(this.prevIndex >= 0) {
      const lastone = document.querySelectorAll('.avatarList .avatar')[this.prevIndex] as HTMLElement;
      lastone.classList.add('hide');
    }

    // Hide winner
    winner.classList.remove('show');
    // Show Circle
    circle.classList.add('show');

    for (let i = 0; i < retryNumber; i++) {
      let ranIndex = this.randomIndex();

      while (this.prevIndex === ranIndex) { // 數字不能跟上次一樣
        ranIndex = this.randomIndex();
      }

      const avatar = document.querySelectorAll('.avatarList .avatar')[ranIndex] as HTMLElement;
      const top = avatar.offsetTop;
      const left = avatar.offsetLeft;
      const width = avatar.offsetWidth;
      const height = avatar.offsetHeight;

      // 延遲 nextDelay 秒後
      await this.delayTime(nextDelay);
      circle.style.top = `${top - 5}px`;
      circle.style.left = `${left - 5}px`;
      circle.style.width = `${width + 10}px`;
      circle.style.height = `${height + 10}px`;
      this.prevIndex = ranIndex;
    }

    this.winner = this.lotteryList[this.prevIndex].name;
    // Show winner
    winner.classList.add('show');
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
      width: 70%;
      padding: 30px;
      margin: 50px auto 0 auto;
      border-radius: 50px;
      background-color: rgba(0, 0, 0, 0.5);

      ul.avatarList {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;

        li {
          list-style: none;
          display: flex;
          flex: 0 0 calc(25% - 20px);
          margin: 10px;

          .avatar {
            width: 10vw;
            height: 10vw;
            max-width: 150px;
            max-height: 150px;
            margin: 0 auto;
            border-radius: 50%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            transition: .5s;
            &.hide {
              opacity: 0.5;
            }
          }
        }

        .animateCircle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 5px solid white;
          opacity: 0;
          transition: .5s;
          &.show {
            opacity: 1;
          }
        }

      }

      .winner {
        width: 60%;
        margin: 20px auto;
        border-radius: 50px;
        background-color: black;
        opacity: 0;
        transition: .5s;
        transition-delay: .5s;
        &.show {
          opacity: 1;
        }
      }
    }

  }
}
</style>

