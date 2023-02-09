import React from "react";
import { api } from "../api";
import { TaskType } from "../model";

const useDeleteTask = () => {
  const deleteTask = async (id: TaskType["id"]) => {
    try {
      const res = await api.delete(`/tasks/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error, "Delete Error");
      return error;
    }
  };

  return { deleteTask };
};

export default useDeleteTask;
