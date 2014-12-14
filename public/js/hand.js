function Hand() {
  this.cards = [];
}

Hand.prototype.addCard = function(card) {
  this.cards.push(card);
}

Hand.prototype.addCards = function(cards) {
  this.cards.concat(cards);
}

Hand.prototype.removeCard = function(card) {
  var index = this.cards.indexOf(card);
  this.cards.splice(index, 1);
}
