function Deck() {
  this.cards = [];
  for (var i = 0; i < Card.suits.length; i++) {
    for (var rank = 1; rank <= 13; rank++) {
      this.cards.push(new Card(rank, Card.suits[i]));
    }
  }
  this.cards.push(new Card(1, 'j'));
  this.cards.push(new Card(2, 'j'));
}

/**
 * Fisher-Yates Shuffle Modern Algorithm
 */
Deck.prototype.shuffle = function() {
  for (var i = this.cards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = this.cards[i];
    this.cards[i] = this.cards[j]
    this.cards[j] = temp;
  }
}
