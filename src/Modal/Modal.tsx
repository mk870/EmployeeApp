import React from "react";
import ReactDOM from "react-dom";
import { FaQuestion } from "react-icons/fa6";
import Button from "../Components/Button";

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOkayFunc: () => void;
};

const Modal: React.FC<Props> = ({ setIsModalOpen, handleOkayFunc }) => {
  return ReactDOM.createPortal(
    <>
      <div className="flex fixed bg-modalOverlay items-center justify-center top-0 bottom-0 left-0 right-0">
        <div className="flex flex-col text-[20px] w-[265px] h-[160px] md:w-[300px] md:h-[150px] bg-white rounded-[10px] relative items-center border-[2px] border-gray-700">
          <div className="flex absolute top-[-30px] w-[60px] h-[60px] rounded-[30px] bg-gray-700 items-center justify-center">
            <FaQuestion size={24} color="white" />
          </div>
          <div className="flex mt-[30px]">
            <span className="font-sans font-bold text-[15px]">
              Are you sure you want to delete?
            </span>
          </div>
          <p className="flex flex-1 mt-2 font-sans text-[13px] text-center text-gray-500">
            This employee will be deleted permanently.
          </p>
          <div className="flex w-[90%] gap-[10px] justify-center items-center pb-2">
            <Button
              text="yes"
              onClickFunc={() => {
                handleOkayFunc();
                setIsModalOpen(false);
              }}
              bgColor="green"
            />
            <Button
              text="no"
              onClickFunc={() => setIsModalOpen(false)}
              bgColor="red"
            />
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")!
  );
};

export default Modal;
