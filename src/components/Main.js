/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Info from "./Info";
import Cards from "./Cards";
import pokemon from "../pokemon";

// This is the Main Game component, where the user's score will be stored as state

function Main() {
  const shuffledList = shuffleCards(pokemon);

  let store = localStorage.getItem("bestScore")
    ? JSON.parse(localStorage.getItem("bestScore"))
    : 0;

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

  function saveBestScore(num) {
    store = num;
    localStorage.setItem("bestScore", JSON.stringify(store));
  }

  function getBestScore() {
    const score = JSON.parse(localStorage.getItem("bestScore"));
    return score;
  }

  function handleClick(e) {
    // Get the id of this card
    let id;
    if (e.target.className === "poke-img") {
      id = e.target.parentElement.id;
    } else {
      id = e.target.id;
    }
    // Check if this card has been clicked already
    if (cardsClicked.includes(id)) {
      // If yes, reset the game
      // Check if best score
      if (currentScore > bestScore) {
        setBestScore(currentScore);
        saveBestScore(currentScore);
      }
      // Reset to beginning
      setCurrentScore(0);
      setCardsClicked([]);
      setCardList(shuffleCards(pokemon));
      // If this card has not been clicked already
    } else {
      // Add it to the cardsClicked list
      let newCardsClicked = [...cardsClicked, id];
      setCardsClicked(newCardsClicked);
      // Shuffle the cards
      setCardList(shuffleCards(pokemon));
      // Increment the score
      setCurrentScore(currentScore + 1);
    }
  }

  return (
    <div className="Main">
      <Info
        current={currentScore}
        best={bestScore}
        getBestScore={getBestScore}
      />
      <Cards list={cardList} handleClick={handleClick} />
    </div>
  );
}

export default Main;
