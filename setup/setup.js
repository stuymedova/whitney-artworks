import { MeiliSearch } from 'meilisearch';
import dataset from './artworks.json';
import dotenv from 'dotenv';
dotenv.config();

(async () => {
  // Create client
  const client = new MeiliSearch({
    host: process.env.VUE_APP_MEILISEARCH_HOST,
    apiKey: process.env.VUE_APP_MEILISEARCH_API_KEY
  });

  // Create index if it doesn't already exist
  const index = await client.getOrCreateIndex('artworks');
  console.log('[1/3] Index created');

  // Add settings
  const settings = {
    distinctAttribute: null,
    searchableAttributes: [
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
    ],
    displayedAttributes: ['*'],
    stopWords: [],
    synonyms: {},
    attributesForFaceting: [],
    rankingRules: []
  };
  let { updateId: settingsUpdate} = await index.updateSettings(settings);
  await index.waitForPendingUpdate(settingsUpdate, {
    timeOutMs: 100000
  });
  console.log('[2/3] Settings added');

  // Add documents
  let { updateId } = await index.addDocuments(dataset);
  await index.waitForPendingUpdate(updateId, {
    timeOutMs: 100000
  });
  console.log('[3/3] Documents added');
})();