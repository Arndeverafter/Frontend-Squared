<script>
import { mapActions, mapState } from "pinia";
import { usePostStore } from "./../../stores/posts";

export default {
  computed: {
    ...mapState(usePostStore, {
      isSearching: "searching",
      posts: "posts",
      loadingState: "loading",
    }),
  },
  created() {
    this.getResults();
  },
  methods: {
    ...mapActions(usePostStore, {
      sortSearchAuthorPosts: "sortSearchAuthor",
      fetchLatestPosts: "fetchPosts",
    }),
    getResults(page = 1) {
      if (this.isSearching || this.$route.name == "author") {
        if (this.$route.name == "author") {
          let item = {
            author: this.$route.params.id,
          };
          this.sortSearchAuthorPosts(item, page); // fetch posts for a given user
        } else this.sortSearchAuthorPosts({}, page); // passing empty obj cos search params are already in the store in this instance & if they are not then the default data will be fetched 😉😉 :Amazing
      } else this.fetchLatestPosts(page);
    },
  },
};
</script>
<script setup>
import BlogCard from "./BlogCard.vue";
import Pagination from "laravel-vue-pagination";
import Loader from "./../utils/Loader.vue";
</script>

<template>
  <div class="container my-4 mx-auto w-full">
    <div
      v-if="!loadingState"
      class="py-12 px-4 mx-4 bg-gray-100 dark:bg-gray-800/20 rounded-xl shadow-md"
    >
      <div
        v-if="posts.data && posts.data.length > 0"
        class="grid grid-cols-1 justify-items-center md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-2"
      >
        <BlogCard
          v-for="(item, i) in posts.data"
          :key="i"
          :blog="item"
          :index="i"
          :class="
            i == 0 ? 'flex col-span-2 md:flex-nowrap flex-wrap' : 'max-w-sm'
          "
        />
      </div>

      <div
        v-else
        class="flex p-4 bg-gray-100 dark:bg-gray-700 border-t-4 border-gray-500"
      >
        <svg
          class="shrink-0 w-5 h-5 text-gray-700 dark:text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
          It Appears you search did not match anything in our records. Please
          Refine it.
        </div>
      </div>

      <Pagination :data="posts" :limit="5" @pagination-change-page="getResults">
      </Pagination>
    </div>
    <div
      v-else
      class="grid grid-cols-1 justify-items-center md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-2"
    >
      <Loader v-for="i in 12" :key="i" />
    </div>
  </div>
</template>
<style scoped>
:global(.pagination) {
  @apply flex justify-center items-center my-6
  /* background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 54px; */;
}
:global(.page-link) {
  @apply py-2 px-3 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white;
}

:global(.active a) {
  @apply font-extrabold bg-blue-800 dark:bg-blue-700 text-white;
}
</style>
