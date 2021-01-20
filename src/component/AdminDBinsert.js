import React, { useState } from "react";

const AdminDBinsert = () => {
  const [isFileLoaded, setIsFileLoaded] = useState(false);
  const [fileItem, setFileItem] = useState(null);
  const reader = new FileReader();
  reader.onload = () => {
    console.log("read ok");
    setFileItem(reader.result);
    setIsFileLoaded(true);
    console.log(typeof reader.result);
  };

  const onChange = (e) => {
    console.log("file input");
    console.log(e.target.files[0]);
    try {
      reader.readAsText(e.target.files[0], "utf-8");
    } catch (e) {
      //   console.log(e);
      setFileItem(null);
      setIsFileLoaded(false);
    }
  };

  return (
    <div>
      <h1>JSON 파일 입력해주세요</h1>
      <form name="add_data" action="http://localhost:3001" method="post">
        <input
          type="file"
          accept=".json"
          name="input_json"
          onChange={onChange}
        />
        <button type="submit">보내기</button>
      </form>

      {isFileLoaded && <div>{fileItem.substr(0, 2000)}</div>}
    </div>
  );
};

export default AdminDBinsert;
