<template>
  <footer class="container py-40">
    <ul class="grid grid-cols-4">
      <li class="flex flex-col space-y-4 " v-for="item in footers" :key="item">
        <h1>{{ item.titre }}</h1>
        <span v-for="index in item.link" :key="index">{{ index }}</span>
      </li>
      <div class="space-y-4">
        <h1>TELECHARGE</h1>
          <GooglePlay/>
          <AppleStore/>
      </div>
    </ul>
  </footer>
</template>

<script>
import AppleStore from './AppleStore.vue';
import GooglePlay from './GooglePlay.vue';

export default {
    name: "footer",
    data() {
        return {
            footers: [
                {
                    titre: "CONFIDENTIALITÉ",
                    link: [
                        "Politique de confidentialité",
                        "Conditions d'utilisation",
                        "Politique de cookies",
                    ],
                },
                {
                    titre: "SOCIAL MEDIA",
                    link: ["facebook", "linkedin", "Instagram"],
                },
                {
                    titre: "CONTACT",
                    link: [
                        "+261 34 00 323 01",
                        "infoAmpela@gmail.com",
                        "Madagascar - Tuléar",
                    ],
                },
            ],
        };
    },
    components: { GooglePlay, AppleStore }
};
</script>

<style></style>
