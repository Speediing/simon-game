export enum TurnAction {
  Increment,
  Reset,
}

export const turnCountReducer = (state: number, action: TurnAction) => {
  switch (action) {
    case TurnAction.Increment:
      return state + 1;
    case TurnAction.Reset:
      return 1;
    default:
      break;
  }
  return state;
};
