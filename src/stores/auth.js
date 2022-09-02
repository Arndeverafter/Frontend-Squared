import axios from "axios";
import { defineStore } from "pinia";
import { notify } from "@kyvg/vue3-notification";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: JSON.parse(sessionStorage.getItem("úsáideoir")),
  }),
  actions: {
    async login(payload) {
      try {
        await axios.get("/sanctum/csrf-cookie").then(() => {
          axios.post("/login", payload).then((response) => {
            if (response.data.payload) {
              this.user = response.data.payload;
              sessionStorage.setItem("úsáideoir", JSON.stringify(this.user));
              this.router.push("/dashboard");
            } else if (response.status == 201) {
              this.router.push("/dashboard"); // Session is still active
            } else {
              notify({
                title: "info",
                text: response.data.message,
                duration: 7000,
              });
            }
          });
        });
      } catch (error) {
        notify({
          title: "Error",
          text: error,
          type: "error",
          duration: 7000,
        });
      }
    },

    async register(payload) {
      try {
        await axios.get("/sanctum/csrf-cookie").then(() => {
          axios
            .post("/register", payload)
            .then((response) => {
              this.user = response.data.payload;
              sessionStorage.setItem("úsáideoir", JSON.stringify(this.user));

              this.router.push("/dashboard");
            })
            .catch(() => {
              notify({
                title: "Error",
                text: "Registration Failed, Please Retry",
                type: "error",
                duration: 7000,
              });
            });
        });
      } catch (error) {
        notify({
          title: "Error",
          text: error,
          type: "error",
          duration: 7000,
        });
      }
    },

    async logout() {
      try {
        await axios.get("/sanctum/csrf-cookie").then(() => {
          axios.post("/logout").then(() => {
            this.user = null;
            sessionStorage.removeItem("úsáideoir");
            // redirect to login page
            this.router.push("/login");
          });
        });
      } catch (error) {
        notify({
          title: "Error",
          text: error,
          type: "error",
          duration: 7000,
        });
      }
    },
  },
});
