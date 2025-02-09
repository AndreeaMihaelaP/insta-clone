import { TextStyle } from "react-native";
const size = {
  sm: 12,
  default: 14,
  md: 16,
  lg: 20,
  xlg: 24,
  xxlg: 30,
};

const weight: { [key: string]: TextStyle["fontWeight"] } = {
  full: "900",
  bold: "bold",
  normal: "normal",
  thin: "400",
};

export default { size, weight };
