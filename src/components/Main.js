/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Info from "./Info";
import Cards from "./Cards";
import pokemon from "../pokemon";

// This is the Main Game component, where the user's score will be stored as state

function Main() {
  const shuffledList = shuffleCards(pokemon);

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsClicked, setCardsClicked] = useState([]);
  const [cardList, setCardList] = useState(shuffledList);

  function shuffleCards(list) {
    list.sort(function () {
      return Math.random() - 0.5;
    });
    return list;
  }

  function handleClick(e) {
    if (e.target.className === "poke-img") {
      let newCardsClicked = [...cardsClicked, e.target.parentElement.id];
      setCardsClicked(newCardsClicked);
      let newList = shuffleCards(pokemon);
      setCardList(newList);
    } else {
      let newCardsClicked = [...cardsClicked, e.target.id];
      setCardsClicked(newCardsClicked);
      const newList = shuffleCards(pokemon);
      setCardList(newList);
    }
  }

  return (
    <div className="Main">
      <Info />
      <Cards list={cardList} handleClick={handleClick} />
    </div>
  );
}

export default Main;
