import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore("postStore", {
  state: () => ({
    posts: [] as any[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchPosts() {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get("http://127.0.0.1:8000/api/posts");
        this.posts = response.data;
      } catch (error) {
        this.error = "fuck off";
      } finally {
        this.loading = false;
      }
    },

    async addPost(newPost: { title: string; body: string; userId: number }) {
      this.loading = true;
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/posts",
          newPost,
          { headers: { "Content-Type": "application/json" } }
        );
        this.posts.push(response.data);
      } catch (error) {
        this.error = "fuck off";
      } finally {
        this.loading = false;
      }
    },
  },
});
