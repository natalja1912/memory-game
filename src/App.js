import { useState, useEffect } from "react";
import Card from "./components/Card";
import Timer from "./components/Timer";
import getCards from "./utils/cards";
import "./styles.css";

export default function App() {
  const [cardsNumber, setCardsNumber] = useState(16);
  const [openedCards, setOpenedCards] = useState([]);
  const [shownCards, setShownCards] = useState([]);
  const [isTimerRunning, setTimerRunning] = useState(true);

  /*время показа 1 карточки в сек */
  const oneCardShownTime = 5;

  /*настройки таймера */
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10минутный таймер

  function cardsShuffle(cards) {
    return cards.sort(() => Math.random() - 0.5);
  }

  /*задаем число карточек для игры */
  const cards = getCards(cardsNumber);

  /*при нажатии на кнопку новая игра первоначальные
   карточки перемешиваются и выводятся на экран,
   таймер перезапускается */
  function startNewGame() {
    setTimerRunning(true);
    let newCards = cardsShuffle(cards);
    setShownCards(newCards);
  }

  /*проверка совпадения 2х открытых карточек */
  function checkCards() {
    if (openedCards[0].text === openedCards[1].text) {
      let newCards = shownCards.filter(
        (item) => item.text !== openedCards[0].text
      );
      /*вывод на экран карточек за исключением 
        2х одинаковых с задержкой 2 сек */
      setTimeout(() => setShownCards(newCards), 2000);
    }
    if (shownCards.length !== 2) {
      setTimeout(() => setOpenedCards([]), 1000);
    }
  }

  /*проверка числа открытых карточек */
  useEffect(() => {
    if (openedCards.length === 1) {
      setTimeout(() => setOpenedCards([]), oneCardShownTime * 1000);
    }
    if (openedCards.length > 1) {
      checkCards();
    }
  }, [openedCards]);

  /*остановка таймера, если число карточек для отображения
  на экране равно нулю */
  useEffect(() => {
    if (shownCards.length === 0) {
      setTimerRunning(false);
    }
  }, [shownCards]);

  function onCardClick(card) {
    if (openedCards.length < 2) {
      setOpenedCards((prev) => [...prev, card]);
    }
  }

  function onNumberInputChange(e) {
    setCardsNumber(e.target.value);
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="App__btn-group">
        <Timer
          pauseTimer={isTimerRunning}
          expiryTimestamp={time}
          startNewGame={startNewGame}
        />
      </div>
      <label>
        Введите количество карточек
        <input
          className="App__number"
          type="number"
          min="4" max="50"
          value={cardsNumber}
          onChange={(e) => onNumberInputChange(e)}
        />
      </label>
      <ul className="cards-list">
        {shownCards.map((card) => (
          <li>
            <Card
              key={card.id}
              isOpened={openedCards.some((item) => item.id === card.id)}
              card={card}
              onClick={(card) => onCardClick(card)}
            />
          </li>
        ))}{" "}
      </ul>
    </div>
  );
}
