import Card from "./Card";
import pokemon from "../pokemon";
import "../styles/Cards.css";

function Cards() {
  const list = pokemon
    .map((poke) => {
      return <Card key={poke.id} poke={poke} handleClick={handleClick} />;
    })
    .sort(function () {
      return Math.random() - 0.5;
    });

  function handleClick(e) {
    if (e.target.className === "poke-img") {
      console.log(e.target.parentElement.className + " clicked");
      e.stopPropagation();
    } else {
      console.log(e.target.className + " clicked");
      e.stopPropagation();
    }
  }

  return <div className="Cards">{list}</div>;
}

export default Cards;
