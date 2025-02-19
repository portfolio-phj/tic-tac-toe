import Core from "../core";

async function AbandonedDogImg() {
  try {
    // API 요청
    const response = await Core.get("");

    console.log("API 응답 데이터:", response.data);

    if (response.data.AbdmAnimalProtect?.[1]?.row) {
      // API 응답 구조를 확인하고 row 데이터를 추출
      const images = response.data.AbdmAnimalProtect[1].row
        .map((animal) => animal.THUMB_IMAGE_COURS)
        .filter((img) => img); // 이미지 없는 데이터 제거

      console.log("유기동물 이미지 목록:", images);
      return images;
    }

    return [];
  } catch (error) {
    console.error("유기동물 이미지 가져오기 실패:", error);
    return [];
  }
}

export default AbandonedDogImg;
