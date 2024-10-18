import React from "react";


type Props = {
  inputValue: string;
  label?: string;
  placeHolder?:string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const InputField: React.FC<Props> = ({
  inputValue,
  label,
  placeHolder,
  setInputValue,
}) => {
  return (
    <div className="flex flex-col gap-1 w-[100%]">
      {label && <span className="font-sans text-[14px]">{label}</span>}
      <input
        className="w-[100%] h-[40px] border border-gray-500 rounded-[5px] outline-none px-2 font-sans text-[13px]"
        value={inputValue}
        placeholder={placeHolder?placeHolder:""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
    </div>
  );
};

export default InputField;