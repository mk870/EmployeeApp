/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import Page from "../../Components/Page";
import profilePic from "../../Assets/profile.jpg";
import { Employee as EmployeeType } from "../../Types";
import Button from "../../Components/Button";
import { getEmployee } from "../../HttpActions/Queries";
import HttpError from "../../Components/HttpError";
import Loader from "./Loader/Loader";
import { deleteEmployee } from "../../HttpActions/Mutations";
import { toastContainerAutoCloseTime } from "../../Utils/Constants";

const Employee: React.FC = () => {
  const [employee, setEmployee] = useState<EmployeeType | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [isEmployeeLoading, setIsEmployeeLoading] = useState<boolean>(true);
  const [isDeleteEmployeeLoading, setIsDeleteEmployeeLoading] =
    useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleUpdate = (employeeId: number) => {
    navigate(`/update/${employeeId}`);
  };

  const handleDelete = () => {
    setIsDeleteEmployeeLoading(true);
    deleteEmployee(Number(id))
      .then((_res) => {
        navigate("/");
      })
      .catch((_e) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsDeleteEmployeeLoading(false);
      });
  };

  const fetchEmployee = () => {
    setError(false);
    getEmployee(Number(id))
      .then((res) => {
        setEmployee(res.data.employee);
      })
      .catch((_e) => {
        setError(false);
      })
      .finally(() => setIsEmployeeLoading(false));
  };

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  return (
    <Page>
      <div className="flex flex-col gap-3 w-full p-3 items-center md:items-start">
        {error && <HttpError retryFunc={fetchEmployee} />}
        {isEmployeeLoading && <Loader />}
        {employee && (
          <>
            <div className="flex flex-col gap-3 justify-center items-center">
              <img
                src={profilePic}
                alt="profile"
                className="w-[200px] h-[200px] rounded-[100px]"
              />
              <div className="flex">
                <span className="font-sans text-primaryColor font-bold text-[15px]">{`${employee.firstname} ${employee.lastname}`}</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 justify-center">
              <div className="flex gap-9">
                <span className="font-sans font-bold text-[14px]">
                  Job Title:
                </span>
                <span className="font-sans text-gray-500 text-[14px]">
                  {employee.jobtitle}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-sans font-bold text-[14px]">
                  Department:
                </span>
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
                  voluptate natus maxime debitis molestiae velit necessitatibus
                  ab sed quibusdam ipsum quasi, porro repellat. Ipsum et,
                  repellendus corrupti dolore eos sed necessitatibus, illo
                  doloremque, reiciendis maiores pariatur! optio accusamus
                  fugiat iusto ducimus eius exercitationem fuga ipsam hic
                  mollitia tempora unde reiciendis voluptate natus maxime
                  debitis molestiae velit necessitatibus ab sed quibusdam ipsum
                  quasi, porro repellat. Ipsum et, repellendus corrupti dolore
                  eos sed necessitatibus, illo doloremque, reiciendis maiores
                  pariatur!
                </span>
              </div>
            </div>
            <div className="flex gap-3 w-[100%] md:w-[500px] md:ml-24">
              <Button
                onClickFunc={() => handleUpdate(Number(id))}
                text="update"
                isDisabled={isDeleteEmployeeLoading}
              />
              <Button
                onClickFunc={() => handleDelete()}
                bgColor="red"
                text="delete"
                icon={<FaRegTrashAlt color={"white"} size={18} />}
                isLoading={isDeleteEmployeeLoading}
                isDisabled={isEmployeeLoading || isDeleteEmployeeLoading}
              />
            </div>
          </>
        )}
      </div>
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
    </Page>
  );
};

export default Employee;
