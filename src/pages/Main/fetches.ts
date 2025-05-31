import axiosInstance from "../../api/api";

export const getProjects = async () => {
  try {
    const response = await axiosInstance.get("/projects");
     console.log(response.data)

    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных", error);
  }
};
