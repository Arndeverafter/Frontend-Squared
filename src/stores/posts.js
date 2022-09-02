import axios from "axios";
import { defineStore } from "pinia";
import { notify } from "@kyvg/vue3-notification";

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    posts: [],
    post: null,
    pageNumber: 1,
    searchParams: {}, // User Search Parameters
    searching: false, // this is just a flag to let us know whether the user is searching through the posts or not
    loading: false,
    newPostsTitle: "",
  }),

  actions: {
    async fetchPosts(page = 1) {
      this.posts = [];
      this.searching = false;
      this.loading = true;

      // this.pageNumber = page; // set the current pagination item into the store
      try {
        await axios
          .get("/api/posts?page=" + page)
          .then((response) => {
            this.posts = response.data.payload;
          })
          .catch((error) => {
            throw error;
          });
      } catch (error) {
        notify({
          title: "Error",
          text: error,
          type: "warn",
        });
      } finally {
        this.loading = false;
      }
    },
    async sortSearchAuthor(item, page = 1) {
      this.posts = [];
      this.pageNumber = page; // set the current pagination item into the store
      this.searching = true;
      let payload = {};
      this.loading = true;

      if (page == 1) {
        if (item.author) payload.author = item.author;

        if (item.choice)
          payload.sort = item.choice == "Descending" ? false : true;
        if (item.search) payload.search = item.search;
        this.searchParams = payload;
      } else {
        payload.author =
          item.author == null ? this.searchParams.author : item.author;
        payload.search =
          item.search == null ? this.searchParams.search : item.search;
        payload.sort =
          item.choice == null
            ? this.searchParams.sort
            : item.choice == "Descending"
            ? false
            : true;
      }
      try {
        await axios
          .post("/api/get-posts?page=" + page, payload)
          .then((response) => {
            this.posts = response.data.payload;
          });
      } catch (error) {
        notify({
          title: "Error",
          text: error,
          type: "warn",
        });
      } finally {
        this.loading = false;
      }
    },

    async fetchPost(id) {
      this.post = null;
      try {
        await axios.get(`/api/posts/${id}`).then((response) => {
          this.post = response.data.payload;
        });
      } catch (error) {
        notify({
          title: "Error",
          text: error,
          type: "warn",
        });
      }
    },

    async newPost(payload) {
      try {
        axios.post("/api/posts", payload).then((resp) => {
          // Just show Success Message
          try {
            if (resp.status == 201) {
              notify({
                title: "info",
                text: "Published Post Successfully",
                duration: 7000,
              });
            } else {
              // Just throw an Error (Simple)
              throw "An Error Occured while Publishing your Post";
            }
          } catch (error) {
            notify({
              title: "Error",
              text: error,
              type: "error",
            });
          }
        });
      } catch (error) {
        notify({
          title: "Error",
          text: error,
          type: "error",
        });
      }
    },

    async apiFetch() {
      try {
        this.loading = true;

        await axios
          .get("/api/queryNewPosts")
          .then((resp) => {
            // Just show Success Message
            if (resp !== undefined) {
              this.newPostsTitle = resp.data.message;
              notify({
                title: "Info",
                text: "Successfully Fetched",
                type: "success",
              });
            } else {
              throw "Something went wrong while fetching new Posts!";
            }
          })
          .catch((error) => {
            notify({
              title: "Error",
              text: error,
              type: "error",
            });
          });
      } catch (error) {
        notify({
          title: "Error",
          text: error,
          type: "error",
        });
      } finally {
        this.loading = false;
      }
    },
  },
});
