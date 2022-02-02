import React from "react";
import { Color } from "../utils/enums/Colors";
import { getBGColor } from "../utils/helpers/getBGColor";
interface OrderInfoProps {
  color: Color;
  randColor: Color | null;
  handleClick: any;
}
function ColorBox({ color, randColor, handleClick }: OrderInfoProps) {
  return (
    <button
      key={color}
      onClick={() => handleClick(color)}
      className={`rounded-md w-10 h-10 ${getBGColor(color, randColor)}`}
    ></button>
  );
}

export default ColorBox;
