import { Turn } from "../enums/Turn";

export enum TurnAction {
  Switch,
}

export const turnReducer = (state: Turn, action: TurnAction) => {
  if (action === TurnAction.Switch) {
    if (state === Turn.Player) return Turn.PC;
    if (state === Turn.PC) return Turn.Player;
  }
  return state;
};
