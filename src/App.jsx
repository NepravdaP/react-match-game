import { getImages } from "./api";
import "./App.css";
import { useState, useEffect } from "react";
import { shuffleCards } from "./utils/shuffle";
import SingleCard from "./components/SingleCard";

const App = () => {
  const [images, setImages] = useState([]);
  const [pickFirst, setPickFirst] = useState(null);
  const [pickSecond, setPickSecond] = useState(null);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await getImages(5);
      setImages(shuffleCards(res.response.results));
    })();
  }, []);

  const handlePick = (card) => {
    pickFirst ? setPickSecond(card) : setPickFirst(card);
  };
  useEffect(() => {
    if (pickFirst && pickSecond) {
      setDisabled(true);
      if (pickFirst.id === pickSecond.id) {
        setImages((prevImages) => {
          return prevImages.map((el) => {
            if (el.id === pickFirst.id) {
              return { ...el, matched: true };
            } else {
              return el;
            }
          });
        });
        console.log("Its match");

        resetPicks();
      } else {
        setTimeout(() => resetPicks(), 1500);

        console.log("Its not match");
      }
    }
  }, [pickFirst, pickSecond]);

  const resetPicks = () => {
    setPickFirst(null);
    setPickSecond(null);
    setDisabled(false);
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button
        onClick={() => {
          setImages(shuffleCards(images));
        }}
      >
        New Game
      </button>
      <div className="grid">
        {images.map((card) => (
          <SingleCard
            handlePick={handlePick}
            card={card}
            flipped={card === pickFirst || card === pickSecond || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
