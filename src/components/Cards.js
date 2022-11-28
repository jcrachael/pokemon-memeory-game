import Card from "./Card";

import "../styles/Cards.css";

// This is the Cards component which will call all the Card components
// and store the list of cards in state

function Cards({ list, handleClick }) {
  const cards = list.map((poke) => {
    return <Card key={poke.id} poke={poke} handleClick={handleClick} />;
  });

  return <div className="Cards">{cards}</div>;
}

export default Cards;
