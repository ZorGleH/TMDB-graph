var tmdb = new domino({
  properties: [
    // Application
    {
      id: 'query',
      description: 'Query from search input',
      type: '?string',
      value: '',
      triggers: 'updateQuery',
      dispatch: 'queryUpdated'
    }, {
      id: 'personChoices',
      description: 'Persons found from TMDB API',
      type: 'array',
      value: [],
      triggers: 'updatePersonChoices',
      dispatch: 'personChoicesUpdated'
    }, {
      id: 'movieChoices',
      description: 'Movies found from TMDB API',
      type: 'array',
      value: [],
      triggers: 'updateMovieChoices',
      dispatch: 'movieChoicesUpdated'
    },
    // API
    {
      id: 'apiUrl',
      description: 'API base URL',
      type: 'string',
      value: 'http://api.themoviedb.org/3'
    }, {
      id: 'apiKey',
      description: 'API key',
      type: 'string',
      value: config.apiKey
    }
  ],
  services: [
    {
      id: 'searchMovie',
      description: 'Search movie from query',
      url: ':apiUrl/search/movie?api_key=:apiKey&query=:query',
      setter: 'movieChoices',
      path: 'results'
    }, {
      id: 'searchPerson',
      description: 'Search person from query',
      url: ':apiUrl/search/person?api_key=:apiKey&query=:query',
      setter: 'personChoices',
      path: 'results'
    }
  ],
  hacks: [
    {
      triggers: 'queryUpdated',
      method: function() {
        var _self = this;
        _self.request(['searchMovie', 'searchPerson']);
      }
    }
  ]
});
