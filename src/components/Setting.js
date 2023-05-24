function Setting(props) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    props.setSettings(name, parseInt(value));
  };
  return (
    <div>
      <p>게임판 크기 설정</p>
      행:
      <input
        type="text"
        name="row"
        value={props.row}
        onChange={handleInputChange}
      />
      열:
      <input
        type="text"
        name="col"
        value={props.col}
        onChange={handleInputChange}
      />
      <p>목표 숫자 설정</p>
      <input
        type="text"
        name="p"
        value={props.p}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Setting;
