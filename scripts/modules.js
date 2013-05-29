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

  function update(values, klass) {
    _html.empty();
    values.forEach(function(v) {
      var li = $('<li/>')
        .attr('id', klass + '-' + v.id)
        .addClass(klass)
        .html(v.name)
        .click(function() {
          _self.dispatchEvent('updateChoice', {
            choice: v
          });
        })
        .appendTo(_html);
    });
  };

  this.triggers.properties['personChoices'] = function() {
    update(this.get('personChoices'), 'person');
  };

  _self.html = _html;
}

function Graph() {
  domino.module.call(this);

  var
    _self = this,
    _html = $('<div class="graph"/>'),
    _sigInst = sigma.init(_html[0]);

  _sigInst.resize(1000, 300);
  // _sigInst.addNode('87963', {
  //   x: 100,
  //   y: 100,
  //   size: 100,
  //   label: 'Hello',
  //   color: '#FFF'
  // });
  // _sigInst.startForceAtlas2();

  _self.html = _html;
}
