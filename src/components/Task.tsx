import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { TaskType } from "../model";
import useDeleteTask from "../hooks/useDeleteTask";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import useFetchAllTasks from "../hooks/useFetchAllTasks";

interface Props {
  task: TaskType;
}

const Task: React.FC<Props> = ({ task }: Props) => {
  const { fetchTasks } = useFetchAllTasks();
  const { deleteTask } = useDeleteTask();
  const queryClient = useQueryClient();
  const { refetch } = useQuery({
    queryKey: ["allTasks"],
    queryFn: fetchTasks,
  });

  const deleteATask = useMutation({
    mutationFn: deleteTask,
    onSuccess: (data) => {
      console.log(data, "Mutated Data");
      refetch()
    },
  });

  if (deleteATask.isLoading) {
    return <span>Deleting...</span>;
  }

  return (
    <div>
      <div
        className={`task bg-[#031A56] flex items-center justify-between px-[15px] py-[7px] rounded-2xl text-white mt-[20px] border-[5px] 
        ${task.reminder == true && "border-[#EB06FE]"}`}
      >
        <div>
          <p>{task.text}</p>
          <p>{task.day}</p>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => deleteATask.mutate(task.id)}
        >
          <AiFillDelete />
        </div>
      </div>
    </div>
  );
};

export default Task;
