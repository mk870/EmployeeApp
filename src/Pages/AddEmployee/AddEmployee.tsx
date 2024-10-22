import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Page from "../../Components/Page";
import InputField from "../../Components/InputField";
import Button from "../../Components/Button";
import { postEmployee } from "../../HttpActions/Mutations";
import { toastContainerAutoCloseTime } from "../../Utils/Constants";

const AddEmployee: React.FC = () => {
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [jobtitle, setJobTitle] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [isFieldMissing, setIsFieldMissing] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAdd = () => {
    setIsFieldMissing(false);
    if (firstname && lastname && jobtitle && department) {
      setIsLoading(true);
      postEmployee({
        jobtitle,
        department,
        lastname,
        firstname,
      })
        .then((_res) => {
          toast.success("Employee Created Successfully");
          setFirstName("");
          setLastName("");
          setDepartment("");
          setJobTitle("");
        })
        .catch((_e) => {
          toast.error("Something went wrong")
          setFirstName("");
          setLastName("");
          setDepartment("");
          setJobTitle("");
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsFieldMissing(true);
    }
  };

  return (
    <Page>
      <div className="flex items-center justify-center h-full w-full">
        <div className="flex flex-col gap-2 w-[90%] mt-10 md:w-[500px] border border-gray-300 rounded-[10px] p-2">
          <div className="flex mt-4 self-center">
            <span className="font-sans font-bold text-[16px]">
              Add An Employee
            </span>
          </div>
          <InputField
            inputValue={firstname}
            setInputValue={setFirstName}
            placeHolder="firstname"
            label="First Name"
          />
          <InputField
            inputValue={lastname}
            setInputValue={setLastName}
            placeHolder="lastname"
            label="Last Name"
          />
          <InputField
            inputValue={jobtitle}
            setInputValue={setJobTitle}
            placeHolder="job title"
            label="Job Title"
          />
          <InputField
            inputValue={department}
            setInputValue={setDepartment}
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
              text="add employee"
              onClickFunc={handleAdd}
              isDisabled={isLoading}
              isLoading={isLoading}
            />
          </div>
        </div>
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

export default AddEmployee;
