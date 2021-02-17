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
        "서버 유지 관리",
        "프로잭트 기획 및 관리",
      ],
      position: "팀장",
      memo: "잘부탁드립니다!",
      photo: "/developers/hohyeong.jpg",
    },
    {
      name: "윤민철(Yoon MinCheol))",
      email: "abc@gmail.com",
      phone: "010-0000-0000",
      job: [
        "자연어처리",
        "인공지능 모델 구현",
        "데이터 크롤링",
        "서비스 앤진 개발",
      ],
      position: "팀원",
      memo: "잘부탁드립니다!",
      photo: "/developers/hohyeong.jpg",
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
