import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { TaskType } from '../model'

interface Props{
    task: TaskType
}

const Task : React.FC<Props> = ({task}: Props) => {
  return (
    <div>
        <div className={`task bg-[#031A56] flex items-center justify-between px-[15px] py-[7px] rounded-2xl text-white mt-[20px] border-[5px] 
        ${task.reminder == true && 'border-[#EB06FE]'}`}>
            <div>
                <p>{task.text}</p>
                <p>{task.day}</p>
            </div>

            <div>
                <AiFillDelete />
            </div>

        </div>
    </div>
  )
}

export default Task