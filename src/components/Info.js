import Instructions from "./Instructions";
import Scores from "./Scores";
import "../styles/Info.css";

function Info({ current, best, getBestScore }) {
  return (
    <section className="Info">
      <Instructions />
      <Scores current={current} best={best} getBestScore={getBestScore} />
    </section>
  );
}

export default Info;
