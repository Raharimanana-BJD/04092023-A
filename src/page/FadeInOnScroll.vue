<template>
  <div class="fade-in-on-scroll" ref="element">
    <Home />
  </div>
</template>

<script>
import gsap from 'gsap';
import Home from './Home.vue';

export default {
  name: 'FadeInOnScroll',
  props: {
    delay: {
      type: Number,
      default: 0.5, // Default delay for animation (in seconds)
    },
  },
  mounted() {
    this.animate();
    window.addEventListener('scroll', this.animate);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.animate);
  },
  methods: {
    animate() {
      const element = this.$refs.element;
      // Check if the element is in the viewport
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const isVisible = rect.top <= windowHeight && rect.bottom >= 0;
      if (isVisible) {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: this.delay,
        });
      }
    },
  },
  components: { Home },
};
</script>

<style scoped>
.fade-in-on-scroll {
  opacity: 0;
  transform: translateY(20px);
}
</style>
