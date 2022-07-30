import React, {useState } from "react";
import InitialContext from "./context";

const ColorProvider = ({ children }) => {
  const [initialColor, setColor] = useState("pink");
  

  return (
    <InitialContext.Provider
      value={{
        initialColor,
        setColor,
      }}
    >
      <div>{children}</div>
    </InitialContext.Provider>
  );
};

export default ColorProvider;
