<script setup>
import cityOptions from "@/server/data/cityOptions.json";

const route = useRoute();
const citySlug = computed(() => route.params.city);

const cityLabel = computed(() => cityOptions[citySlug.value]?.[0] || "");
const cityInText = computed(() => cityOptions[citySlug.value]?.[1] || "");

useHead({
  title: cityInText.value,
  meta: [
    {
      name: "description",
      content: computed(
        () =>
          `Friendly Poker Club — легальная офлайн игра в покер ${cityInText.value}. Для новичков, любителей и профессионалов.`
      ),
    },
    {
      property: "og:url",
      content: computed(() => `https://friendlypoker.ru/${cityLabel.value}`),
    },
  ],
  link: [
    { rel: "canonical", href: `https://friendlypoker.ru/${citySlug.value}` },
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
