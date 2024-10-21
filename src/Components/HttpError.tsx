import React from "react";

import ErrorImg from "../Assets/error.jpg";
import Button from "./Button";

type Props = {
  retryFunc: () => void;
};

const HttpError: React.FC<Props> = ({ retryFunc }) => {
  return (
    <div className="w-full h-[100%] flex flex-col justify-center items-center">
      <div className="flex flex-col w-[200px] gap-3 mt-[90px]">
        <img src={ErrorImg} alt="error" className="w-[200px] h-[200px]" />
        <Button onClickFunc={retryFunc} text="retry" bgColor="red" />
      </div>
    </div>
  );
};

export default HttpError;
