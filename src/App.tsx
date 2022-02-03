import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { Color } from "./utils/enums/Colors";
import { Turn } from "./utils/enums/Turn";
import getRandomInt from "./utils/helpers/getRandom";
import { timeout } from "./utils/helpers/timeout";
import Header from "./components/Header";
import ColorGrid from "./components/ColorGrid";
import { isGameOver } from "./utils/helpers/isGameOver";
import {
  TurnCountAction,
  turnCountReducer,
} from "./utils/reducers/turnCountReducer";
import { TurnAction, turnReducer } from "./utils/reducers/turnReducer";

function App() {
  const [turn, setTurn] = useReducer(turnReducer, Turn.PC);
  const [randColor, setRandColor] = useState<Color | null>(null);
  const [randColorHistory, setRandColorHistory] = useState<Color[]>([]);
  const [turnCount, setTurnCount] = useReducer(turnCountReducer, 1);
  const [highScore, setHighScore] = useState(1);
  const [userTurn, setUserTurn] = useState<Color[]>([]);

  useEffect(() => {
    const PCTurn = async () => {
      applyHighScore();
      await timeout(1000);
      for (let turnIndex = 0; turnIndex < turnCount; turnIndex++) {
        let color =
          turnIndex === turnCount - 1
            ? getRandomInt()
            : randColorHistory[turnIndex];
        setRandColor(color);
        await timeout(1500);
        setRandColor(null);
        await timeout(1500);
        if (turnIndex === turnCount - 1) {
          setRandColorHistory([...randColorHistory, color]);
        }
      }
      setTurn(TurnAction.Switch);
    };
    if (turn === Turn.PC) {
      PCTurn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turnCount, turn]);

  const handleClick = async (color: Color) => {
    if (turn === Turn.Player) {
      let newUserSet = [...userTurn, color];
      let gameOver = isGameOver(newUserSet, randColorHistory);
      if (gameOver) {
        resetGame();
      } else if (newUserSet.length === turnCount) {
        newTurn();
      } else {
        setUserTurn(newUserSet);
      }
    }
  };

  const applyHighScore = () => {
    if (turnCount > highScore) {
      setHighScore(turnCount);
    }
  };

  const resetGame = () => {
    setUserTurn([]);
    setRandColorHistory([]);
    setTurn(TurnAction.Switch);
    setTurnCount(TurnCountAction.Reset);
  };

  const newTurn = () => {
    setUserTurn([]);
    setTurn(TurnAction.Switch);
    setTurnCount(TurnCountAction.Increment);
  };

  return (
    <div className="bg-black  h-full absolute top-0 bottom-0 left-0 right-0">
      <div className="w-full px-4 pt-7 bg-black">
        <div className="w-full max-w-lg p-2 mx-auto rounded-2xl">
          <Header turn={turn} turnCount={turnCount} highScore={highScore} />
          <ColorGrid randColor={randColor} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
