import { useState } from "react";

import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import emptyDice from "../assets/images/dice-empty.png";
export default function Dice() {
  const images = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [currentImage, setCurrentImg] = useState(dice1);
  const clickOnDice = () => {
    setCurrentImg(emptyDice);
    setTimeout(() => {
      setCurrentImg(images[Math.floor(Math.random() * images.length)]);
    }, 1000);
  };
  return (
    <div>
      <img
        src={currentImage}
        onClick={clickOnDice}
        style={{ width: "200px" }}
      />
    </div>
  );
}
