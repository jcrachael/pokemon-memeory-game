import "../styles/Card.css";
import bulbasaur from "../assets/pokemon/bulbasaur.png";
import squirtle from "../assets/pokemon/squirtle.png";
import charmander from "../assets/pokemon/charmander.png";
import diglett from "../assets/pokemon/diglett.png";
import machop from "../assets/pokemon/machop.png";
import pidgey from "../assets/pokemon/pidgey.png";
import drowzee from "../assets/pokemon/drowzee.png";
import dratini from "../assets/pokemon/dratini.png";
import geodude from "../assets/pokemon/geodude.png";
import jigglypuff from "../assets/pokemon/jigglypuff.png";
import gastly from "../assets/pokemon/gastly.png";
import pikachu from "../assets/pokemon/pikachu.png";

function Card(props) {
  let imgSrc;

  if (props.poke === "Bulbasaur") {
    imgSrc = bulbasaur;
  } else if (props.poke === "Squirtle") {
    imgSrc = squirtle;
  } else if (props.poke === "Charmander") {
    imgSrc = charmander;
  } else if (props.poke === "Diglett") {
    imgSrc = diglett;
  } else if (props.poke === "Machop") {
    imgSrc = machop;
  } else if (props.poke === "Pidgey") {
    imgSrc = pidgey;
  } else if (props.poke === "Drowzee") {
    imgSrc = drowzee;
  } else if (props.poke === "Dratini") {
    imgSrc = dratini;
  } else if (props.poke === "Geodude") {
    imgSrc = geodude;
  } else if (props.poke === "Jigglypuff") {
    imgSrc = jigglypuff;
  } else if (props.poke === "Gastly") {
    imgSrc = gastly;
  } else if (props.poke === "Pikachu") {
    imgSrc = pikachu;
  }

  return (
    <div className="Card">
      <img src={imgSrc} alt={props.poke} className="poke-img" />
      <h2>{props.poke}</h2>
    </div>
  );
}

export default Card;
