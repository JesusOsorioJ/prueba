import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;


export const getAllTask = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/task`);
    return response;
  } catch (error) {
    console.error("Error fetching task:", error);
    return null;
  }
};

export const createTask = async (body)=> {
  try {
    const response = await axios.post(`${baseURL}/api/task`, body);
    return response;
  } catch (error) {
    console.error("Error sending message:", error);
    return null;
  }
};

export const updateTask = async (id, body) => {
  try {
    const response = await axios.put(`${baseURL}/api/task/${id}`, body);
    return response;
  } catch (error) {
    console.error("Error sending message:", error);
    return null;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/api/task/${id}`);
    return response;
  } catch (error) {
    console.error("Error deleting task:", error);
    return null;
  }
};
