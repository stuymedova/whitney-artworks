<template>
  <ais-instant-search :search-client='searchClient' index-name='artworks'>
    
    <header>
      <div class='header'>
        <h1 class='header__site-title'>Whitney Museum of American Art — Artworks</h1>
        <div class='header__search-area'>
          <ais-state-results>
            <template slot-scope='{ query, nbHits }'>
              <ais-stats v-if='query.length > 0 && nbHits > 0'>
                <p>{{ formatNumber(nbHits) }} matches</p>
              </ais-stats>
              <div v-else-if='query.length > 0 && nbHits === 0'>
                <p>Not found</p>
              </div>
              <div v-else></div>
            </template>
          </ais-state-results>
          <ais-search-box placeholder='Search' autofocus />
        </div>
      </div>
    </header>

    <main>
      <ais-configure :hitsPerPage='250' />
      <app-infinite-hits>
        <template slot='item' slot-scope='{ item }'>
          <td class='item item__artist'>{{ item.artists }}</td>
          <td class='item item__title'>{{ item.title }}</td>
          <td class='item item__date'>{{ item.display_date }}</td>
          <td class='item item__classification'>{{ item.classification }}</td>
          <td class='item item__medium'>{{ item.medium }}</td>
          <td class='item item__dimensions'>{{ item.dimensions }}</td>
          <td class='item item__pub-info'>{{ item.publication_info }}</td>
          <td class='item item__credit-line'>{{ item.credit_line }}</td>
          <!-- <p><ais-highlight :hit='item' attribute='title' /></p> -->
        </template>
      </app-infinite-hits>
    </main>

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
            paginationTotalHits: 2500,
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