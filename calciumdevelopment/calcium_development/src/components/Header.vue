<template>
  <v-app style="padding-top: 20%">
    <div>
      <div class="pullRight"></div>
      <h1
        class="display-heading text-8xl sm:text-8xl md:text-10xl xl:text-12xl leading-extra-tight lg:leading-none v-scroll-reveal"
        data-sr-id="1"
        style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 0.8s cubic-bezier(0.5, 0, 0, 1) 0.6s, transform 0.8s cubic-bezier(0.5, 0, 0, 1) 0.6s;"
      >
        <span>tackle huge</span><br /><span>challenges.</span>
      </h1>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
});
</script>

<style>
h1 {
  text-align: center;
  color: #262626;
  font-size: 10em;
}
h1 span {
  background-color: #ff6d42;
  animation: 1s ease-out 0s 1 slideInFromLeft;
  padding: 30px;
  transition: width 0.3s cubic-bezier(0.5, 0, 0, 1);
  transition-property: width;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
  transition-delay: 0s;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.display-heading span::before {
  content: "";
  position: absolute;
  margin-top: 1rem;
  height: 4rem;
  background-color: red;
  z-index: -1;
  left: -5px;
  top: 0;
  transition: width 0.3s cubic-bezier(0.5, 0, 0, 1);
  -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0, 1);
  animation-timing-function: cubic-bezier(0.5, 0, 0, 1);
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

div.pullRight span:after {
  width: 20%;
}

header {
  /* This section calls the slideInFromLeft animation we defined above */
}
</style>
