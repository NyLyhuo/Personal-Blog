<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { usePostStore } from "../stores/postStore";

const postStore = usePostStore();
const formData = reactive({
  title: "",
  body: "",
});

function addPost() {
  if (!formData.title || !formData.body) return;
  postStore.addPost({
    title: formData.title,
    body: formData.body,
    userId: 1,
  });
  formData.title = "";
  formData.body = "";
}
</script>

<template>
  <div class="min-h-full flex flex-col items-center justify-center mt-8">
    <h1 class="text-2xl font-bold text-primary tracking-tight">
      Create a post
    </h1>
    <form
      @submit.prevent="addPost"
      class="sm:w-full sm:max-w-md sm:mx-auto mt-8 space-y-4"
    >
      <label
        for="title"
        class="block text-sm/6 font-medium text-gray-900 dark:text-gray-200"
        >Title</label
      >
      <input
        type="text"
        id="title"
        name="title"
        v-model="formData.title"
        placeholder="Title"
        class="w-full px-3 py-1.5 rounded-md text-base text-gray-900 dark:text-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
      />
      <label
        for="body"
        class="block text-sm/6 font-medium text-gray-900 dark:text-gray-200"
        >Description</label
      >
      <textarea
        id="body"
        name="body"
        v-model="formData.body"
        rows="5"
        placeholder="Description"
        class="block w-full px-3 py-1.5 rounded-md text-base text-gray-900 dark:text-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
      ></textarea>
      <button
        type="submit"
        class="block w-full px-3 py-1.5 rounded-md text-white bg-primary hover:bg-blue-400"
      >
        Create
      </button>
    </form>
  </div>
</template>

<style scoped>
</style>