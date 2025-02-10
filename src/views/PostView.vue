<script setup lang="ts">
import { reactive } from "vue";
import { usePostStore } from "../stores/postStore";

const postStore = usePostStore();
const post = reactive({
  title: "",
  description: "",
  tag: "",
});
function handlePost() {
  if (!post.title || !post.description || !post.tag) {
    alert("Please enter all fields");
    return;
  }

  postStore.addPost({
    title: post.title,
    description: post.description,
    tag: post.tag,
  });

  post.title = '',
  post.description = '',
  post.tag = ''
}
</script>

<template>
  <div class="min-h-full flex flex-col items-center justify-center mt-8">
    <h1 class="text-2xl font-bold text-primary tracking-tight">
      Create a post
    </h1>
    <form
      @submit.prevent="handlePost"
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
        v-model="post.title"
        placeholder="Title"
        class="w-full px-3 py-1.5 rounded-md text-base text-gray-900 dark:text-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
      />
      <label
        for="description"
        class="block text-sm/6 font-medium text-gray-900 dark:text-gray-200"
        >Description</label
      >
      <textarea
        id="description"
        name="description"
        rows="5"
        v-model="post.description"
        placeholder="Description"
        class="block w-full px-3 py-1.5 rounded-md text-base text-gray-900 dark:text-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
      ></textarea>
      <label
        for="tag"
        class="block text-sm/6 font-medium text-gray-900 dark:text-gray-200"
        >Tag</label
      >
      <select
        id="tag"
        name="tag"
        v-model="post.tag"
        placeholder="Tag"
        class="block w-full px-3 py-1.5 rounded-md text-base text-gray-900 dark:text-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
      >
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
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