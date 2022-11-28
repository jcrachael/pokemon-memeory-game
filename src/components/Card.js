import "../styles/Card.css";

function Card({ poke, handleClick }) {
  return (
    <div
      key={poke.id}
      id={poke.id}
      className={"Card " + poke.name}
      onClick={handleClick}
    >
      <img
        src={poke.img}
        alt={poke.name}
        className="poke-img"
        onClick={handleClick}
      />
      <h2>{poke.name}</h2>
    </div>
  );
}

export default Card;
