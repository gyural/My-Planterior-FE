import axios from "axios";

const submitGoogle = async () => {
  try {
    const response = await axios.get('https://mpserver.shop/');
    if (response) {
      // HTML 문서를 현재 창에서 열기
      document.open();
      document.write(response.data);
      document.close();
      // 새 창이 열렸는지 확인
      }else {
      return false;
    }
  } catch (error) {
    console.error('API 호출 에러:', error);
    return false;
  }
};

const getGoogleUserData = async (token) => {
  try {
    const response = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('API 호출 에러:', error);
    return null;
  }
};
export { submitGoogle, getGoogleUserData };