import React from "react";
import AddTask from "../components/AddTask";
import AppShell from "../components/AppShell";
import InputComponent from "../components/InputComponent";
import Tasks from "../components/Tasks";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";



const Home: React.FC = () => {
  const {showAddTask}  = useContext(DataContext);
  console.log(showAddTask, "ShowAddTask");
  return (
    <>
      <AppShell
        children={
          <>
          {showAddTask && <AddTask />}
            <Tasks />
          </>
        }
      />
    </>
  );
};

export default Home;
