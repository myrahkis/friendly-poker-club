<script setup>
const route = useRoute();
const citySlug = route.params.city;

const { data: cityOptions } = await useAsyncData("opts", () =>
  fetch("/data/cityOptions.json").then((r) => r.json())
);

const cityInText = computed(() => {
  const opts = cityOptions.value;
  return opts && opts[citySlug] ? opts[citySlug][1] : "";
});

useHead({
  title: `Покерный клуб «Friendly poker» ${cityInText.value}`,
  meta: [
    {
      name: "description",
      content: `Покерный клуб в городе ${cityInText.value}`,
    },
    {
      property: "og:url",
      content: `https://friendlypoker.ru/${cityInText.value}`,
    },
  ],
});
</script>

<template>
  <HeroSection />
  <AboutUsSection />
  <TournamentsSection />
  <FAQSection />
  <GallerySection />
  <PricingSection />
  <FeedbackSection />
  <LegalnformationSection />
  <ContactsSection />
</template>

<style scoped></style>
