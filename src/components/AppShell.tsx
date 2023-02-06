import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

interface Props {
  children: JSX.Element;
}

const AppShell: React.FC<Props> = ({ children }: Props) => {
  const { setShowAddTask, showAddTask } = useContext(DataContext);
  const toggleDropdown = () => {
    // if (showAddTask === true) {
    //   setShowAddTask(false);
    // } else if (showAddTask === false) {
    //   setShowAddTask(true)
    // }
    // console.log(!showAddTask);
    setShowAddTask(!showAddTask)
  };
  return (
    <div className="bg-[#98B5FF] min-h-screen">
      <Flex justify={"center"} paddingTop={"80px"}>
        <Card
          rounded={"30px"}
          bg={"rgb(52,79,161)"}
          padding={"10px"}
          textColor={"white"}
          minW={"400px"}
          shadow={"lg"}
        >
          <CardHeader
            className="justify-between"
            paddingTop={"50px"}
            display={"flex"}
            alignItems={"center"}
          >
            <Heading textColor={"white"}>Task Tracker</Heading>
            <div
              className="bg-[#EB06FE] w-[50px] h-[50px] grid place-items-center rounded-full text-[20px] font-thin cursor-pointer transition ease-in-out delay-150 animate-pulse"
              onClick={toggleDropdown}
            >
              {showAddTask ? <div className=""><CloseIcon /></div> : <div><AddIcon /></div>}
            </div>
          </CardHeader>
          <CardBody>{children}</CardBody>
          <CardFooter>
            <Text marginRight={"7px"}>Copyright @2023</Text>
            <Text>About</Text>
          </CardFooter>
        </Card>
      </Flex>
    </div>
  );
};

export default AppShell;
