<template>
  <div
    class="flex items-center justify-center w-[229px] lg:w-auto xsm:w-full space-x-4 py-2 px-8 bg-primary-500 rounded-full"
    href=""
  >
    <img :src="img" alt="Google Play" />
    <div class="flex flex-col text-neutral-100">
      <span class="text-xs">Telecharge sur</span>
      <span class="text-xl font-bold">{{ label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "google",
  data() {
    return {
      img: "src/assets/svg/icon-apple.svg",
      label: "Google Play",
    };
  },
};
</script>

<style></style>
