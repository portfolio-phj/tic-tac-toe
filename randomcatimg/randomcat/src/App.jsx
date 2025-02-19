import React, { useState } from "react";
import CatApi from "./apis/randomcat/catapi";
import "./App.css"; // 스타일 연결

function RandomCatImage() {
  const [catImage, setCatImage] = useState("");

  const fetchRandomCatImage = async () => {
    try {
      const cats = await CatApi.getRandomCatImage();

      setCatImage(cats[0].url);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  return (
    <div className="container">
      <h1>랜덤 고양이 이미지</h1>
      {catImage && <img src={catImage} className="cat-image" />}
      <button onClick={fetchRandomCatImage}>랜덤 고양이 사진 가져오기</button>
    </div>
  );
}

export default RandomCatImage;
