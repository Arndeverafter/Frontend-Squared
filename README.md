# Frontend Blog

## Tech Stacks

- 🛠 [Vue 3](https://v3.vuejs.org/guide/introduction.html)
- ⚡️ [Vite](https://vitejs.dev/guide/)
- 🗂 [PNPM](https://pnpm.io)
- 🛣 [Vue Router](https://github.com/vuejs/vue-router-next)
- 🎨 [Tailwind CSS](https://tailwindcss.com/docs/)

## Getting Started

### Prerequisites

- You should atleast have node 16 installed in your machine

### Steps

- Clone the repository
- The Project uses pnpm, so just install the latest version if you dont have it. After the installation navigate to the project folder and run

```sh
pnpm install
pnpm run dev
```

- In order for the frontend to operate fully ite needs data from the backend api, the url can be found by navigating to `/src/main.js` file in the project directory. replace the url at` DEV_ENDPOINT = "http://localhost/SquareBlog/backend/public/"`; with the proper path of the backend repo.

### Features

---

#### View Blog Posts / Post

#### Registration of new Users

#### Login with fro registered Users

#### A dashboard that shows User Details along with ability to add a blog Post

#### Dark Mode Built in

#### View Posts by Author

#### Search Articles

#### Sort articles by Publication Date

---

## Additionally

#### Admins can Query New Posts Data from third Party

## Note:

### on running `npm run dev`

> The blog should run from port`3000` in order to communicate with the backend if at all you do change this, make sure the backend is part of the domain you are using for the frontend.
> eg . Frontend may run from `localhost:3000` and backend may just run from `localhost`
> Also do not forget to alter the settings in the `env` file of the backend Repo.

if at all something is not clear please do not hesitate to contact me.
