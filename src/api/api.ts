import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});


export const searchProducts = async (keywords: string[]): Promise<any[]> => {
  try {
    const response = await apiClient.post("/search", { keywords });
    return response.data;
  } catch (error: any) {
    console.error("Ошибка поиска:", error.message);
    throw new Error("Не удалось выполнить поиск товаров.");
  }
};