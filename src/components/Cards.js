import Card from "./Card";
import "../styles/Cards.css";

function Cards() {
  return (
    <div className="Cards">
      <Card poke="Bulbasaur" />
      <Card poke="Squirtle" />
      <Card poke="Charmander" />
      <Card poke="Pikachu" />
      <Card poke="Diglett" />
      <Card poke="Jigglypuff" />

      <Card poke="Geodude" />
      <Card poke="Pidgey" />
      <Card poke="Machop" />
      <Card poke="Drowzee" />
      <Card poke="Gastly" />
      <Card poke="Dratini" />
    </div>
  );
}

export default Cards;
