import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Setting from "./components/Setting";

function App() {
  const [displayGameBoard, setDisplayGameBoard] = useState(false);
  const [gameKey, setGameKey] = useState(0);
  const [settings, setSettings] = useState({
    row: 3,
    col: 3,
    p: 5,
  });
  const handleCustomGameButtonChange = () => {
    setGameKey((prevKey) => prevKey + 1);
    setDisplayGameBoard(true);
  };

  return (
    <div className="App">
      <Setting
        {...settings}
        setSettings={setSettings}
        handleCustomGameButtonChange={handleCustomGameButtonChange}
      />

      {displayGameBoard && <Game key={gameKey} {...settings} />}
    </div>
  );
}

export default App;
