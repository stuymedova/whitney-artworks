# Whitney Museum of American Art — Artworks

Browse and search Whitney's collection of over 25,000 artworks.

## View online

URL: [removed]  
MeiliSearch is hosted on an AWS EC2 instance  
Frontend is hosted on Vercel  

## Local setup

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)

### Setup

1. [Download and launch MeiliSearch](https://docs.meilisearch.com/learn/getting_started/installation.html). This app works with MeiliSearch v0.20
2. Duplicate `.env.example` as `.env` and specify the `MEILISEARCH_HOST` value
3. Run in terminal:
```shell
npm install
npm run start # to index the dataset
npm run serve # to launch an app
```

## Dataset

This app is based on a dataset distributed by Whitney under the CC0 License. It can be found in the museum's [Open Access repository](https://github.com/whitneymuseum/open-access/).

The dataset has been converted to JSON and adapted. Changes:
- All `<br>` tags have been removed
- For element ID `61726`, title has been changed from `<span style=\"color:green;\">100's</span>` to `100's`

## Search engine

This app uses the [MeiliSearch](https://www.meilisearch.com) search engine (and [MeiliSearch Vue](https://github.com/meilisearch/meilisearch-vue) for the UI).

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
Other settings haven't been customized.

## Screen recordings/Screenshots

Navigation:  

https://user-images.githubusercontent.com/53351370/123099619-07907a00-d43b-11eb-9069-ffc6c833c0a0.mov

Search:  

https://user-images.githubusercontent.com/53351370/123099647-0eb78800-d43b-11eb-9155-013bc0925d35.mov

Accessibility test*:

<img width="1440" alt="whitney-artworks-accessibility" src="https://user-images.githubusercontent.com/53351370/124007030-a12fcc80-d9e3-11eb-94cb-58e04c075be8.png">

\*To further optimize for accessibility, remove autofocus from the search bar.

Note: some details may have changed since the time these recordings/screenshots were made.


## Todo

- Find a good way to show overflowed text
- Optimize the initial loading UI. In addition to the title, also display a search bar and a table header while the data is loading
