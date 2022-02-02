import { Color } from "../enums/Colors";

export const getBGColor = (color: Color, randColor: Color | null) => {
  if (randColor === color) {
    switch (color) {
      case Color.Blue:
        return "bg-blue-600";
      case Color.Green:
        return "bg-green-600";
      case Color.Red:
        return "bg-red-600";
      case Color.Yellow:
        return "bg-orange-600";
      default:
        break;
    }
  }
  if (color !== null)
    switch (color) {
      case Color.Blue:
        return "bg-blue-100 active:bg-blue-600 b-5 border-blue-600";
      case Color.Green:
        return "bg-green-100 active:bg-green-600 border-green-600";
      case Color.Red:
        return "bg-red-100 active:bg-red-600 border-red-600";
      case Color.Yellow:
        return "bg-orange-100 active:bg-orange-600 border-orange-600";
      default:
        break;
    }
};
