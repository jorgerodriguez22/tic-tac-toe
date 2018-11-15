var pieces = [];
var Piece = function(num){
  this.icon = num;
  this.mark = false;
  this.win = false;
};

var thisNode, thisPiece;
var totalClicks = 0;
function isGameOver(){
    var nodes = document.querySelectorAll ('.piece');
 if (pieces[0].icon === pieces[1].icon && pieces[1].icon === pieces[2].icon) {
    nodes[0].classList.add('win');
    nodes[1].classList.add('win');
    nodes[2].classList.add('win');
    pieces[0].win = true;
    pieces[1].win = true;
    pieces[2].win = true;
    pieces[3].marked = true;
    pieces[4].marked = true;
    pieces[5].marked = true;
    pieces[6].marked = true;
    pieces[7].marked = true;
    pieces[8].marked = true;
}
if (pieces[3].icon === pieces[4].icon && pieces[4].icon === pieces[5].icon) {
    nodes[0].classList.add('win');
    nodes[1].classList.add('win');
    nodes[2].classList.add('win');
    pieces[0].win = true;
    pieces[1].win = true;
    pieces[2].win = true;
    pieces[3].marked = true;
    pieces[4].marked = true;
    pieces[5].marked = true;
    pieces[6].marked = true;
    pieces[7].marked = true;
    pieces[8].marked = true;
}
if (pieces[6].icon === pieces[7].icon && pieces[7].icon === pieces[8].icon) {
    nodes[0].classList.add('win');
    nodes[1].classList.add('win');
    nodes[2].classList.add('win');
    pieces[0].win = true;
    pieces[1].win = true;
    pieces[2].win = true;
    pieces[3].marked = true;
    pieces[4].marked = true;
    pieces[5].marked = true;
    pieces[6].marked = true;
    pieces[7].marked = true;
    pieces[8].marked = true;
}
}

function pieceClick(event){
    if(event.target.nodeName === 'LI'){
        thisNode = event.target;
        thisPiece = thisNode.pieceObject;
        if(!thisPiece.mark) {
            totalClicks++;
            var icon = document.createElement('span');
            if(totalClicks % 2 === 1) {
                icon.classList.add('icon-cross');
                thisPiece.icon = "X";
            }
            else {
                icon.classList.add('icon-radio-unchecked');
                thisPiece.icon = "O";
            }
            thisNode.appendChild(icon);
            thisNode.classList.add('mark');
            thisPiece.mark = true;
            isGameOver();
        }
    }
}
window.addEventListener('load', function(){
  var gameBoard = document.querySelector('.board');
  gameBoard.innerHTML = '';
  for(var i = 0; i < 9; i++){
      var piece = new Piece(i);
      pieces.push(piece);
      var listItem = document.createElement('li');
      listItem.classList.add('piece');
      listItem.pieceObject = piece;
      gameBoard.appendChild(listItem);
  }
  gameBoard.addEventListener('click', pieceClick);
});

