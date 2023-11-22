import axios from 'axios';
import duplicatedRequestErrorMessage from '../constants/duplicatedRequestErrorMessage';
import { baseUrl } from '../constants/api';

let isGenerating = false;
async function patch<T>(path: string, data?: T) {
  if (isGenerating) {
    return Promise.reject(new Error(duplicatedRequestErrorMessage));
  }
  isGenerating = true;
  try {
    const response = await axios.patch(`${baseUrl}${path}`, data);

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  } finally {
    isGenerating = false;
  }
}
export default patch;
