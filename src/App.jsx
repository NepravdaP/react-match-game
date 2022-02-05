import { getImages } from "./api";
import "./App.css";
import { useState, useEffect } from "react";
import { shuffleCards } from "./utils/shuffle";
import SingleCard from "./components/SingleCard";

const App = () => {
  const [images, setImages] = useState([]);
  const [pickFirst, setPickFirst] = useState(null);
  const [pickSecond, setPickSecond] = useState(null);
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
      if (pickFirst.id === pickSecond.id) {
        console.log("Its match");
        setPickFirst(null);
        setPickSecond(null);
      } else {
        console.log("Its not match");
        setPickFirst(null);
        setPickSecond(null);
      }
    }
  }, [pickFirst, pickSecond]);

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
          <SingleCard handlePick={handlePick} card={card} />
        ))}
      </div>
    </div>
  );
};

export default App;
