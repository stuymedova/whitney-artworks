<template>
  <ais-instant-search :search-client='searchClient' index-name='artworks'>
    <ais-search-box placeholder='Search' />
    <ais-configure :hitsPerPage='100' />

    <app-infinite-hits>
      <div slot='item' slot-scope='{ item }'>
        <p>{{ item.title }}</p>
      </div>
    </app-infinite-hits>

  </ais-instant-search>
</template>

<script>
  import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
  import AppInfiniteHits from './components/InfiniteHits';

  export default {
    components: { AppInfiniteHits },
    data() {
      return {
        searchClient: instantMeiliSearch(
          process.env.VUE_APP_MEILISEARCH_HOST,
          process.env.VUE_APP_MEILISEARCH_API_KEY,
          {
            paginationTotalHits: 1000,
            primaryKey: 'id'
          }
        ),
        show: true,
        isExpanded: true
      };
    }
  };
</script>
