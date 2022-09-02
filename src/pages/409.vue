<script setup>
import Header from "./../components/layout/Header.vue";
import Footer from "./../components/layout/Footer.vue";
</script>

<template>
  <Header />
  <div class="py-16 bg-gray-200 dark:bg-gray-900 md:py-28">
    <div class="flex justify-center items-center h-screen">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1
            class="mb-4 text-7xl font-extrabold tracking-tight text-blue-600 dark:text-blue-500 lg:text-9xl"
          >
            409
          </h1>
          <p
            class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl"
          >
            Sorry Something is not right
          </p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            We are already working to solve the problem.
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
