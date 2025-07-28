<script setup>
import cityOptions from "@/server/data/cityOptions.json";

const firstCity = Object.keys(cityOptions)[0];

definePageMeta({
  redirect: `/${firstCity}`,
});
</script>

<template>
  <div></div>
</template>
