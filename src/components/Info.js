import Instructions from "./Instructions";
import Scores from "./Scores";
import "../styles/Info.css";

function Info() {
  return (
    <section className="Info">
      <Instructions />
      <Scores />
    </section>
  );
}

export default Info;
