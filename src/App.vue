<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/css/_variables.scss";
@import "@/assets/css/global.scss";

#app {
  display: flex;
  justify-content: center;
}

// Vue Transitions
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: all 0.5s;
}
.fade-move {
  transition: transform 300ms;
}
</style>
