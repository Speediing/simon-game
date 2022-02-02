import React from "react";
import { Turn } from "../utils/enums/Turn";
interface HeaderProps {
  turn: Turn;
  turnCount: number;
  highScore: number;
}
function Header({ turn, turnCount, highScore }: HeaderProps) {
  const getHeaderText = (turn: Turn) => {
    switch (turn) {
      case Turn.PC:
        return "Watch";
      case Turn.Player:
        return "Play";
      default:
        break;
    }
  };
  return (
    <div className="relative mt-8">
      <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        {getHeaderText(turn)}
      </h2>
      <h2 className="mt-4 text-center text-xl leading-8 font-bold tracking-tight text-gray-300 sm:text-xl">
        Try to match the sequence of colors of the computer!
      </h2>
      <div className="flex justify-center gap-8">
        <p className="mt-4  text-center text-xl text-gray-300">
          {`Turncount: `}
          <span className="mt-4  text-center font-bold text-xl text-white">
            {turnCount}
          </span>
        </p>
        <p className="mt-4 text-center text-xl text-gray-300">
          {`High Score: `}
          <span className="mt-4  text-center font-bold text-xl text-white">
            {highScore}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Header;
