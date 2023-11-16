import axios from 'axios';
import duplicatedRequestErrorMessage from '../constants/duplicatedRequestErrorMessage';
import { baseUrl } from '../constants/api';

let isGenerating = false;
async function get(path: string) {
  if (isGenerating) {
    return Promise.reject(new Error(duplicatedRequestErrorMessage));
  }
  isGenerating = true;
  try {
    const response = await axios.get(`${baseUrl}${path}`);

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  } finally {
    isGenerating = false;
  }
}
export default get;
