import axiosInstance from "../../api/api";

export const getProject = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/projects/${id}`);
    console.log(response.data)

    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных", error);
  }
};
