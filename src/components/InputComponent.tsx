import React from "react";

interface Props {
  width: string;
  height: string;
  label: string;
  placeholder: string;
  type: string
}

const InputComponent: React.FC<Props> = ({
  width,
  height,
  label,
  placeholder,
  type
}: Props) => {
  return (
    <div>
      <p>{label}</p>
      <input
        className={`${width} ${height} rounded-md px-[8px] py-[5px] text-black mt-[5px]`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComponent;
