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
    │   ├── _instantsearch-reset.scss
    │   ├── _page.scss
    │   ├── _reset.scss
    │   ├── _typefaces.scss
    │   ├── _variables.scss
    │   ├── main.scss
    │   └── page
    │       ├── _base.scss
    │       ├── _header.scss
    │       ├── _media-rules.scss
    │       └── _table.scss
    ├── App.vue
    ├── main.js
    └── utils.js
```

## Dataset

This app is based on the dataset distributed by Whitney under the CC0 License. It can be found on the museum's [Open Access repository](https://github.com/whitneymuseum/open-access/).

Dataset was converted to JSON and further adapted. Changes:
- All `<br>` tags removed
- For element ID `61726`, the title has been changed from `<span style=\"color:green;\">100's</span>` to `100's`

## Search engine

Used fast typo-tolerant (and open source) search engine [MeiliSearch](https://github.com/meilisearch/MeiliSearch) (and [Meilisearch Vue](https://github.com/meilisearch/meilisearch-vue) for the UI).

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

## Result

Navigation: …

Search: …

## Todo

- Find a good way to show overflowed text