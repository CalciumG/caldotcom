<template>
  <v-app id="inspire">

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <div class="bg-shape"
              min-height="70vh"
              rounded="lg"
            >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({

  }),
});
</script>

<style>

.bg-shape {
  display: flex;
  position: absolute;
  left: 0%;
  right: 0;
  top: 0%;
  bottom: 0;
  width: 100vw;
  height: 110vh;
  transform: translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(-20deg) skew(0deg, 0deg);
  background-color: rgb(2, 237, 237);
}

</style>
