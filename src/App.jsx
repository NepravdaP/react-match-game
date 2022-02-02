import { getImages } from "./api";
import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getImages(4);

      setImages(res.response.results);
    })();
  }, []);
  // const shuffleImg = () => {
  //   const shufledImg = [...images, ...images].sort(() => Math.random() - 0.5);
  // };
  // shuffleImg();
  console.log(images);
  const doubleImages = [...images, ...images]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button>New Game</button>
      <div id="128643" className="board">
        {doubleImages.map((el) => (
          <img
            className="card-front"
            src={el.urls.regular}
            key={uuidv4()}
            alt={el.alt_description && "alt"}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
