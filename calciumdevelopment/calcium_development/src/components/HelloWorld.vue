<template>
  <v-app>
    <v-main>
      <div class="bgShape" min-height="70vh" rounded="lg"></div>
      <div class="headerTextWrapper">
        <h1>TEST</h1>
        <br />
        <h1>TEXT</h1>
        <br />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
});
</script>

<style>
.bgShape {
  display: flex;
  position: absolute;
  left: 0%;
  right: 0;
  top: -10%;
  bottom: 0%;
  width: 100vw;
  height: 110vh;
  transform: translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(-20deg) skew(0deg, 0deg);
  background-color: rgb(2, 237, 237);
  z-index: 0;
}

.headerTextWrapper {
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  overflow: hidden;
  text-align: center;
  z-index: 1;
  padding: 0;
  margin: 0;
}
</style>
