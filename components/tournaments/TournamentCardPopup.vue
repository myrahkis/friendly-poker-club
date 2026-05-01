<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from "vue";

const { visible, panel, tournament, tour, content } = defineProps({
  visible: Boolean,
  panel: Object,
  tournament: Object,
  tour: Object,
  content: String,
});

const emit = defineEmits(["close"]);

const popupRef = ref(null);

const handleClose = () => {
  emit("close");
};

const handleClickOutside = (e) => {
  const el = popupRef.value;
  if (!visible || !el) return;

  if (!el.contains(e.target)) {
    handleClose();
  }
};

const handleKeydown = (e) => {
  if (e.key === "Escape") {
    handleClose();
  }
};

watch(
  () => visible,
  async (v) => {
    if (v) {
      await nextTick();
    }
  },
);

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      ref="popupRef"
      class="description-popup"
      :style="{
        width: panel?.width ? `${panel.width}px` : undefined,
        top: panel?.top ? `${panel.top}px` : undefined,
        left: panel?.left ? `${panel.left}px` : undefined,
      }"
    >
      <div class="description-popup__head">
        <p class="description-popup__date">
          {{ tournament?.date }}
        </p>

        <button class="description-popup__close" @click="handleClose">
          Скрыть
        </button>
      </div>

      <div class="description-popup__body">
        <p class="description-popup__time">
          c {{ tour?.startTime }} до {{ tour?.endTime }}
        </p>

        <p class="description-popup__name">
          {{ tour?.name }}
        </p>

        <div
          v-if="content"
          class="description-popup__content"
          v-html="content"
        />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.description-popup {
  position: absolute;
  z-index: 10;
  padding: 1.4rem 1.5rem;
  border-radius: 1.6rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background-color: #0d3472;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.38);
  animation: popupFade 0.22s ease;
}

.description-popup__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-bottom: 0.9rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.description-popup__date {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
}

.description-popup__close {
  cursor: pointer;
  border: none;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: #9ec5ff;
  font-size: 0.95rem;
  font-weight: 600;
  transition: 0.2s ease;
}

.description-popup__close:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  transform: translateY(-1px);
}

.description-popup__body {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.description-popup__time {
  margin: 0;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.72);
}

.description-popup__name {
  margin: 0;
  font-size: 1.45rem;
  font-weight: 800;
  color: #fff;
}

.description-popup__content {
  margin-top: 0.2rem;
  padding: 1rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.04);
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  word-break: break-word;
}

@media (max-width: 600px) {
  .description-popup {
    left: var(--horiz-main-padding) !important;
    right: var(--horiz-main-padding) !important;
    width: auto !important;
  }
}
</style>
