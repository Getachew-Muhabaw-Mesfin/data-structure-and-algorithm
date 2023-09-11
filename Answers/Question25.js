const FACE_CARDS = {
  K: 4,
  Q: 3,
  J: 2,
};
function playerHandScore(hand) {
  let score = 0;
  for (let i = 0; i < hand.length; i++) {
    const value = FACE_CARDS[hand[i]];
    score += value;
  }
  return score;
}
