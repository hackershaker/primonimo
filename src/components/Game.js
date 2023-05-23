import { useState } from "react";

function Game() {
  const cell = (id) => {
    const [id, setId] = useState(0);
    const [value, setValue] = usestate(0);

    const incrementCell = (i) => {
      setValue(value + i);
    };
    return <div className="cell">{value}</div>;
  };

  const makeBoard = (props) => {
    return <div>게임 보드판</div>;
  };

  const select = () => {};
}
