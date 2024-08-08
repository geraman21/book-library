# book-library

Consists of two pages: Home Page and Front Desk.

On Home Page Please display a list of books, which you can fetch from this API: https://63c10327716562671870f959.mockapi.io/books . I want the books to be categorized by the year spans in which they were published. The year spans should be divided into 10-year intervals, starting from the year of the most recently published book and ending with the oldest published book. If no books were published within a specific 10-year range, "No publications" should be displayed for that range. If no books were published within consecutive 10-year ranges, combine those ranges and display "No publications" for that combined range.

On Front Desk page, you need to add a form that will allow us to add a book. This book should be then appended to the list of books displayed on the homepage, which was initially populated from the provided endpoint. New books should be displayed first. Every field in the Book interface are mandatory except ratings, which can be left as an empty array.

Considerations:
Do not persist books in local or session storage.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
