<script setup lang="ts">
import { onMounted } from "vue";
import { usePostStore } from "../stores/postStore";

const postStore = usePostStore();

onMounted(() => {
  postStore.fetchPosts(); // Fetch data when component mounts
});
</script>

<template>
  <div>
    <h2 class="text-xl font-bold">Posts</h2>

    <p v-if="postStore.loading">Loading...</p>
    <p v-if="postStore.error" class="text-red-500">{{ postStore.error }}</p>

    <ul v-if="!postStore.loading && !postStore.error">
      <li v-for="post in postStore.posts" :key="post.id" class="p-2 border-b">
        <h3 class="font-semibold">{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>
