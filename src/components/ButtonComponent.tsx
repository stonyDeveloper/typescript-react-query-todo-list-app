import React from 'react'

interface Props{
    btnText: string
    width: string
    height: string
    bgColor: string
}

const ButtonComponent: React.FC<Props> = ({btnText, width, height, bgColor} : Props) => {
  return (
    <div>
        <button className={`${width} ${height} ${bgColor} rounded-md`}>{btnText}</button>
    </div>
  )
}

export default ButtonComponent