function Scores({ current, best, getBestScore }) {
  return (
    <div className="Scores">
      <h3>Pokémon caught:</h3>
      <p>
        <span className="label">Current:</span>{" "}
        <span className="score">{current}</span>
      </p>
      <p>
        <span className="label">Best:</span>{" "}
        <span className="score">{getBestScore()}</span>
      </p>
    </div>
  );
}

export default Scores;
