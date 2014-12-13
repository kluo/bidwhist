function Hand() {
  this.cards = [];
}

Hand.prototype.addCard = function(card) {
  this.cards.push(card);
}

Hand.prototype.addCards = function(cards) {
  this.cards.concat(cards);
}
