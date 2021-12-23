export default {
  name: 'newsFeed',
  displayName: 'NewsFeed',
  appVersion: '1.0.0',
  defaultLanguage: 'en_US',
  languageSupport: [
    {locale: 'en_US', name: 'Inglish', inglishName: 'Inglish'},
    {locale: 'es_US', name: 'Español', inglishName: 'Spanish'},
  ],
  resourcesLanguage: {
    en_US: {
      translation: require('../lang/en_US.json'),
    },
    es_US: {
      translation: require('../lang/es_US.json'),
    },
  },
};
