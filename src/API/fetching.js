import axios from 'axios';

export const fetching = async() => {
    try {
      const response = await axios.get('https://api.coincap.io/v2/assets', {
        headers: {
          Authorization:'Bearer 21285907-55b6-4854-af1c-a655d0195b11'
        },
        params: {
          limit: 12
        }
      })
      return response.data.data
    }
    catch (error){
      throw error;
    }
  }