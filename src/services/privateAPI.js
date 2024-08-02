import instance from './instance';

const submitRecommandPlant = async (user_data) => {
  try {
    const response = await instance.post('/send-data', JSON.stringify(user_data));
    if (response && response.data.plants) {
      return response.data.plants;
    } else {
      return false;
    }
  } catch (error) {
    console.error('API 호출 에러:', error);
    return false;
  }
};

const getProductURL = async (productName) =>{
  try {
    const response = await instance.get(`naver/plantList?keyword=${productName}`);
    if (response && response.data && response.data[0]?.link) {
      console.log('getProductURL',response)
      return response.data[0].link
    } else {
      return false;
    }
  } catch (error) {
    console.error('API 호출 에러:', error);
    return false;
  }
}

export {submitRecommandPlant, getProductURL};