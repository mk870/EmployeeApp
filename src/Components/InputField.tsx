import React from "react";

type Props = {
  inputValue: string;
  label?: string;
  placeHolder?: string;
  onPressEnterFunc?: () => void;
  setInputValue: (e:string)=>void;
};

const InputField: React.FC<Props> = ({
  inputValue,
  label,
  placeHolder,
  onPressEnterFunc,
  setInputValue,
}) => {
  return (
    <div className="flex flex-col gap-1 w-[100%]">
      {label && <span className="font-sans text-[14px]">{label}</span>}
      <input
        className="w-[100%] h-[40px] border border-gray-500 rounded-[5px] outline-none px-2 font-sans text-[13px]"
        value={inputValue}
        placeholder={placeHolder ? placeHolder : ""}
        onKeyDown={
          onPressEnterFunc
            ? (e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") onPressEnterFunc();
              }
            : undefined
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
    </div>
  );
};

export default InputField;
