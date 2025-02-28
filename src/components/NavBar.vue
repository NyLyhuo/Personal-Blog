<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useThemeStore } from "../stores/themeStore";

const themeStore = useThemeStore();
const searchInput = ref<HTMLInputElement | null>(null);

const focusSearch = (event: KeyboardEvent) => {
  if ((event.metaKey || event.ctrlKey) && event.key === "k") {
    event.preventDefault();
    searchInput.value?.focus();
  }
};

onMounted(() => {
  themeStore.syncTheme();
  window.addEventListener("keydown", focusSearch);
});

onUnmounted(() => {
  window.removeEventListener("keydown", focusSearch);
});
</script>

<template>
  <nav class="px-8 py-4 border-b border-gray-200">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-center space-x-4">
        <router-link to="/">
          <img
            src="../assets/logo.svg"
            alt="logo"
            class="w-10 h-10 dark:invert"
          />
        </router-link>
        <input
          ref="searchInput"
          type="text"
          placeholder="Search..."
          class="h-7 px-3 py-1.5 dark:text-white bg-white dark:bg-black dark:placeholder:text-white rounded-md outline-1 -outline-offset-1 outline-gray-600 dark:outline-white focus:outline-1 focus:-outline-offset-1 focus:outline-primary"
        />
      </div>

      <div class="flex items-center justify-center space-x-4">
        <router-link
          to="/post"
          class="flex items-center justify-center w-7 h-7 border border-gray-400 rounded-md dark:text-white hover:border-primary"
          ><i class="pi pi-plus"></i
        ></router-link>
        <button
          @click="themeStore.toggleDarkMode"
          class="flex items-center justify-center w-7 h-7 border border-gray-400 rounded-md dark:text-white hover:border-primary"
        >
          <i :class="themeStore.isDark ? 'pi pi-sun' : 'pi pi-moon'"></i>
        </button>
      </div>
    </div>
  </nav>
</template>