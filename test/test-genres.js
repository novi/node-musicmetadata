var parseGenre = require('../lib/common').parseGenre;
var test       = require('tap').test;

test('should be able to parse genres', function (t) {
  var tests = {
    'Electronic'                  : 'Electronic',
    'Electronic/Rock'             : 'Electronic/Rock',
    '(0)'                         : 'Blues',
    '(0)(1)(2)'                   : 'Blues/Classic Rock/Country',
    '(4)Eurodisco'                : 'Disco/Eurodisco',
    '(4)Eurodisco(0)Mopey'        : 'Disco/Eurodisco/Blues/Mopey',
    '(RX)(CR)'                    : 'RX/CR',
    'RX/CR'                       : 'RX/CR'
  }
  for (var test in tests) {
    t.strictEqual(parseGenre(test), tests[test], test);
  }
  t.end();
});