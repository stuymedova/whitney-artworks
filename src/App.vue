<template>
  <ais-instant-search :search-client='searchClient' index-name='artworks'>
    <ais-state-results>
      <template slot-scope='{ query }'>
        <ais-stats v-if='query.length > 0'>
          <p slot-scope='{ nbHits }'>{{ formatNumber(nbHits) }} matches</p>
        </ais-stats>
        <div v-else></div>
      </template>
    </ais-state-results>
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
  import { formatNumber } from './utils';

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
    },
    methods: {
      formatNumber,
    },
  };
</script>
