<script setup lang="ts"></script>

<template>
  <div class="min-h-full flex flex-col items-center justify-center mt-8">
    <h1 class="text-2xl font-bold text-primary tracking-tight">
      Create a post
    </h1>
    <form class="sm:w-full sm:max-w-md sm:mx-auto mt-8 space-y-4">
      <label
        for="title"
        class="block text-sm/6 font-medium text-gray-900 dark:text-gray-200"
        >Title</label
      >
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        class="w-full px-3 py-1.5 rounded-md text-base text-gray-900 dark:text-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
      />
      <label
        class="block text-sm/6 font-medium text-gray-900 dark:text-gray-200"
        >Description</label
      >
      <textarea
        placeholder="Description"
        class="block w-full px-3 py-1.5 rounded-md text-base text-gray-900 dark:text-gray-200 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
      ></textarea>
      <label>Tag</label>
      <input type="text" />
      <button>Create</button>
    </form>
  </div>
</template>

<style scoped>
</style>