function getCards(cardsNumber) {
  let cards = [];
  for (let i = 1; i <= cardsNumber; i++) {
    if (i > cardsNumber / 2) {
      cards.push({ id: i, text: i - cardsNumber / 2 });
    } else cards.push({ id: i, text: i });
  }
  return cards;
}

export default getCards;
