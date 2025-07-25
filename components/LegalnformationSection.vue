<script setup>
const { rawData: documentsRaw } = useCityData("docs");

const openedDocIdx = ref(null);

function toggleDoc(idx) {
  openedDocIdx.value = openedDocIdx.value === idx ? null : idx;
}

const pdfModules = import.meta.glob("/assets/documents/**/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

const documents = computed(() =>
  documentsRaw.value.map((doc) => {
    const key = `/assets/documents/${doc.path}`;
    const url = pdfModules[key];
    if (!url) {
      console.warn(`Не найден PDF по ключу ${key}`);
    }
    return { title: doc.title, url };
  })
);

const PdfRenderer = defineAsyncComponent({
  loader: () => import("@/components/PdfRenderer.vue"),
  suspensible: true,
});
</script>

<template>
  <section class="legal-information-section" id="documents">
    <h2>Правовая информация</h2>
    <div class="documents-wrapper">
      <div
        class="document"
        v-for="({ title, url }, index) in documents"
        :key="index"
        @click="toggleDoc(index)"
      >
        <div class="document-row">
          <p>{{ title }}</p>
          <button
            class="open-doc-btn"
            :class="{ open: openedDocIdx === index }"
          >
            <img src="/assets/icons/faq-open-btn.svg" alt="" />
          </button>
        </div>
        <Suspense>
          <template #default>
            <PdfRenderer
              :documents="documents"
              :openedDocIdx="openedDocIdx"
              :index="index"
            />
          </template>
          <template #fallback>
            <div class="loader">Загрузка PDF…</div>
          </template>
        </Suspense>
      </div>
    </div>
  </section>
</template>

<style scoped>
.legal-information-section {
  padding: 0 var(--horiz-main-padding);
  margin-bottom: 5rem;
}

.documents-wrapper {
  background-color: rgba(3, 3, 3, 0.3);
  border-radius: 2rem;
  padding: 2.5rem 1.5rem;
}
.document-row {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;
  padding: 2rem 1.5rem;
  transition: background-color 0.2s;

  &:not(:last-child) {
    border-bottom: 1px solid transparent;
    border-image-source: linear-gradient(
      to right,
      var(--dark-gradient-color),
      var(--light-gradient-color)
    );
    border-image-slice: 1;
  }
  &:first-child {
    border-top: 1px solid transparent;
    border-image-source: linear-gradient(
      to right,
      var(--dark-gradient-color),
      var(--light-gradient-color)
    );
    border-image-slice: 1;
  }

  p {
    font-size: clamp(1.3rem, 2vw, 1.7rem);
  }

  &:hover {
    background-color: rgba(3, 3, 3, 0.1);
  }
}

.open-doc-btn {
  img {
    width: 4.5rem;
  }
}
.open-doc-btn.open {
  transform: rotate(180deg);
}
</style>
