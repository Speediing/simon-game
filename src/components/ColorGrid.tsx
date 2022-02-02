import React from "react";
import { Color } from "../utils/enums/Colors";
import ColorBox from "./ColorBox";
interface ColorGridProps {
  randColor: Color | null;
  handleClick: any;
}
function ColorGrid({ randColor, handleClick }: ColorGridProps) {
  return (
    <div className="grid grid-cols-2">
      {[Color.Blue, Color.Green, Color.Red, Color.Yellow].map((color) => {
        return (
          <div className={"pt-24 flex justify-center"} key={color}>
            <ColorBox
              handleClick={handleClick}
              color={color}
              randColor={randColor}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ColorGrid;
