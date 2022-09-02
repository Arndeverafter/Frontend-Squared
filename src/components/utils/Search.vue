<script>
import { mapState, mapActions } from "pinia";
import { usePostStore } from "./../../stores/posts";

export default {
  data() {
    return {
      choices: [
        {
          sort: true,
          name: "Descending",
        },
        {
          sort: false,
          name: "Ascending",
        },
      ],
      choice: "Descending",
      search: "",
      show: false,
    };
  },
  computed: {
    ...mapState(usePostStore, {
      currentPage: "pageNumber",
    }),
  },
  methods: {
    ...mapActions(usePostStore, {
      sortSearchAuthorPosts: "sortSearchAuthor",
    }),
    searchOrSort() {
      let payload = {
        choice: this.choice,
      };
      if (this.search) payload.search = this.search;

      if (this.$route.name == "author") payload.author = this.$route.params.id;

      this.sortSearchAuthorPosts(payload, this.currentPage);
    },
  },
};
</script>
<template>
  <div>
    <div class="flex">
      <label
        for="search-dropdown"
        class="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
        >You Can Sort by Publication Date or Search Posts</label
      >
      <button
        id="dropdown-button"
        data-dropdown-toggle="dropdown"
        class="inline-flex z-10 shrink-0 items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 dark:text-white bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-tl-2xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-100 dark:focus:ring-gray-700"
        type="button"
        @click="show = !show"
      >
        {{ choice }}
        <svg
          aria-hidden="true"
          class="ml-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          id="dropdown"
          class="block absolute z-10 w-44 bg-gray-50 dark:bg-gray-700 rounded-b-2xl divide-y divide-gray-100 shadow"
          style="transform: translate3d(0.66667px, 42px, 0px)"
          tabindex="0"
          data-popper-reference-hidden=""
          data-popper-escaped=""
          data-popper-placement="bottom"
          @focusout="show = false"
        >
          <ul
            v-if="show"
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            <li v-for="(item, i) in choices" :key="i">
              <button
                type="button"
                class="inline-flex py-2 px-4 w-full dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                @click="choice = item.name"
              >
                {{ item.name }}
              </button>
            </li>
          </ul>
        </div>
      </transition>
      <div class="relative w-full">
        <input
          id="search-dropdown"
          v-model="search"
          type="search"
          class="block z-20 p-2.5 w-full text-sm text-gray-900 dark:text-white dark:placeholder:text-gray-400 bg-gray-50 dark:bg-gray-700 rounded-r-2xl border border-l-2 border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-500 border-l-gray-50 dark:border-l-gray-700 focus:ring-blue-500"
          placeholder="Search Blog Posts"
        />
        <button
          class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-r-2xl border border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          @click="searchOrSort()"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </div>
  </div>
</template>
