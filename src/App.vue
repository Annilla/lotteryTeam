<template>
  <v-app dark>
    <v-toolbar app color="black">
      <v-toolbar-title>Mobile Team Christmas 交換禮物！！！</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon dark>
        <v-icon>settings</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid class="pa-0">
        <router-view></router-view>
      </v-container>
    </v-content>
    <!-- <Settings ref="Settings"></Settings> -->
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    // HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang="stylus">

</style>
