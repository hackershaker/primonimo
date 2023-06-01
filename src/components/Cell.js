import { useEffect, useState } from "react";

function Cell(props) {
  const [cell, setCell] = useState({
    v: props.v,
    r: props.r,
    c: props.c,
    className: "",
  });

  useEffect(() => {
    console.log(props.v);
    if (props.v === props.p) {
      setCell((prevCell) => ({
        ...prevCell,
        className: "green",
      }));
    } else {
      setCell((prevCell) => ({
        ...prevCell,
        className: "",
      }));
    }
  }, [props.v]);

  const click = () => {
    props.handleCellClick(cell.r, cell.c);
  };

  return (
    <div
      className={`GameBoard-cell ${cell.className}`}
      style={{ color: props.color }}
      id={`${cell.r},${cell.c}`}
      onClick={click}
      r={props.r}
      c={props.c}
    >
      {props.v}
    </div>
  );
}

export default Cell;
