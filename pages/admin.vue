<script setup>
const files = ref([]);
const previews = ref([]);
const isLoading = ref(false);
const router = useRouter();

function onFileChange(e) {
  const input = e.target;

  if (!input.files) return;

  files.value = Array.from(input.files);
  previews.value = files.value.map((f) => URL.createObjectURL(f));
}

async function upload() {
  if (files.value.length === 0) return;
  isLoading.value = true;
  try {
    const formData = new FormData();
    files.value.forEach((file, i) => {
      formData.append("photos", file);
    });

    const res = await $fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    // router.push("/admin/success");
  } catch (err) {
    console.error(err);
    alert("Ошибка загрузки");
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div class="admin-container">
    <h1>Загрузка фото</h1>
    <input type="file" multiple accept="image/*" @change="onFileChange" />

    <div v-if="previews.length">
      <div v-for="(url, idx) in previews" :key="idx">
        <img :src="url" />
      </div>
    </div>

    <button @click="upload" :disabled="isLoading">
      {{ isLoading ? "Загрузка..." : "Загрузить" }}
    </button>
  </div>
</template>

<style scoped>
.admin-container {
  padding: 0 var(--horiz-main-padding);
  padding-top: 10%;
  margin-bottom: 29%;
}
</style>
