import InputComponent from "./InputComponent";
import { Checkbox } from "@chakra-ui/react";
import ButtonComponent from "./ButtonComponent";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Formik } from "formik";
import { taskSchema } from "../taskSchema";
import useAddTask from "../hooks/useAddTask";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const AddTask = () => {
  const { addTask } = useAddTask();
  const queryClient = useQueryClient();

  const addNewTask = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allTasks"] });
    },
  });

  if( addNewTask.isLoading ){
    return <span>Loading....</span>
  }

  return (
    <Formik
      initialValues={{ text: "", day: "", reminder: false, id: 0 }}
      validationSchema={taskSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values, "Values");

        addNewTask.mutate(values);
        resetForm();

        // addTask(values)
      }}
    >
      {(formik) => {
        const { touched, errors } = formik;
        return (
          <>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <InputComponent
                  width={"w-full"}
                  height={"h-[35px]"}
                  label={"Task"}
                  placeholder={"Please enter task"}
                  type={"text"}
                  id="text"
                  name="text"
                  onChange={formik.handleChange}
                  value={formik.values.text}
                />
                {touched.text && errors.text && (
                  <p className="text-red-600">{errors.text}</p>
                )}
              </div>
              <div className="mt-[30px]">
                <InputComponent
                  width={"w-full"}
                  height={"h-[35px]"}
                  label={"Date & Time"}
                  placeholder={"Please enter date & time"}
                  type={"text"}
                  id="day"
                  name="day"
                  onChange={formik.handleChange}
                  value={formik.values.day}
                />
                {touched.day && errors.day && (
                  <p className="text-red-600">{errors.day}</p>
                )}
              </div>
              <div className="mt-[30px]">
                <Checkbox
                  // value={formik.values.reminder}
                  onChange={formik.handleChange}
                  isChecked={formik.values.reminder}
                  id="reminder"
                >
                  Set Reminder?
                </Checkbox>
              </div>

              <div className="mt-[20px]">
                <ButtonComponent
                  btnText={"Add Task"}
                  width={"w-full"}
                  height={"h-[30px]"}
                  bgColor={"bg-[#2B77F0]"}
                />
              </div>
            </form>
          </>
        );
      }}
    </Formik>
  );
};

export default AddTask;
