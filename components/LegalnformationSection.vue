<script setup>
const { rawData: documentsRaw } = useCityData("docs");

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

const pdfjsLib = ref(null);
const isDocLoading = ref(false);

onMounted(async () => {
  const lib = await import("pdfjs-dist/build/pdf.mjs");
  const workerUrl = (await import("pdfjs-dist/build/pdf.worker.min.mjs?url"))
    .default;

  pdfjsLib.value = lib;
  lib.GlobalWorkerOptions.workerSrc = workerUrl;
});

const openedDocIdx = ref(null);
const openDocState = useState("openDocIndex");

function toggleDoc(idx) {
  openedDocIdx.value = openedDocIdx.value === idx ? null : idx;
}

// изменения состояния из footer
watch(openDocState, async (newIdx) => {
  if (newIdx === null) return;

  openedDocIdx.value = newIdx;
  await nextTick();
  const el = document.getElementById(`pdf-doc-${newIdx}`);

  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });

  openDocState.value = null;
});

watch(openedDocIdx, async (newIdx) => {
  if (newIdx == null || !pdfjsLib.value) return;

  const pdfjs = pdfjsLib.value;
  const container = document.getElementById(`pdf-viewer-${newIdx}`);
  container.innerHTML = "";

  isDocLoading.value = true;

  try {
    const pdfjs = pdfjsLib.value;

    const { url } = documents.value[newIdx];
    const loadingTask = pdfjsLib.value.getDocument(url);
    const pdf = await loadingTask.promise;

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.2 });
      const canvas = document.createElement("canvas");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.display = "block";
      canvas.style.margin = "1rem auto";

      const ctx = canvas.getContext("2d");
      await page.render({ canvasContext: ctx, viewport }).promise;
      container.appendChild(canvas);
    }
  } catch (e) {
    console.error("Ошибка при загрузке PDF:", e);
  } finally {
    isDocLoading.value = false;
  }

  container.style.userSelect = "none";
  container.oncontextmenu = () => false;
});
</script>

<template>
  <section class="legal-information-section" id="documents">
    <h2>Правовая информация</h2>
    <div class="documents-wrapper">
      <div
        class="document"
        v-for="({ title, doc }, index) in documents"
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
        <transition name="slide-fade">
          <div
            v-show="openedDocIdx === index"
            :id="`pdf-doc-${index}`"
            class="doc-content"
          >
            <div :id="`pdf-viewer-${index}`" class="pdf-viewer-container"></div>
            <div v-if="isDocLoading">
              <span class="loader"></span>
            </div>
          </div>
        </transition>
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

.doc-content {
  position: relative;
  padding: 2rem 1.5rem;
  font-size: 1.8rem;
}

.open-doc-btn {
  img {
    width: 4.5rem;
  }
}
.open-doc-btn.open {
  transform: rotate(180deg);
}

.pdf-viewer-container {
  position: relative;
  overflow-y: auto;
  height: 90vh;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
}

.loader {
  position: absolute;
  width: 4rem;
  height: 4rem;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1rem solid var(--dark-gradient-color);
  border-left-color: var(--light-gradient-color);
  animation: loader 3s infinite;
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.slide-fade-enter-from {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.slide-fade-enter-to {
  opacity: 1;
  padding: 2rem 1.5rem;
}
.slide-fade-leave-from {
  opacity: 1;
  padding: 2rem 1.5rem;
}
.slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

@media (max-width: 762px) {
  .pdf-viewer-container {
    height: auto;
    min-height: 30rem;
  }
}
</style>
