<template>
  <v-app id="inspire">
    <v-main>
      <HelloWorld />
      <Header />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld,
    Header,
  },

  data: () => ({
    //
  }),
});
</script>
