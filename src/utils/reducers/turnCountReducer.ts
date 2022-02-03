export enum TurnCountAction {
  Increment,
  Reset,
}

export const turnCountReducer = (state: number, action: TurnCountAction) => {
  switch (action) {
    case TurnCountAction.Increment:
      return state + 1;
    case TurnCountAction.Reset:
      return 1;
    default:
      break;
  }
  return state;
};
