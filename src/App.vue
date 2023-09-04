<template>
  <div class="app">
    <HeaderPage />
    <MainPage/>
    <FooterPage/>
  </div>
</template>
<script>
import FooterPage from "./components/FooterPage.vue";
import HeaderPage from "./components/HeaderPage.vue";
import MainPage from "./components/MainPage.vue";
export default {
  name: "header",
  components: { HeaderPage, MainPage, FooterPage },
};
</script>
