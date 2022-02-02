import back from "../../assets/svg/Orange_question_mark.svg";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

export default function singleCard({ card }) {
  const handleClick = () => {};
  return (
    <div className="card" key={uuidv4()}>
      <div>
        <img src={card.urls.regular} className="card-front" alt="card front" />
        <img
          src={back}
          className="card-back"
          onClick={handleClick}
          alt="Card back"
        />
      </div>
    </div>
  );
}
