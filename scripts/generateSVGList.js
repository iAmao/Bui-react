var path = require('path');
var util = require('./util');

var SVGPath = path.join(__dirname, '../', 'src/components/assets/svg');

var SVGNames = util.getFiles(SVGPath)
  .map(function(SVG) {
    return SVG.split('.')[0];
  });

var SVGMap = SVGNames.reduce(function(map, names) {
  if(names !== 'index') {
    var SVG = util.readFile(path.join(SVGPath, `${names}.svg`));
    map[names] = SVG.slice(SVG.indexOf('\n') + 1, SVG.indexOf('</svg>'))
  }
  return map;
}, {});

util.writeFile(path.join(SVGPath, 'index.js'), `export default ${JSON.stringify(SVGMap)}`);
