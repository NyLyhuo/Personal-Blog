<script setup lang="ts">
import { usePostStore } from '../stores/postStore';

const postStore = usePostStore();
</script>
<template>
  <div class="min-h-full flex flex-col items-center justify-center mt-8">
    <h1 class="text-2xl font-bold mb-4 text-primary">Personal Blog</h1>
    <router-link
      :to="'/post/' + post.id"
      v-for="post in postStore.posts"
      :key="post.id"
      class="group block w-full mx-auto max-w-md p-5 border-b border-gray-600"
    >
      <h2
        class="text-xl font-bold mb-2 dark:text-white group-hover:text-primary transition"
      >
        {{ post.title }}
      </h2>
      <p class="dark:text-gray-200">{{ post.description }}</p>
      <div
        class="flex items-center justify-between w-full mt-2 text-gray-600 dark:text-gray-200 text-sm italic"
      >
        <p class="">{{ post.createAt }}</p>
        <p
          class="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full text-xs"
        >
          #{{ post.tag }}
        </p>
      </div>
    </router-link>
  </div>
</template>