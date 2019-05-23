<template>
  <div class="home" id="Home">
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
          <li v-for="(a, i) in lotteryList" :key="a.name">
            <div class="avatar"
                :style="`background-image: url(${a.avator})`"
                @click="toggleWinner(a, i)">
            </div>
          </li>
        </ul>
        <div class="winner display-3 show">{{ winner }}</div>
        <v-btn v-if="lotteryList.length !== isWinned.length" color="error"
              :loading="btnLoading"
              :disabled="btnLoading"
              @click="randomLot">
          Start
        </v-btn>
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
  private btnLoading = false;
  private ranIndex = -1;
  private lotteryList: any[] = this.$store.state.lotteryList;
  private isWinned: any[] = [];
  private noWinned: any[] = this.$store.state.lotteryList;
  private winner: string = 'Ready';

  /**
   * Delay 延遲秒數
   * @param {Number} interval 毫秒數
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
    const max = this.noWinned.length;
    const noWinnedIndex = Math.floor(Math.random() * max);
    return this.lotteryList.indexOf(this.noWinned[noWinnedIndex]);
  }

  /**
   * Random lottery
   */
  private async randomLot() {
    const nextDelay = 500;
    const retryNumber = 5;
    const circle = document.querySelector('.animateCircle') as HTMLElement;
    const winner = document.querySelector('.winner') as HTMLElement;

    // Start Process...
    this.btnLoading = true;

    // Lastone avator half opacity
    if (this.ranIndex >= 0) {
      const lastone = document.querySelectorAll('.avatarList .avatar')[this.ranIndex] as HTMLElement;
      lastone.classList.add('hide');
    }

    // Hide winner
    winner.classList.remove('show');
    // Show Circle
    circle.classList.add('show');

    for (let i = 0; i < retryNumber; i++) {
      this.ranIndex = this.randomIndex();

      const avatar = document.querySelectorAll('.avatarList .avatar')[this.ranIndex] as HTMLElement;
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
    }

    this.winner = this.lotteryList[this.ranIndex].name;
    // Show winner
    winner.classList.add('show');
    // Put winner in isWinned, remove from noWinned list
    this.isWinned.push(this.lotteryList[this.ranIndex]);
    this.noWinned = this.noWinned.filter((el) => {
                      return el !== this.lotteryList[this.ranIndex];
                    });
    // Stop Process...
    this.btnLoading = false;
  }

  /**
   * Toggle Winner
   */
  private toggleWinner(person: object, index: number) {
    const a = document.querySelectorAll('.avatarList .avatar')[index] as HTMLElement;

    // If object is in isWinned, change to noWinned.
    if (this.isWinned.indexOf(person) > -1) {
      this.noWinned.push(person);
      this.isWinned = this.isWinned.filter((el) => {
                      return el !== person;
                    });
      a.classList.remove('hide');
    } else { // If object is in noWinned, change to isWinned.
      this.isWinned.push(person);
      this.noWinned = this.noWinned.filter((el) => {
                      return el !== person;
                    });
      a.classList.add('hide');
    }
  }

  /**
   * Reset
   */
  private reset() {
      const avatars = document.querySelectorAll('.avatarList .avatar');
      const circle = document.querySelector('.animateCircle') as HTMLElement;

      // Hide Circle
      circle.classList.remove('show');

      // Show all avatars
      for(let i = 0; i < avatars.length; i++) {
        avatars[i].classList.remove('hide');
      }

      // Reset Values
      this.btnLoading = false;
      this.ranIndex = -1;
      this.lotteryList = this.$store.state.lotteryList;
      this.isWinned = [];
      this.noWinned = this.$store.state.lotteryList;
      this.winner = 'Ready';
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
            cursor: pointer;
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

