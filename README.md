# Whitney Artworks

Browse and search Whitney's collection of over 25,000 artworks.

## Overview

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

## Dataset

This app is based on the dataset distributed by Whitney under the CC0 License. It can be found in the museum's [Open Access repository](https://github.com/whitneymuseum/open-access/).

Dataset was converted to JSON and further adapted. Changes:
- All `<br>` tags removed
- For element ID `61726`, title has been changed from `<span style=\"color:green;\">100's</span>` to `100's`

## Search engine

Used fast typo-tolerant (and open source) search engine [MeiliSearch](https://www.meilisearch.com) (and [Meilisearch Vue](https://github.com/meilisearch/meilisearch-vue) for the UI).

> Flow:  
> 1. Launch Meilisearch
> 2. Add a dataset (formatted as JSON), wait for the indexing to complete
> 3. Test by searching either through the MeiliSearch web interface or curl
> 4. Set up the frontend

### Settings:

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

## Quick Setup

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [MeiliSearch](https://www.meilisearch.com)

### Setup

Run in terminal:
```shell
npm install
npm run serve # or npm run build
```

## Result

Navigation:  

https://user-images.githubusercontent.com/53351370/123099619-07907a00-d43b-11eb-9069-ffc6c833c0a0.mov

Search:  

https://user-images.githubusercontent.com/53351370/123099647-0eb78800-d43b-11eb-9155-013bc0925d35.mov

## Todo

- Find a good way to show overflowed text
