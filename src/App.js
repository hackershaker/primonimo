import { useState } from "react";
import "./App.css";
import Setting from "./components/Setting";

function App() {
  const [displayGameBoard, setDisplayGameBoard] = useState(false);
  const [settings, setSettings] = useState({
    row: 3,
    col: 3,
    p: 5,
  });
  const toggleDisplayGameBoard = () => {
    setDisplayGameBoard(!displayGameBoard);
  };
  const handleSettingChange = (name, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };
  return (
    <div className="App">
      <Setting {...settings} setSettings={handleSettingChange} />
      <button onClick={() => console.log(settings)}>게임 시작</button>
    </div>
  );
}

export default App;
