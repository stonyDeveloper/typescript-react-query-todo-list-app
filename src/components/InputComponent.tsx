import React from "react";

interface Props {
  width: string;
  height: string;
  label: string;
  placeholder: string;
  type: string
  id: string
  name: string
  onChange: any
  value: string
}

const InputComponent: React.FC<Props> = ({
  width,
  height,
  label,
  placeholder,
  type,
  id,
  name,
  value,
  onChange
}: Props) => {
  return (
    <div>
      <p>{label}</p>
      <input
        className={`${width} ${height} rounded-md px-[8px] py-[5px] text-black mt-[5px]`}
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComponent;
