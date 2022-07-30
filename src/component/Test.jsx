import { useState, useCallback, useEffect, useRef, useContext } from "react";
import ColItem from "./ColItem";
import ColorPicker from "./ColorPicker/ColorPicker";
import InitialContext from "../store/context";


const Test = () => {
  const [show, setShow] = useState(false);
  const dragging = useRef(false);
  const square = useRef();
  const { initialColor, setData, data } = useContext(InitialContext);
  const { innerWidth, innerHeight } = window;
  const width = innerWidth / 100;
  let height = width;

  const rowArray = Math.floor(innerHeight / height);

  let colArray = Array.from({ length: 100 });

  let countRows = Array.from({ length: rowArray });

  const handleMouseDown = () => {
    dragging.current = true;
  };
  const handleMouseUp = () => {
    dragging.current = false;
  };
  const handleMouseMove = (e) => {
    if (!dragging.current) {
      return;
    }
    e.target.style.background = initialColor;
  };

  useEffect(() => {
    square.current.addEventListener("mousedown", handleMouseDown);
    square.current.addEventListener("mouseup", handleMouseUp);
    square.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      square.current.removeEventListener("mousedown", handleMouseDown);
      square.current.removeEventListener("mouseup", handleMouseUp);
      square.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseDown, handleMouseUp, handleMouseMove]);

  const handleContextMenu = useCallback((event) => {
    event.preventDefault();
    setShow(true);
  }, []);

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div
      ref={square}
      style={{
        position: "relative",
      }}
    >
      {countRows.map((item, index) => {
        return (
          <div key={index} className="row" style={{ width: innerWidth }}>
            {colArray.map((elem, id) => {
              return (
                <ColItem
                  id={`${index}-${id}`}
                  key={`${index}-${id}`}
                  width={width}
                  setData={setData}
                  data={data}
                  height={height}
                />
              );
            })}
          </div>
        );
      })}
      {show && <ColorPicker setShow={setShow} />}
    </div>
  );
};

export default Test;
