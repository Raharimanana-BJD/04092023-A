<template>
  <header class="Parent bg-accents-400 h-screen">
    <nav class="fixed w-full py-4 bg-neutral-100/75 backdrop-blur-sm">
      <div class="container flex items-center justify-between m-auto">
        <img :src="logoImg" alt="Logo" />
        <ul class="flex items-center space-x-4">
          <li
            class="text-primary-500 hover:bg-accents-600 hover:text-neutral-100 transition-all rounded-full py-1 px-4"
            v-for="link in links"
            :key="link"
          >
            <a href="">{{ link }}</a>
          </li>
        </ul>
        <button
          class="flex items-center space-x-4 bg-accents-600 py-3 px-10 text-neutral-100 rounded-full"
        >
          <span>Telecharge l’application</span>
          <img src="../assets/svg/icon-down.svg" alt="" />
        </button>

        <div class="toggle-menus">
            <div class="menu">
                <span></span>
            </div>
        </div>
      </div>
    </nav>
    <div
      class="container grid lg:grid-cols-2 items-start pt-40 sm:grid-cols-1 md:grid-cols-1 gap-10"
    >
      <div class="space-y-8">
        <h1 class="text-5xl leading-tight font-bold">{{ titre }}</h1>
        <p class="text-xl leading-loose">{{ descriptions }}</p>
        <div class="grid grid-cols-2 items-center space-x-4">
            <GooglePlay/>
            <AppleStore/>
        </div>
      </div>
      <div class="m-auto">
        <img :src="herosRight" alt="Phones" />
      </div>
    </div>
  </header>
</template>

<script>
import AppleStore from './AppleStore.vue';
import GooglePlay from './GooglePlay.vue';

export default {
    name: "header",
    data() {
        return {
            links: ["Accueil", "Fonctionnalité", "À propos"],
            logoImg: "src/assets/images/logo.svg",
            titre: "Ampela - L'application qui simplifie le suivi de votre cycle menstruel",
            descriptions: "Ampela vous accompagne avec des conseils avisés, des prévisions personnalisées et un suivi détaillé pour vous aider à prendre des décisions éclairées concernant votre santé reproductive.",
            herosRight: "src/assets/images/Phones.png",
            btn: [
                {
                    img: "src/assets/svg/icon-apple.svg",
                    label: "Google Play",
                },
                {
                    img: "src/assets/svg/icon-google.svg",
                    label: "App Store",
                },
            ],
        };
    },
    components: { GooglePlay, AppleStore }
};
</script>

<style></style>
