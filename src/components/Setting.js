function Setting(props) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "row":
        props.setRow(value);
        break;
      case "col":
        props.setCol(value);
        break;
      case "p":
        props.setP(value);
        break;
    }
  };

  return (
    <div>
      <p>게임판 크기 설정</p>
      행:
      <input
        type="text"
        name="row"
        value={props.row}
        onChange={(e) => {
          handleInputChange;
        }}
      />
      열:
      <input
        type="text"
        name="col"
        value={props.col}
        onChange={(e) => {
          handleInputChange;
        }}
      />
      <p>목표 숫자 설정</p>
      <input
        type="text"
        name="p"
        value={props.p}
        onChange={(e) => {
          handleInputChange;
        }}
      />
    </div>
  );
}

export default Setting;
