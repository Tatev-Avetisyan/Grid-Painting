import { useContext } from "react";
import { useState } from "react";

import InitialContext from "../store/context";

const ColItem = ({ id, width, height }) => {
  const [clicked, setClicked] = useState(false);
  const { initialColor } = useContext(InitialContext);

  const handleChangeBackground = (e) => {
    if (!clicked) {
      e.target.style.background = initialColor;

      setClicked(true);
    } else {
      e.target.style.background = "none";
      setClicked(false);
    }
  };

  return (
    <div
      className="col"
      id={id}
      style={{
        width: width,
        height: height,
        border: "solid 1px #E6E5DB  ",
        // background: data[id],
      }}
      onClick={handleChangeBackground}
    ></div>
  );
};
export default ColItem;
