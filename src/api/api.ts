import axios from 'axios';

export const searchProducts = async (query: string): Promise<any[]> => {
  try {
    const response = await axios.post('http://localhost:5000/categories/search', {
      query,
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при запросе к API:', error);
    throw error;
  }
};