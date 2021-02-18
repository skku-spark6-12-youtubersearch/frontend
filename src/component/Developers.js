import React from "react";
import "./css/Developers.css";
import DevInfo from "./DevInfo";

const Developers = () => {
  const devs = [
    {
      name: "강호형(Kang HoHyeong)",
      email: "hobro.kang@gmail.com",
      phone: "010-3670-9062",
      job: [
        "프론트앤드 개발",
        "DB관리",
        "데이터 크롤링",
        "데이터 전처리",
        "서버 유지 관리",
        "프로잭트 기획 및 관리",
        "백앤드 API 개발 및 수정",
      ],
      position: "팀장",
      memo: "몰라서 못보는 유튜버가 없는 세상을 위하여..",
      photo: "/developers/hohyeong.jpg",
    },
    {
      name: "윤민철(Yoon MinCheol)",
      email: "yoon56@g.skku.edu",
      phone: "010-9998-9001",
      job: [
        "자연어처리",
        "인공지능 모델 구현",
        "데이터 크롤링",
        "서비스 앤진 개발",
      ],
      position: "팀원",
      memo: "화이팅!",
      photo: "/developers/mincheol.png",
    },
    {
      name: "박희강(Park HeeKang)",
      email: "park.heekang33@gmail.com",
      phone: "",
      blog: "https://heekangpark.github.io/",
      job: ["백앤드 개발", "백앤드 API 개발", "DB관리", "서버 관리"],
      position: "객원 팀원",
      memo: "",
      photo: "/developers/heekang.png",
    },
  ];

  return (
    <div className="developers-box">
      {devs.map((dev, idx) => (
        <DevInfo data={dev} key={idx} />
      ))}
    </div>
  );
};

export default Developers;
