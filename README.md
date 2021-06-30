# Whitney Museum of American Art — Artworks

Browse and search Whitney's collection of over 25,000 artworks.

## View online

URL: https://whitney-artworks.vercel.app  
MeiliSearch is hosted on an AWS EC2 instance  
This app is hosted on Vercel  

## Dataset

This app is based on the dataset distributed by Whitney under the CC0 License. It can be found in the museum's [Open Access repository](https://github.com/whitneymuseum/open-access/).

The dataset was converted to JSON and further adapted. Changes:
- All `<br>` tags have been removed
- For element ID `61726`, title has been changed from `<span style=\"color:green;\">100's</span>` to `100's`

## Search engine

This app uses [MeiliSearch](https://www.meilisearch.com), a fast, typo-tolerant and open-source search engine. (And [MeiliSearch Vue](https://github.com/meilisearch/meilisearch-vue) for the UI)

**Search settings**  
Searchable attributes, displayed attributes:
```
'artists',
'title',
'display_date',
'classification',
'medium',
'accession_number',
'dimensions',
'publication_info',
'edition',
'creidt_line',
'credit_line_repro',
```
Other settings were not customized.

## Screen recordings/Screenshots

Navigation:  

https://user-images.githubusercontent.com/53351370/123099619-07907a00-d43b-11eb-9069-ffc6c833c0a0.mov

Search:  

https://user-images.githubusercontent.com/53351370/123099647-0eb78800-d43b-11eb-9155-013bc0925d35.mov

Note: some details have changed since the time these recordings were made.


## Todo

- Find a good way to show overflowed text
- Optimize the initial loading UI. In addition to the title, also display a search bar and a table header while the data is loading

---

## More information: Overview

```
.
├── setup
│   ├── artworks.json
│   └── setup.js
└── src
    ├── components
    │   └── InfiniteHits.vue
    ├── fonts
    │   └── …
    ├── styles
    │   ├── page
    │   │   ├── _base.scss
    │   │   ├── _header.scss
    │   │   ├── _media-rules.scss
    │   │   └── _table.scss
    │   ├── _instantsearch-reset.scss
    │   ├── _page.scss
    │   ├── _reset.scss
    │   ├── _typefaces.scss
    │   ├── _variables.scss
    │   └── main.scss
    ├── App.vue
    ├── main.js
    └── utils.js
```

## Local setup

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)

### Setup

1. [Download and launch MeiliSearch](https://docs.meilisearch.com/learn/getting_started/installation.html). This app works with MeiliSearch v0.20
2. Set credentials – duplicate `.env.example` as `.env` and adapt its values. As you run this locally, you may not specify a [master key](https://docs.meilisearch.com/reference/features/configuration.html#options) (`VUE_APP_MEILISEARCH_API_KEY`)
3. Run in terminal:
```shell
npm install
npm run start # to index the dataset
npm run serve # to launch an app
```