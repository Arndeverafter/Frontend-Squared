<script setup>
import vBtn from "./../utils/VBtn.vue";
import { onMounted } from "vue";
import { currentTheme, initTheme, switchTheme } from "@/composables/theme.js";
import { useAuthStore } from "./../../stores/auth";

import { storeToRefs } from "pinia";
const { user } = storeToRefs(useAuthStore());
const { logout } = useAuthStore();

onMounted(() => {
  initTheme();
});
</script>

<template>
  <header class="inset-x-0 top-0">
    <div class="container flex justify-between items-center p-4 mx-auto">
      <router-link
        to="/"
        class="font-sans text-2xl text-gray-800 dark:text-white md:text-3xl"
      >
        <span class="hidden sm:block"> Get Squared </span>
        <span class="block sm:hidden"> GSquared</span>
      </router-link>
      <div class="flex justify-around items-center">
        <button class="overflow-hidden mr-8" @click="switchTheme()">
          <transition
            enter-active-class="transition duration-200 ease-out"
            leave-active-class="transition duration-200 ease-in"
            :enter-from-class="
              currentTheme === 'dark'
                ? 'transform -translate-y-full scale-50 opacity-0'
                : 'transform translate-y-full scale-50 opacity-0'
            "
            enter-to-class="transform translate-y-0"
            leave-from-class="transform translate-y-0"
            :leave-to-class="
              currentTheme === 'dark'
                ? 'transform translate-y-full scale-50 opacity-0'
                : 'transform -translate-y-full scale-50 opacity-0'
            "
            mode="out-in"
          >
            <svg
              v-if="currentTheme === 'dark'"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </transition>
        </button>
        <router-link v-if="user == null" to="/login">
          <v-btn>Get Started</v-btn>
        </router-link>

        <div v-else class="flex items-center space-x-4">
          <router-link to="/dashboard">
            <img
              class="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="https://i.pravatar.cc/300"
              alt=""
            />
          </router-link>

          <div class="font-medium dark:text-white">
            <div class="capitalize">{{ user.name }}</div>
            <button
              class="text-sm text-gray-500 dark:text-gray-400"
              @click="logout"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
