import instance from './instance';

const submitRecommandPlant = async (user_data) => {
  
  try {
    const response = await instance.post('/send-data', JSON.stringify(user_data));
    if (response && response.data) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error('API 호출 에러:', error);
    return false;
  }
};

export default submitRecommandPlant;