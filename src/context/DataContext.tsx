import { createContext } from "react";
import { useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const DataContext = createContext({});

const DataProvider: React.FC<Props> = ({ children }: Props) => {
  const [showAddTask, setShowAddTask] = useState<boolean>(false);

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
