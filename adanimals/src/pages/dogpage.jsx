import React, { useState, useEffect } from "react";
import AbandonedDogImg from "../apis/components/AbandonedDogImg";

function DogPage() {
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const images = await AbandonedDogImg(); // API에서 이미지 목록 가져오기
      setImgList(images);
    }
    fetchImages();
  }, []);

  return (
    <div>
      {imgList.map((url) => (
        <img key={url} src={url} />
      ))}
    </div>
  );
}

export default DogPage;
