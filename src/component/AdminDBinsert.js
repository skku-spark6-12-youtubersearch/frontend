import React, { useState } from "react";
import axios from "axios";
const secret = require("./secret");

const AdminDBinsert = () => {
  const [isFileLoaded, setIsFileLoaded] = useState(false);
  const [fileItem, setFileItem] = useState(null);

  const reader = new FileReader();
  reader.onload = () => {
    console.log("read ok");
    setFileItem(JSON.parse(reader.result));
    setIsFileLoaded(true);
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

  const updateClick = async () => {
    if (isFileLoaded === false) {
      alert("no items");
      return;
    } else {
      const idlist = fileItem.channels.map((item) => {
        return item.id;
      });

      console.log("post start");
      var param = false;
      if (window.confirm("overwrite?")) {
        param = true;
      } else {
        param = false;
      }
      for (let id of idlist) {
        console.log(`${id} post start`);
        try {
          const response = await axios({
            method: "post",
            url: `http://${secret.BACKEND_IP}:9000/admin/channel/${id}`,
            data: fileItem.channels.filter((channel) => channel.id === id)[0],
            headers: {
              "x-access-token": secret.ADMIN_TOKEN,
            },
            params: {
              overwrite: param,
            },
          });

          console.log(response);
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  const setTagClick = async () => {
    if (isFileLoaded === false) {
      alert("no items");
      return;
    } else {
      console.log("post start");
      if (!window.confirm("Set Tag DB?")) {
        console.log("stop post");
        return;
      }
      try {
        const response = await axios({
          method: "post",
          url: `http://${secret.BACKEND_IP}:9000/admin/tags`,
          data: fileItem,
          headers: {
            "x-access-token": secret.ADMIN_TOKEN,
          },
        });

        console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const updateTagClick = async () => {
    if (isFileLoaded === false) {
      alert("no items");
      return;
    } else {
      const idlist = fileItem.tag.map((item) => {
        return item.id.substring(9);
      });

      console.log("post start");

      for (let id of idlist) {
        console.log(`${id} post start`);
        try {
          const response = await axios({
            method: "post",
            url: `http://${secret.BACKEND_IP}:9000/admin/tags/${id}`,
            data: fileItem.tag.filter(
              (channel) => channel.id.substring(9) === id
            )[0],
            headers: {
              "x-access-token": secret.ADMIN_TOKEN,
            },
          });

          console.log(response);
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  if (window.prompt("비밀번호를 입력하세요") === secret.ADMIN_PASSWORD) {
    return (
      <div style={{ paddingLeft: "80px" }}>
        <h1>JSON 파일 입력해주세요</h1>
        <a href="https://skku-spark6-12-youtubersearch.github.io/docs/admin">
          https://skku-spark6-12-youtubersearch.github.io/docs/admin
        </a>
        <hr />

        <input
          type="file"
          accept=".json"
          name="input_json"
          onChange={onChange}
        />
        <button disabled={1}>Set Channel DB </button>
        <button onClick={updateClick}>Update Channel </button>
        <button onClick={setTagClick}>Set Tag DB</button>
        <button onClick={updateTagClick}>/update Tag DB</button>

        {isFileLoaded && <div>{JSON.stringify(fileItem).substr(0, 2000)}</div>}
      </div>
    );
  } else return <div>비밀번호가 틀렸습니다.</div>;
};

export default AdminDBinsert;
