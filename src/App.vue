<template>
  <v-app dark>
    <v-toolbar app color="black">
      <!-- <v-toolbar-title>Mobile Team Christmas 交換禮物！！！</v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-btn icon dark @click="openSettings">
        <v-icon>settings</v-icon>
      </v-btn>
    </v-toolbar>
    <Settings ref="Settings"></Settings>
    <v-content>
      <v-container fluid class="pa-0">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Settings from '@/components/Settings.vue'; // @ is an alias to /src

@Component({
  components: {
    Settings,
  },
})
export default class App extends Vue {
  public $refs!: {
    Settings: HTMLFormElement,
  };

  // methods
  private openSettings() {
    this.$refs.Settings.dialog = true;
  }
}
</script>

<style lang="stylus">
.theme--dark.application {
  background: black !important;
}
</style>
