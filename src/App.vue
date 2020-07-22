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

.error {
  text-align: center;
  font-size: 0.8em;
  width: 100%;
  border-radius: 2px;
  color: red;
  background: rgba(209, 90, 77, 0.2);
  padding: 5px 0;
}

@media screen and (max-width: 1100px) {
  .container {
    display: block !important;
  }
  .adicionar {
    margin: 0;
    button {
      width: 30%;
      position: relative;
      margin-right: 0 !important;
    }
  }
  .user {
    padding: 0 !important;
  }
}
@media screen and (max-width: 750px) {
  .container {
    width: 90% !important;
    .adicionar {
      margin-right: 0 !important;
    }
  }
  .modal {
    width: auto !important;
  }
}
</style>
