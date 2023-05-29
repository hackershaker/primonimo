import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Setting from "./components/Setting";

function App() {
  const [displayGameBoard, setDisplayGameBoard] = useState(false);
  const [settings, setSettings] = useState({
    row: 3,
    col: 3,
    p: 5,
  });
  const handleCustomGameButtonChange = () => {
    setDisplayGameBoard(true);
  };

  const gameStart = () => {};
  return (
    <div className="App">
      <Setting
        {...settings}
        setSettings={setSettings}
        handleCustomGameButtonChange={handleCustomGameButtonChange}
      />

      {displayGameBoard && <Game {...settings} />}
    </div>
  );
}

export default App;
