<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useHead } from "#imports";

const route = useRoute();

const cityOptions = ref([]);
const citySlug = computed(() => route.params.city);

const cityLabel = computed(() => cityOptions.value?.[0] || "");
const cityInText = computed(() => cityOptions.value?.[1] || "");

const fetchCityOptions = async (slug) => {
  const res = await $fetch(`/api/cities/${slug}/cityOptionsByCity`);
  cityOptions.value = JSON.parse(res[0].names);
};

onMounted(async () => {
  fetchCityOptions(citySlug.value);
});
watch(citySlug, (newSlug) => {
  fetchCityOptions(newSlug);
});

// meta и title
useHead({
  title: () => `| ${cityLabel.value}`,
  meta: [
    {
      name: "description",
      content: () =>
        `Friendly Poker Club — легальная офлайн игра в покер ${cityInText.value}. Для новичков, любителей и профессионалов.`,
    },
    {
      property: "og:url",
      content: () => `https://friendlypoker.ru/${citySlug.value}`,
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
