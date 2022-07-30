import { createContext } from "react";

const InitialContext = createContext({
  initialColor: "pink",
  setColor: (col) => {},
});
export default InitialContext;
