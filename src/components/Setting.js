import { useState } from "react";

function Setting(props) {
  
  const [tempSetting, setTempSetting] = useState({
    row: 4,
    col: 4,
    p: 5,
  });

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempSetting((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <p>게임판 크기 설정</p>
      행:
      <input
        type="text"
        name="row"
        value={tempSetting.row}
        onChange={handleInputChange}
      />
      열:
      <input
        type="text"
        name="col"
        value={tempSetting.col}
        onChange={handleInputChange}
      />
      <p>목표 숫자 설정</p>
      <input
        type="text"
        name="p"
        value={tempSetting.p}
        onChange={handleInputChange}
      />
      <button
        className="customGame"
        onClick={() => {
          props.setSettings(tempSetting);
          props.handleCustomGameButtonChange();
        }}
      >
        게임 시작
      </button>
    </div>
  );
}

export default Setting;
