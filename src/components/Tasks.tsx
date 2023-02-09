import React from "react";
import Task from "./Task";
import { useQuery } from "@tanstack/react-query";
import useFetchAllTasks from "../hooks/useFetchAllTasks";
import { TaskType } from "../model";

const Tasks: React.FC = () => {
  const { fetchTasks } = useFetchAllTasks();
  const {
    error,
    data,
    isFetching,
    status,
  } = useQuery({
    queryKey: ["allTasks"],
    queryFn: fetchTasks,
  });

  if (status === "loading") {
    return <span>Loading....</span>;
  }

  if (status === "error") {
    return <span>Error</span>;
  }

  return (
    <div className="mt-[20px]">
      {data &&
        data.map((task: TaskType, index: number) => (
          <Task key={index} task={task} />
        ))}
    </div>
  );
};

export default Tasks;
