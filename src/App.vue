<template>
  <ais-instant-search :search-client='searchClient' index-name='artworks'>
    <ais-search-box placeholder='Search'/>
    <ais-hits>
      <div slot='item' slot-scope='{ item }'>
        <p>{{ item.title }}</p>
      </div>
    </ais-hits>
  </ais-instant-search>
</template>

<script>
  import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

  export default {
    data() {
      return {
        searchClient: instantMeiliSearch(
          process.env.VUE_APP_MEILISEARCH_HOST,
          process.env.VUE_APP_MEILISEARCH_API_KEY
        ),
        show: true,
        isExpanded: true
      };
    }
  };
</script>