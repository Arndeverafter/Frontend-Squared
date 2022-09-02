<script>
export default {
  props: {
    article: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<template>
  <div
    class="p-6 w-full h-full min-h-screen bg-gray-100 dark:bg-gray-900 rounded-2xl"
  >
    <!-- The Breadcrumb is only used here So we are simply goin to put it here -->
    <nav
      class="flex py-3 px-5 w-full text-gray-700 rounded-lg"
      aria-label="Breadcrumb"
    >
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <router-link
            to="/"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              class="mr-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            Home
          </router-link>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white md:ml-2"
              >{{ article.title }}</span
            >
          </div>
        </li>
      </ol>
    </nav>

    <div class="flex flex-col items-center my-4 w-full rounded-2xl shadow-md">
      <img
        class="object-cover object-center overflow-hidden w-full h-48 rounded-t-lg md:h-56 lg:h-64"
        src="https://picsum.photos/300/400"
        alt=""
      />
      <div class="flex flex-col self-start py-12 px-4 w-full leading-normal">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ article.title }}
        </h5>
        <div class="py-1 pl-1">
          <p class="text-xs font-bold text-gray-600 dark:text-gray-500">
            Published
            {{ article.publication_date_human }}
          </p>
        </div>
        <p
          v-dompurify-html="article.description"
          className="ql-editor"
          class="mb-3 font-normal text-gray-700 dark:text-gray-400 whitespace-pre-line"
        ></p>
      </div>
    </div>
  </div>
</template>
