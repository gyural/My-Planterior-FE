import axios from "axios";

const submitGoogle = async () => {
  try {
    const response = await axios.get('https://mpserver.shop/');
    if (response) {
      console.log(response.data);
      // 새로운 창 열기
      const newWindow = window.open("", "_blank");
      // 새 창이 열렸는지 확인
      if (newWindow) {
        // HTML 문서를 새 창에 작성
        newWindow.document.write(response.data);
      } else {
        console.error("새 창을 열 수 없습니다.");
      }
      return response;
    } else {
      return false;
    }
  } catch (error) {
    console.error('API 호출 에러:', error);
    return false;
  }
};

export { submitGoogle };