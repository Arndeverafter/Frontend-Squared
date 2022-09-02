<script>
export default {
  props: {
    author: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      options: {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    };
  },
  methods: {
    slugTitle(item) {
      return item
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    },
  },
};
</script>

<template>
  <div
    class="mx-4 w-full max-w-sm bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-md dark:shadow-gray-800"
  >
    <div class="flex flex-col justify-center items-center h-96">
      <h5 class="mb-2 text-sm font-bold text-gray-900 dark:text-white">
        Author
      </h5>
      <img
        class="mb-3 w-24 h-24 rounded-full shadow-lg"
        src="https://i.pravatar.cc/300"
        alt="Bonnie image"
      />

      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {{ author.name }}
      </h5>
      <span class="text-sm text-gray-500 dark:text-gray-400 capitalize">{{
        author.user
      }}</span>
      <div class="flex mt-4 space-x-3 md:mt-6">
        <router-link
          :to="`/author/${author.id}/${slugTitle(author.name)}`"
          class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 dark:text-white bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 dark:hover:border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
          >View Articles</router-link
        >
      </div>
    </div>
  </div>
</template>
