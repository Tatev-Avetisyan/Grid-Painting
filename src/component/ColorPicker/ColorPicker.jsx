import { useContext, useRef } from "react";
import InitialContext from "../../store/context";
import "./style.css";
import useOnClickOutside from "../outsideClick/useOnClickOutside";

export const colorList = [
  { color: "#F50611 ", id: 1 },
  { color: "#050F8C ", id: 2 },
  { color: "#ECFA07 ", id: 3 },
  { color: "#3A6B04 ", id: 4 },
  { color: "#F573C3 ", id: 5 },
  { color: "#3FFF33 ", id: 6 },
  { color: "#FF7733 ", id: 7 },
  { color: "#33FFCA ", id: 8 },
  { color: "#339CFF ", id: 9 },
  { color: "#C733FF ", id: 10 },
];

const ColorPicker = ({ setShow }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setShow(false));

  const { setColor } = useContext(InitialContext);
  const pickColor = (col) => {
    setColor(col);
    setShow(false);
  };

  return (
    <div className="color-container" ref={ref}>
      {colorList.map((item) => (
        <div
          onClick={() => pickColor(item.color)}
          key={item.id}
          style={{
            background: item.color,
          }}
          className="color-desk"
        >
          <div className="color-box"></div>
        </div>
      ))}
    </div>
  );
};
export default ColorPicker;
