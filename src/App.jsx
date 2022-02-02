import { getImages } from "./api";
import "./App.css";
import { useState, useEffect } from "react";

import SingleCard from "./components/SingleCard";

const App = () => {
  const [cards, setCards] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getImages(5);

      setImages(res.response.results);
    })();
  }, []);
  // const shuffleImg = () => {
  //   const shufledImg = [...images, ...images].sort(() => Math.random() - 0.5);
  // };
  // shuffleImg();
  const shufleCards = () => {
    const shufledCards = [...images, ...images]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setCards(shufledCards);
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shufleCards}>New Game</button>
      <div className="grid">
        {cards.map((card) => (
          <SingleCard card={card} />
          // <img
          //   src={el.urls.regular}
          //   key={uuidv4()}
          //   alt={el.alt_description && "alt"}
          // />
        ))}
      </div>
    </div>
  );
};

export default App;
