import back from "../../assets/svg/Orange_question_mark.svg";
import "./style.css";
// import { v4 as uuidv4 } from "uuid";

export default function singleCard({ card, handlePick, flipped }) {
  const handleClick = () => {
    handlePick(card);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
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
