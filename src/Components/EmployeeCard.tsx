import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineBadge } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import { Employee } from "../Types";
import Button from "./Button";
import Modal from "../Modal/Modal";
import { deleteEmployee } from "../HttpActions/Mutations";
import { toastContainerAutoCloseTime } from "../Utils/Constants";

type Props = {
  employee: Employee;
  refetchEmployeesFunc: () => void;
};

const EmployeeCard: React.FC<Props> = ({
  employee: { firstname, lastname, department, id, jobtitle },
  refetchEmployeesFunc,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const iconSize = 24;
  const iconColor = "#9ca3af";
  const navigate = useNavigate();
  
  const handleUpdate = (employeeId: number) => {
    navigate(`/update/${employeeId}`);
  };

  const handleDelete = (employeeId: number) => {
    setIsLoading(true);
    deleteEmployee(employeeId)
      .then((_res) => {
        refetchEmployeesFunc();
      })
      .catch((_e) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleView = (employeeId: number) => {
    navigate(`/${employeeId}`);
  };
  return (
    <div
      onClick={() => handleView(id ? id : 0)}
      className="flex flex-col w-[250px] border border-gray-300 rounded-[5px] gap-2 p-1 hover:cursor-pointer hover:bg-gray-50"
    >
      <div className="flex flex-col">
        <span className="font-sans font-bold text-primaryColor text-[13px]">
          Name:
        </span>
        <div className="flex gap-2 items-end">
          <div className="flex">
            <IoPersonOutline size={iconSize} color={iconColor} />
          </div>
          <div className="flex gap-1 items-center text-nowrap text-ellipsis overflow-hidden">
            <span className="font-sans text-[13px] text-gray-500 text-nowrap text-ellipsis overflow-hidden">
              {`${firstname} ${lastname}`}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-sans font-bold text-primaryColor text-[13px]">
          Job Title:
        </span>
        <div className="flex gap-2 items-end">
          <div className="flex">
            <MdOutlineBadge size={iconSize} color={iconColor} />
          </div>
          <span className="font-sans text-[13px] text-gray-500 text-nowrap text-ellipsis overflow-hidden">
            {jobtitle}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[2px]">
        <span className="font-sans font-bold text-primaryColor text-[13px]">
          Department:
        </span>
        <div className="flex gap-2 items-end">
          <div className="flex">
            <FaRegBuilding size={iconSize} color={iconColor} />
          </div>
          <span className="font-sans text-[13px] text-gray-500 text-nowrap text-ellipsis overflow-hidden">
            {department}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Button
          text="update"
          onClickFunc={() => handleUpdate(id ? id : 0)}
          type="outline"
          isDisabled={isLoading}
        />
        <Button
          text="delete"
          icon={<FaRegTrashAlt color={"white"} size={18} />}
          onClickFunc={() => setIsModalOpen(true)}
          bgColor="red"
          isDisabled={isLoading}
          isLoading={isLoading}
        />
      </div>
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          handleOkayFunc={() => handleDelete(id ? id : 0)}
        />
      )}
      <ToastContainer
        position="top-right"
        autoClose={toastContainerAutoCloseTime}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default EmployeeCard;
