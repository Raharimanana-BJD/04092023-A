<template>
  <main class="mt-40">
    <section class="grid grid-cols-2 container">
      <img :src="section1.imgHeros" alt="Phone" />
      <div class="space-y-8">
        <h1 class="text-4xl leading-tight font-bold">{{ section1.titre }}</h1>
        <p class="text-xl leading-loose">{{ section1.description }}</p>
        <div class="grid grid-cols-2 gap-10 items-start">
          <div class="" v-for="index in section1.cards" :key="index">
            <div class="w-10 h-10 p-2 rounded-full bg-neutral-300">
              <img class="m-auto" :src="index.img" />
            </div>
            <h2 class="text-xl font-bold my-4">{{ index.titre }}</h2>
            <p class="text-sm">{{ index.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      section1: {
        imgHeros: "src/assets/images/phone.png",
        titre: "Explorez les possibilités offertes par notre application",
        description:
          " Surveillez l'évolution de vos règles, de votre ovulation, de vos symptômes prémenstruels (SPM) et bien d'autres éléments encore.",
        cards: [
          {
            img: "src/assets/svg/icon-calendar.svg",
            titre: "Calendrier",
            description:
              "Découvrez le calendrier d'Ampela : suivi précis, prévisions et rappels pour une compréhension du cycle, contraception et connaissance de soi.",
          },
          {
            img: "src/assets/svg/icon-forum.svg",
            titre: "Forum",
            description:
              "Ampela propose un forum et des messages privés avec des professionnels de santé pour un soutien complet en matière de santé reproductive.",
          },
          {
            img: "src/assets/svg/icon-articles.svg",
            titre: "Articles",
            description:
              "Ampela offre un accès sans connexion à des informations claires et concises sur les sujets liés à la menstruation. Les articles, adaptés à tous les âges, sont disponibles dès le téléchargement de l'application.",
          },
          {
            img: "src/assets/svg/icon-confiden.svg",
            titre: "Confidentialité",
            description:
              "Ampela sécurise vos données personnelles pour que vous soyez libre de gérer vos informations en toute sérénité.",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
