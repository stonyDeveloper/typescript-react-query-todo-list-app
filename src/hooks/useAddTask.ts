import { api } from "../api";
import { TaskType } from "../model";

const useAddTask = () => {
  const addTask = async (task: TaskType) => {
    try {
      const res = await api.post("/tasks", task);
      console.log(res);

      return res;
    } catch (error) {
      console.log(error);
    }
  };
  return { addTask };
};

export default useAddTask;
