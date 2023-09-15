<template>
  <div class="home">
    <!-- NavBar -->
    <nav class="p-4 w-full bg-neutral-100">
      <!-- flex container -->
      <div class="container flex justify-between items-center">
        <!-- logo -->
        <div>
          <img :src="navigations.logo.Img" :alt="navigations.logo.Alt" />
        </div>
        <!-- lists links -->
        <div class="items-center space-x-6 hidden md:block">
          <a
            :href="navigations.links.href"
            v-for="(item, index) in navigations.links"
            :key="item"
            :index="index"
            >{{ item.text }}</a
          >
        </div>
        <!-- button -->
        <div class="hidden md:block">
          <primary
            :btnTextPrimary="btnTextPrimary"
            :btnIconPrimary="btnIconPrimary"
          />
        </div>
        <!-- menu toggle -->
        <div class="relative space-y-2 md:hidden">
          <span
            v-for="item in 3"
            :key="item"
            class="item block w-11 h-1 bg-primary-500 rounded-full"
          ></span>
        </div>
      </div>
    </nav>
    <!-- container main -->
    <main>
      <!-- sections 01 -->
      <section class="bg-accents-400">
        <!-- container items -->
        <div
          class="container justify-between gap-4 flex items-center py-16 md:py-24 flex-col md:flex-row"
        >
          <!-- item -->
          <div class="text-center md:text-left space-y-4 lg:space-y-12 w-10/12">
            <h1 class="text-primary-500 text-2xl xl:text-3xl font-bold">
              Ampela - l'application qui simplifie le suivi de votre cycles
              menstruel
            </h1>
            <p class="text-sm xl:text-base">
              Ampela vous accompagne avec des conseils avisés, des prévisions
              personnalisées et un suivi détaillé pour aider à prendre des
              décisions éclairées concernant votre santé reproductive.
            </p>
            <!-- button -->
            <secondary01 :buttons="buttons" />
          </div>
          <!-- hero images -->
          <div class="w-1/2">
            <img
              src="../assets/images/Phones.png"
              alt="Phones"
              class="w-full"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import primary from '../components/Button/primary.vue';
import secondary01 from '../components/Button/secondary01.vue';

export default {
  name: 'home',
  data() {
    return {
      navigations: {
        logo: {
          Img: 'src/assets/images/logo.svg',
          Alt: 'Logo Ampela',
        },
        links: [
          {
            text: 'Acceuil',
            href: '#acceuil',
          },
          {
            text: 'Fonctionnalité',
            href: '#fonctionnalite',
          },
          {
            text: 'À propos',
            href: '#apropos',
          },
          {
            text: 'Articles',
            href: '#articles',
          },
        ],
      },
      // data btn primary
      btnTextPrimary: "Télécharge l'application",
      btnIconPrimary: 'src/assets/svg/icon-down.svg',
      // data btn secondary
      buttons: [
        {
          img: 'src/assets/svg/icon-google.svg',
          textSm: 'Télécharge',
          textLg: 'Google Play',
          href: '#google-play',
        },
        {
          img: 'src/assets/svg/icon-apple.svg',
          textSm: 'Télécharge',
          textLg: 'App Store',
          href: '#app-store',
        },
      ],
    };
  },
  components: { primary, secondary01 },
};
</script>

<style></style>
