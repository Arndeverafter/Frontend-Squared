<script setup>
import BlogCard from "./BlogCard.vue";
</script>

<template>
  <div class="container mx-auto">
    <div
      class="py-6 px-4 mx-4 bg-gray-100 dark:bg-gray-800/20 rounded-xl shadow-md"
    >
      <div class="flex justify-between items-center mb-4">
        <h5
          class="text-xl font-bold leading-none text-gray-900 dark:text-white"
        >
          Latest Posts
        </h5>
      </div>
      <div
        class="grid grid-cols-1 justify-items-center md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-2"
      >
        <BlogCard
          v-for="(item, i) in 6"
          :key="i"
          :class="i == 0 ? 'w-full' : 'max-w-sm'"
        />
      </div>
    </div>
  </div>
</template>
