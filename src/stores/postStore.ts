import { defineStore } from "pinia";

export const usePostStore = defineStore("postStore", {
  state: () => ({
    posts: [
      {
        id: 1,
        title: "Mastering Vue 3 Composition API",
        description:
          "A deep dive into Vue 3's Composition API and how to use it effectively.",
        createAt: "2025-02-12",
        tag: "Vue.js",
        is_saved: false,
      },
      {
        id: 2,
        title: "10 Tailwind CSS Tricks for Better UI",
        description:
          "Improve your frontend design with these Tailwind CSS tips and tricks.",
        createAt: "2025-02-10",
        tag: "Tailwind CSS",
        is_saved: false,
      },
      {
        id: 3,
        title: "Getting Started with Pinia",
        description:
          "Learn how to manage state in Vue applications using Pinia.",
        createAt: "2025-02-08",
        tag: "Pinia",
        is_saved: false,
      },
      {
        id: 4,
        title: "Dark Mode Implementation in Vue",
        description:
          "Step-by-step guide to adding a dark mode toggle to your Vue app.",
        createAt: "2025-02-05",
        tag: "Vue.js",
        is_saved: false,
      },
      {
        id: 5,
        title: "Deploying a Vue App with Vite",
        description:
          "Learn how to deploy your Vue 3 project built with Vite to production.",
        createAt: "2025-02-02",
        tag: "Deployment",
        is_saved: false,
      },
    ],
  }),

  actions: {
    addPost(post) {
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        description: post.description,
        createAt: new Date().toLocaleDateString().split("T")[0],
        tag: post.tag,
        is_saved: false,
      });
    },
  },
});
