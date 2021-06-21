<template>
  <div class='ais-InfiniteHits'>
    <div class='ais-InfiniteHits-list' v-if='state'>
      <table>
        <tr class='ais-InfiniteHits-item ais-InfiniteHits-item__table-header'>
          <th class='item item__artist'>Artist</th>
          <th class='item item__title'>Title</th>
          <th class='item item__date'>Date</th>
          <th class='item item__classification'>Classification</th>
          <th class='item item__medium'>Medium</th>
          <th class='item item__dimensions'>Dimentions</th>
          <th class='item item__pub-info'>Publication info</th>
          <th class='item item__credit-line'>Credit line</th>
        </tr>

        <tr class='ais-InfiniteHits-item' v-for='hit in state.hits' :key='hit.objectID' tabindex='0'>
          <slot name='item' :item='hit'></slot>
        </tr>
        
        <tr class='sentinel' v-observe-visibility='visibilityChanged' />
      </table>
    </div>
  </div>
</template>

<script>
  import { createWidgetMixin } from 'vue-instantsearch';
  import { connectInfiniteHits } from 'instantsearch.js/es/connectors';

  export default {
    mixins: [createWidgetMixin({ connector: connectInfiniteHits })],
    methods: {
      visibilityChanged(isVisible) {
        if (isVisible && !this.state.isLastPage) {
          this.state.showMore();
        }
      },
    },
  };
</script>

<style scoped>
  .sentinel {
    list-style-type: none;
    margin-top: -200px;
  }
</style>
