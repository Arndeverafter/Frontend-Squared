<template>
  <footer
    class="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow md:flex md:justify-between md:items-center md:p-6"
  >
    <span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center"
      >© {{ new Date().getFullYear() }}
      <router-link to="/" class="hover:underline"
        >Get Squared Blog™</router-link
      >
    </span>
    <ul
      class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <li>
        <router-link to="/register" class="mr-4 hover:underline md:mr-6"
          >Register</router-link
        >
      </li>
      <li>
        <router-link to="/login" class="mr-4 hover:underline md:mr-6"
          >Get Started</router-link
        >
      </li>
    </ul>
  </footer>
</template>
