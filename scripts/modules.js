function SearchInput() {
  domino.module.call(this);

  var
    _self = this,
    _html = $('<form class="search-input"/>'),
    _input = $('<input type="search" placeholder="Person or movie"/>'),
    _button = $('<button>Search</Search>');

  _html
    .append(_input)
    .append(_button);

  _html.submit(function(e) {
    e.preventDefault();
    _self.dispatchEvent('updateQuery', {
      query: _input.val()
    });
  });

  _self.html = _html;
}

function ChoiceList() {
  domino.module.call(this);

  var
    _self = this,
    _html = $('<ul class="choice-list"/>');
}
