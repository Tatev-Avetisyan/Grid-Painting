import "./style.css";

const SquaresComponent = () => {
  const OFFSET = 100;
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const { innerWidth, innerHeight } = getWindowSize();

  const items = [];

  const sum = Math.round((innerHeight / innerWidth) * 10000);
  const width = innerWidth / 100;
  const height = width;

  const qm = innerHeight * innerWidth;
  const itemqm = width * height;

  const amount = qm / itemqm;

  for (let i = 0; i < sum; i++) {
    items.push(i);
  }

  return (
    <div className="wrapper">
      {items.map((item, index) => {
        return (
          <div key={index}>
            <div
              className="square"
              width={width}
              height={height}
              style={{
                width: width + "px",
                height: height + "px",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default SquaresComponent;
