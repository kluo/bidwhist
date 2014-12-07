function Deck() {
  this.cards = [];
  var suits = ['d', 'c', 'h', 's']
  for (i = 0; i < suits.length; i++) {
    for (rank = 1; rank <= 13; rank++) {
      this.cards.push(new Card(rank, suits[i]));
    }
  }
  this.cards.push(new Card(1, 'j'));
  this.cards.push(new Card(2, 'j'));
}
