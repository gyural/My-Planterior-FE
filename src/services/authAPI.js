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

const getKakaoUserData = async (token) => {
  try {
    const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('API 호출 에러:', error);
    return null;
  }
};

const getKakaoUserDataTest = async () => {
  const token = 'bsXgA28pkDFSSDr2hCwJSClc3ZFpzaS0AAAAAQopyWAAAAGRIvbHWW1lzvpaqIEo'
  const acctoken = '5oLE48fhcUGSikQkXTONzKAVuLjHnMYqAAAAAQopyV8AAAGRIvnAzm1lzvpaqIEo'
  const idtoken = 'eyJraWQiOiI5ZjI1MmRhZGQ1ZjIzM2Y5M2QyZmE1MjhkMTJmZWEiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9'
  try {
    const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${idtoken}`
      }
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('API 호출 에러:', error);
    return null;
  }
};

export { submitGoogle, getGoogleUserData, getKakaoUserData, getKakaoUserDataTest };