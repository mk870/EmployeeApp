import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineBadge } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Employee } from "../Types";
import Button from "./Button";

type Props = {
  employee: Employee;
};

const EmployeeCard: React.FC<Props> = ({ employee }) => {
  const iconSize = 24;
  const iconColor = "#9ca3af";
  const navigate = useNavigate();
  const handleUpdate = (employeeId: number) => {
    navigate(`/update/${employeeId}`);
  };
  const handleDelete = (employeeId: number) => {
    console.log(`/update/${employeeId}`);
  };
  const handleView = (employeeId: number) => {
    navigate(`/${employeeId}`);
  };
  return (
    <div
      onClick={() => handleView(employee.id)}
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
              {employee.firstName}
            </span>
            <span className="font-sans text-[13px] text-gray-500 text-nowrap text-ellipsis overflow-hidden">
              {employee.lastName}
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
            {employee.jobTitle}
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
            {employee.department}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Button
          text="update"
          onClickFunc={() => handleUpdate(employee.id)}
          type="outline"
        />
        <Button
          text="delete"
          icon={<FaRegTrashAlt color={"white"} size={18} />}
          onClickFunc={() => handleDelete(employee.id)}
          bgColor="red"
        />
      </div>
    </div>
  );
};

export default EmployeeCard;
