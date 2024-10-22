/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../Components/Button";
import InputField from "../../Components/InputField";
import Page from "../../Components/Page";
import { updateEmployee } from "../../HttpActions/Mutations";
import { getEmployee } from "../../HttpActions/Queries";
import { Employee } from "../../Types";
import HttpError from "../../Components/HttpError";
import Loader from "./Loader/Loader";
import { toastContainerAutoCloseTime } from "../../Utils/Constants";

const EmployeeUpdate: React.FC = () => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [employeeIsLoading, setEmployeeIsLoading] = useState<boolean>(true);
  const [updateEmployeeIsLoading, setUpdateEmployeeIsLoading] =
    useState<boolean>(false);
  const [isFieldMissing, setIsFieldMissing] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchEmployee = () => {
    setError(false);
    setEmployeeIsLoading(true)
    getEmployee(Number(id))
      .then((res) => {
        setEmployee(res.data.employee);
      })
      .catch((_e) => {
        setError(true);
      })
      .finally(() => setEmployeeIsLoading(false));
  };

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  const handleUpdate = () => {
    setIsFieldMissing(false);
    if (employee) {
      if (
        employee.firstname &&
        employee.lastname &&
        employee.jobtitle &&
        employee.department
      ) {
        setUpdateEmployeeIsLoading(true);
        updateEmployee({
          id: Number(id),
          employee,
        })
          .then((_res) => {
            toast.success("Employee Updated Successfully");
            setEmployee({
              firstname: "",
              lastname: "",
              department: "",
              jobtitle: "",
            });
            setTimeout(() => {
              navigate("/");
            }, toastContainerAutoCloseTime);
          })
          .catch((_e) => {
            toast.error("Something went wrong");
            setEmployee({
              firstname: "",
              lastname: "",
              department: "",
              jobtitle: "",
            });
            setTimeout(() => {
              navigate("/");
            }, toastContainerAutoCloseTime);
          })
          .finally(() => setUpdateEmployeeIsLoading(false));
      } else {
        setIsFieldMissing(true);
      }
    }
  };

  return (
    <Page>
      <div className="flex items-center justify-center h-full w-full">
        {error  && (
          <HttpError retryFunc={() => getEmployee(Number(id))} />
        )}
        {employeeIsLoading && <Loader />}
        {employee && (
          <div className="flex flex-col gap-2 w-[90%] mt-10 md:w-[500px] border border-gray-300 rounded-[10px] p-2">
            <div className="flex mt-4 self-center">
              <span className="font-sans font-bold text-[16px]">
                Update Employee
              </span>
            </div>
            <InputField
              inputValue={employee.firstname}
              setInputValue={(e: string) => {
                setEmployee({
                  ...employee,
                  firstname: e,
                });
              }}
              placeHolder="firstname"
              label="First Name"
            />
            <InputField
              inputValue={employee.lastname}
              setInputValue={(e: string) => {
                setEmployee({
                  ...employee,
                  lastname: e,
                });
              }}
              placeHolder="lastname"
              label="Last Name"
            />
            <InputField
              inputValue={employee.jobtitle}
              setInputValue={(e: string) => {
                setEmployee({
                  ...employee,
                  jobtitle: e,
                });
              }}
              placeHolder="job title"
              label="Job Title"
            />
            <InputField
              inputValue={employee.department}
              setInputValue={(e: string) => {
                setEmployee({
                  ...employee,
                  department: e,
                });
              }}
              placeHolder="department"
              label="Department"
            />
            {isFieldMissing && (
              <span className="font-sans text-red-600 text-[12px]">
                All fields are required, please fill in the missing fields.
              </span>
            )}
            <div className="flex mt-2">
              <Button
                text="update"
                onClickFunc={handleUpdate}
                isDisabled={updateEmployeeIsLoading}
                isLoading={updateEmployeeIsLoading}
              />
            </div>
          </div>
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

export default EmployeeUpdate;
