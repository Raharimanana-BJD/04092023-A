<template>
  <div class="flex justify-center items-center flex-col gap-4 md:flex-row">
    <a
      v-for="(button, index) in buttons"
      :key="button"
      :index="index"
      :href="button.href"
      class="flex items-center justify-center px-8 py-2 rounded-xl space-x-4 bg-primary-500"
    >
      <img :src="button.img" class="w-8" />
      <div class="text-neutral-100 flex flex-col">
        <span class="text-sm">{{ button.textSm }}</span>
        <span class="text-base font-bold">{{ button.textLg }}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'secondary',
  props: {
    buttons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
