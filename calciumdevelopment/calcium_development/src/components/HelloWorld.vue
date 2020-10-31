<template>
  <v-app>
    <v-main>
      <div class="bgShape show-on-scroll" min-height="70vh" rounded="lg"></div>
      <div class="headerTextWrapper ">
        <h1 class="headerText">TEST</h1>
        <br />
        <h1 class="headerText">TEXT</h1>
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
  background-color: rgb(50, 57, 237);
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

.colour-change-bg {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100vw;
  height: 100vh;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  background-color: #e2e6e1;
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -o-object-fit: fill;
  object-fit: fill;
}

.headerText {
  font-size: 10em;
  color: white;
}
</style>
