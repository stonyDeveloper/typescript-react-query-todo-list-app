import { createContext } from "react";
import { useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
//   showAddTask: boolean,
//   setShowAddTask: React.Dispatch<React.SetStateAction<boolean>>

}


const DataContext = createContext({showAddTask: false, setShowAddTask: (showAddTask : boolean) => {}});

const DataProvider: React.FC<Props> = ({ children }: Props) => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <DataContext.Provider
      value={{
        showAddTask,
        setShowAddTask,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
