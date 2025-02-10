import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    isDark: localStorage.getItem("theme") === "dark",
  }),

  actions: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
      localStorage.setItem("theme", this.isDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", this.isDark);
    },

    syncTheme() {
      const savedTheme = localStorage.getItem("theme");
      this.isDark = savedTheme === "dark";
      document.documentElement.classList.toggle('dark', this.isDark)
    },
  },
});
