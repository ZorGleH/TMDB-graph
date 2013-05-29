var body = $('body');

var searchInput = tmdb.addModule(SearchInput);
searchInput.html.appendTo(body);

var choiceList = tmdb.addModule(ChoiceList);
choiceList.html.appendTo(body);

var graph = tmdb.addModule(Graph);
graph.html.appendTo(body);
