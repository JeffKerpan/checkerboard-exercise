// Your JS goes here
var body = document.getElementsByTagName('body')[0];

var totalRows = 8;
var totalCols = 8;

for (var row = 1; row <= totalRows; row++) {
  for (var col = 1; col <= totalCols; col++){
    var color = isBlack(row,col) ? 'black' : 'red';
    body.appendChild(genTile(color));
  }
}
function genTile(color) {
  var width = (100 / totalCols) + '%';
  var tile = document.createElement('div');
  tile.style.width = width;
  tile.style.float = 'left';
  tile.style.paddingBottom = width;
  tile.style.backgroundColor = color;
  return tile;
}

function isBlack(row,col) {
  return (row % 2 === 0 && col % 2 === 0) ||
         (row % 2 === 1 && col % 2 === 1)
}
