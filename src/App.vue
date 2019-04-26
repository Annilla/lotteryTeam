<template>
  <v-app dark>
    <v-toolbar app color="black">
      <v-toolbar-title>Mobile Team Christmas 交換禮物！！！</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon dark @click="openSettings">
        <v-icon>settings</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid class="pa-0">
        <router-view></router-view>
      </v-container>
    </v-content>
    <Settings ref="Settings"></Settings>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Settings from '@/components/Settings.vue'; // @ is an alias to /src

export default Vue.extend({
  data() {
    return {
      settingsOpen: false,
    }
  },
  components: {
    Settings,
  },
  methods: {
    openSettings() {
      this.$refs.Settings.dialog = true;
    }
  }
})
</script>


<style lang="stylus">

</style>
