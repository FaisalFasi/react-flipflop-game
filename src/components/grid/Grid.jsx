import Box from "../box/Box";
import { useState, useEffect } from "react";

function Grid() {
  const [prevClickedValue, setPrevClickedValue] = useState(null);
  const [prevClickedId, setPrevClickedId] = useState(null);
  const [isFirstClick, setIsFirstClick] = useState(false);

  // const [isClicked, setIsClicked] = useState(false);

  const [boxes, setBoxes] = useState(
    [
      { id: "id1", isClicked: false, value: 1, imgSrc: "./img/img-11.jpg" },
      { id: "id2", isClicked: false, value: 2, imgSrc: "./img/img-22.jpg" },
      { id: "id3", isClicked: false, value: 3, imgSrc: "./img/img-33.jpg" },
      { id: "id4", isClicked: false, value: 4, imgSrc: "./img/img-44.jpg" },
      { id: "id5", isClicked: false, value: 5, imgSrc: "./img/img-55.jpg" },
      { id: "id6", isClicked: false, value: 6, imgSrc: "./img/img-66.jpg" },
      { id: "id7", isClicked: false, value: 7, imgSrc: "./img/img-77.jpg" },
      { id: "id8", isClicked: false, value: 8, imgSrc: "./img/img-88.jpg" },
      { id: "id9", isClicked: false, value: 1, imgSrc: "./img/img-11.jpg" },
      { id: "id10", isClicked: false, value: 2, imgSrc: "./img/img-22.jpg" },
      { id: "id11", isClicked: false, value: 3, imgSrc: "./img/img-33.jpg" },
      { id: "id12", isClicked: false, value: 4, imgSrc: "./img/img-44.jpg" },
      { id: "id13", isClicked: false, value: 5, imgSrc: "./img/img-55.jpg" },
      { id: "id14", isClicked: false, value: 6, imgSrc: "./img/img-66.jpg" },
      { id: "id15", isClicked: false, value: 7, imgSrc: "./img/img-77.jpg" },
      { id: "id16", isClicked: false, value: 8, imgSrc: "./img/img-88.jpg" },
    ].sort((a, b) => Math.random() - 0.5)
  );

  // shuffling array with custom alogorithm
  // useEffect(() => {
  //   const shuffleBoxes = () => {
  //     const shuffledBoxes = [...boxes];
  //     for (let i = shuffledBoxes.length - 1; i > 0; i--) {
  //       const randomIndex = Math.floor(Math.random() * (i + 1));
  //       [shuffledBoxes[i], shuffledBoxes[randomIndex]] = [
  //         shuffledBoxes[randomIndex],
  //         shuffledBoxes[i],
  //       ];
  //     }
  //     console.log(shuffledBoxes);
  //     setBoxes(shuffledBoxes);
  //   };

  //   shuffleBoxes();
  // }, []);

  const clickHandler = (id, value) => {
    if (!isFirstClick) {
      setPrevClickedValue(value);
      setPrevClickedId(id);
      setIsFirstClick(true);
      console.log(value + ":" + id);
    } else {
      const currentValue = value;
      const currentID = id;
      if (prevClickedValue === currentValue) {
        console.log("IDs are the same:", prevClickedId);
      } else {
        console.log("IDs are different:", prevClickedId, currentValue);

        setTimeout(() => {
          setBoxes((prevBoxes) => {
            return prevBoxes.map((box) => {
              if (box.id === prevClickedId || box.id === currentID) {
                return { ...box, isClicked: false };
              }
              return box;
            });
          });
        }, 1000);
      }

      setIsFirstClick(false);
      setPrevClickedId(null);
      setPrevClickedId(null);
    }

    setBoxes((preBoxes) => {
      return preBoxes.map((box) => {
        return box.id === id ? { ...box, isClicked: !box.isClicked } : box;
      });
    });
  };

  return (
    <div className="grid grid-cols-4 w-80 m-auto mt-20">
      {boxes.map((box, index) => {
        return (
          <Box
            key={index}
            id={box.id}
            isClicked={box.isClicked}
            value={box.value}
            imgSrc={box.imgSrc}
            clickHandler={(id) => clickHandler(box.id, box.value)}
          />
        );
      })}
    </div>
  );
}

export default Grid;
