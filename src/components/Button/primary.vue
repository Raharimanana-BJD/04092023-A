<template>
  <a href="#" class="w-fit flex space-x-2 rounded-md px-4 py-2 bg-accents-600">
    <span class="text-neutral-100">{{ btnTextPrimary }}</span>
    <img :src="btnIconPrimary" alt="icon" />
  </a>
</template>

<script>
export default {
  name: 'primary',
  props: {
    btnTextPrimary: String,
    btnIconPrimary: String,
  },
};
</script>

<style></style>
