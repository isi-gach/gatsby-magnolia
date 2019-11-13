## Light modules

Clone this repo into the Magnolia light-modules directory. You should have a light module called `gatsby`.

## Add packages

Run yarn or npm in the root and plugins directory.

```
yarn
cd plugins/gatsby-source-magnolia && yarn
```

## Build Magnolia templates

```
yarn build:mgnl
```

This will do a `gatsby build --prefix-paths` and create a webresources directory. This is the directory that Magnolia uses to render templates. The template script points to `/gatsby/webresources/index.html`.

Magnolia uses `http://localhost:8080/magnoliaAuthor/.resources/gatsby/webresources/index.html` to render pages in edit and preview mode. Because Gatsby has client-side routing enabled, when the browser hits `/index.html` the page is redirected to `/`.

When the Magnolia page is viewed in edit mode it renders correctly. However, when you edit some component content and press save, you get a 400 error. This is caused by the redirect built into Gatsby. We added virtualUriMapping to forward any requests from `/` to `/index.html` which prevents the 400 error but unfortunately we loose the window.singlePageConfig object and the page renders in read-only mode and doesn't show any content changes.

The `/src/pages/index.js` file handles the logic to load data from the window object or GraphQL.

## Run Gatsby in developer mode

```
yarn start
```

Gatsby should be accessible on localhost:8000
