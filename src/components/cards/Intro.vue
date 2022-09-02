<script setup>
import searchCard from "./../utils/Search.vue";
</script>
<template>
  <main
    class="flex flex-col justify-center items-center py-6 px-4 mx-auto max-w-3xl h-96"
  >
    <div class="py-12 px-6 w-full dark:bg-gray-800">
      <h1
        class="pb-10 text-4xl text-center text-gray-700 dark:text-gray-100 transition-colors md:text-6xl"
      >
        Blog Posts
      </h1>

      <search-card />
    </div>
  </main>
</template>
