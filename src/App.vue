<template>
  <div id="app">
    <transition name="bounch">
    <router-view></router-view>
    </transition>
  </div>
</template>


<script>
import profile from './components/profile'
export default {
  name: 'app',
  components: {
    profile
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bounch-enter-active {
  transition: all .6s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
.bounch-leave-active {
  transition: all .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.bounch-enter {
  transform: rotateY(-90deg);
}
.bounch-leave-to {
  transform: rotateY(90deg);
}
</style>
