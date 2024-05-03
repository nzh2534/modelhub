import "./card.css";
import "./flip-transition.css";
import { Alert } from "react-bootstrap";

function Card({front, link, accuracy}) {

  return (
    <div className="card">
      <a href={link}>
      <div className="card-front p-2">
        <div className="d-flex w-100 justify-content-end">
          <div><Alert className="p-1">{accuracy}</Alert></div>
        </div>
        <div className="mb-5">
          {front}
        </div>
      </div>
      </a>
    </div>
  );
}

export default Card;