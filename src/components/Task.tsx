import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const Task = () => {
  return (
    <div>
        <div className='task bg-[#031A56] flex items-center justify-between px-[15px] py-[7px] rounded-2xl'>
            <div>
                <p>Task</p>
                <p>Day & Date</p>
            </div>

            <div>
                <AiFillDelete />
            </div>

        </div>
    </div>
  )
}

export default Task