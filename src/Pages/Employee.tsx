import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

import Page from "../Components/Page";
import profilePic from "../Assets/profile.jpg";
import { Employee as EmployeeType } from "../Types";
import Button from "../Components/Button";

const Employee: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const employee: EmployeeType = {
    id: 1,
    firstName: "Mkhululi",
    lastName: "Ndlovu",
    jobTitle: "Softaware",
    department: "technology",
  };
  const handleUpdate = (employeeId: number) => {
    navigate(`/update/${employeeId}`);
  };
  const handleDelete = (employeeId: number) => {
    console.log(`/update/${employeeId}`);
  };
  return (
    <Page>
      <div className="flex flex-col gap-3 w-full p-3 items-center md:items-start">
        <div className="flex flex-col gap-3 justify-center items-center">
          <img
            src={profilePic}
            alt="profile"
            className="w-[200px] h-[200px] rounded-[100px]"
          />
          <div className="flex">
            <span className="font-sans text-primaryColor font-bold text-[15px]">{`${employee.firstName} ${employee.lastName}`}</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <div className="flex gap-9">
            <span className="font-sans font-bold text-[14px]">Job Title:</span>
            <span className="font-sans text-gray-500 text-[14px]">
              {employee.jobTitle}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="font-sans font-bold text-[14px]">Department:</span>
            <span className="font-sans text-gray-500 text-[14px]">
              {employee.department}
            </span>
          </div>
          <div className="flex gap-1 flex-col md:flex-row md:gap-3">
            <span className="font-sans font-bold text-[14px]">
              Description:
            </span>
            <span className="font-sans text-gray-500 text-[14px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae optio accusamus fugiat iusto ducimus eius
              exercitationem fuga ipsam hic mollitia tempora unde reiciendis
              voluptate natus maxime debitis molestiae velit necessitatibus ab
              sed quibusdam ipsum quasi, porro repellat. Ipsum et, repellendus
              corrupti dolore eos sed necessitatibus, illo doloremque,
              reiciendis maiores pariatur! optio accusamus fugiat iusto ducimus
              eius exercitationem fuga ipsam hic mollitia tempora unde
              reiciendis voluptate natus maxime debitis molestiae velit
              necessitatibus ab sed quibusdam ipsum quasi, porro repellat. Ipsum
              et, repellendus corrupti dolore eos sed necessitatibus, illo
              doloremque, reiciendis maiores pariatur!
            </span>
          </div>
        </div>
        <div className="flex gap-3 w-[100%] md:w-[500px] md:ml-24">
          <Button onClickFunc={() => handleUpdate(Number(id))} text="update" />
          <Button
            onClickFunc={() => handleDelete(Number(id))}
            bgColor="red"
            text="delete"
            icon={<FaRegTrashAlt color={"white"} size={18} />}
          />
        </div>
      </div>
    </Page>
  );
};

export default Employee;
