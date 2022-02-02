import { Color } from "../enums/Colors";

export const isGameOver = (userColors: Color[], pcColors: Color[]) => {
  let gameOver = false;
  userColors.forEach((color, index) => {
    if (pcColors[index] !== color) {
      gameOver = true;
    }
  });
  return gameOver;
};
