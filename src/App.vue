<template>
  <div class="app">
    <FadeInOnScroll :delay="0.5" />
    <!-- <Home /> -->
  </div>
</template>
<script>
import FadeInOnScroll from './page/FadeInOnScroll.vue';
import Home from './page/Home.vue';

export default {
  name: 'header',
  components: { Home, FadeInOnScroll },
};
</script>
