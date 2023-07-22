<script>
import StartScreen from './components/StartScreen.vue'

export default {
  components: {
    StartScreen,
  },
  data() {
    return {
      showStartScreen: false,
    };
  },
  watch: {
    '$route'(to, from) {
      // Trigger the transition effect when navigating to a new route
      this.showStartScreen = true;
    },
  },
  methods: {
    handleTransitionEnd() {
      // Reset the flag after the transition ends
      this.showStartScreen = false;
    },
  },
};
</script>

<template>
  <StartScreen msg="Vite + Vue" />
</template>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
