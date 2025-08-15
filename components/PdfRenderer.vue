<script setup>
import { loadPdfJs } from "@/helpers/lazyPdfLoader.js";

const props = defineProps({
  documents: Array,
  openedDocIdx: Number,
  index: Number,
});

const emit = defineEmits(["update:openedDocIdx"]);

const isDocLoading = ref(false);
const openDocState = useState("openDocIndex");

const pdfCache = new Map();

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function findEl(id, { timeout = 1000, interval = 50 } = {}) {
  const deadline = Date.now() + timeout;

  while (Date.now() < deadline) {
    const el = document.getElementById(id);

    if (el && el.offsetHeight > 0) return el;

    await wait(interval);
  }

  return null;
}

watch(openDocState, async (newIdx) => {
  if (newIdx === null) return;

  emit("update:openedDocIdx", newIdx);
  await nextTick();

  const el = await findEl(`pdf-doc-${newIdx}`);
  if (!el) {
    openDocState.value = null;
    return;
  }

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  await wait(400);
  
  openDocState.value = null;
});

const openedIdxRef = toRef(props, "openedDocIdx");
watch(openedIdxRef, async (newIdx) => {
  if (newIdx === null || newIdx !== props.index) return;

  const container = document.getElementById(`pdf-viewer-${newIdx}`);
  isDocLoading.value = true;

  try {
    const pdfjs = await loadPdfJs();

    container.innerHTML = "";

    const { url } = props.documents[newIdx];
    let pdf = pdfCache.get(url);

    if (!pdf) {
      pdf = await pdfjs.getDocument(url).promise;
      pdfCache.set(url, pdf);
    }

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

    container.style.userSelect = "none";
    container.oncontextmenu = () => false;
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
  <transition name="slide-fade">
    <div
      v-show="props.openedDocIdx === props.index"
      :id="`pdf-doc-${props.index}`"
      class="doc-content"
    >
      <div :id="`pdf-viewer-${props.index}`" class="pdf-viewer-container"></div>
      <div v-if="isDocLoading">
        <span class="loader"></span>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.doc-content {
  position: relative;
  padding: 2rem 1.5rem;
  font-size: 1.8rem;
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
    max-height: 60vh;
  }
}
</style>
