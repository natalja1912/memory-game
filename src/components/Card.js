import "./Card.css";

export default function Card({ card, isOpened, onClick }) {
  function onCardClick() {
    onClick(card);
  }

  return (
    <div className={`card ${isOpened && `card_active`}`} onClick={onCardClick}>
      {isOpened && card.text}
    </div>
  );
}
