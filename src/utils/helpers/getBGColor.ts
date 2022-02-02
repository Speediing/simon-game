import { Color } from "../enums/Colors";

export const getBGColor = (color: Color, randColor: Color | null) => {
  if (randColor === color) {
    switch (color) {
      case Color.Blue:
        return "bg-blue-400";
      case Color.Green:
        return "bg-green-400";
      case Color.Red:
        return "bg-red-400";
      case Color.Yellow:
        return "bg-orange-400";
      default:
        break;
    }
  }
  if (color !== null)
    switch (color) {
      case Color.Blue:
        return "bg-black active:bg-blue-400 border border-blue-400";
      case Color.Green:
        return "bg-black active:bg-green-400 border border-green-400";
      case Color.Red:
        return "bg-black active:bg-red-400 border border-red-400";
      case Color.Yellow:
        return "bg-black active:bg-orange-400 border border-orange-400";
      default:
        break;
    }
};
