import InputComponent from "./InputComponent";
import { Checkbox } from "@chakra-ui/react";
import ButtonComponent from "./ButtonComponent";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
const AddTask = () => {
  return (
    <>
      <div>
        <InputComponent
          width={"w-full"}
          height={"h-[35px]"}
          label={"Task"}
          placeholder={"Please enter task"}
          type={"text"}
        />
      </div>
      <div className="mt-[30px]">
        <InputComponent
          width={"w-full"}
          height={"h-[35px]"}
          label={"Date & Time"}
          placeholder={"Please enter date & time"}
          type={"text"}
        />
      </div>
      <div className="mt-[30px]">
        <Checkbox>Reminder</Checkbox>
      </div>

      <div className="mt-[20px]">
        <ButtonComponent
          btnText={"Add Task"}
          width={"w-full"}
          height={"h-[30px]"}
          bgColor={"bg-[#2B77F0]"}
        />
      </div>
    </>
  );
};

export default AddTask;
