import React from "react";
import Spinner from "./Spinner";

type Props = {
  text?: string;
  bgColor?: string;
  textColor?: string;
  width?: string;
  height?: string;
  icon?: React.ReactNode;
  type?: "outline" | "full";
  isDisabled?: boolean;
  isLoading?: boolean;
  onClickFunc: () => void;
};

const Button: React.FC<Props> = ({
  text,
  bgColor,
  textColor,
  width,
  height,
  icon,
  type,
  isDisabled,
  isLoading,
  onClickFunc,
}) => {
  return (
    <button
      className={`px-2 rounded-[5px] hover:cursor-pointer border-none flex justify-center items-center outline-none`}
      style={{
        backgroundColor:
          type === "outline"
            ? "none"
            : bgColor
            ? bgColor
            : "rgba(38, 37, 190, 1)",
        width: width ? width : "100%",
        height: height ? height : "40px",
        flexDirection: icon ? "row" : "column",
        gap: !text ? "0px" : "5px",
        border: type === "outline" ? "2px solid rgba(38,37,190,1)" : "none",
      }}
      disabled={isDisabled}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClickFunc();
      }}
    >
      {isLoading ? (
        <Spinner color={type === "outline" ? "rgb(38,37,190)" : "white"} />
      ) : (
        <>
          {icon ? icon : null}
          <span
            className={`text-[13px] font-sans`}
            style={{
              color:
                type === "outline"
                  ? "rgb(38, 37, 190)"
                  : textColor
                  ? textColor
                  : "white",
            }}
          >
            {text}
          </span>
        </>
      )}
    </button>
  );
};

export default Button;
