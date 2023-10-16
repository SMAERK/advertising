import axios from "axios";
const BASE_TS_URL = import.meta.env.VITE_API_BASE_URL_TS_LOCAL


  export const chatBox = async (body) => {
    try {
      const { data } = await axios.post(`${BASE_TS_URL}/create/pdf`,body, {
        responseType: 'arraybuffer'
      });
      return data;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };