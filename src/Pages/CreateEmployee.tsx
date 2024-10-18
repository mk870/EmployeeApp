import React, { useState } from "react";
import Page from "../Components/Page";
import InputField from "../Components/InputField";
import Button from "../Components/Button";

const CreateEmployee: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [isFieldMissing, setIsFieldMissing] = useState<boolean>(false);
  const handleAdd = () => {
    if (firstName && lastName && jobTitle && department) {
      console.log({
        firstName,
        lastName,
        jobTitle,
        department,
      });
      setIsFieldMissing(false);
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
            inputValue={firstName}
            setInputValue={setFirstName}
            placeHolder="firstname"
            label="First Name"
          />
          <InputField
            inputValue={lastName}
            setInputValue={setLastName}
            placeHolder="lastname"
            label="Last Name"
          />
          <InputField
            inputValue={jobTitle}
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
              All fields are required, please fill in the missing field.
            </span>
          )}
          <div className="flex mt-2">
            <Button text="add" onClickFunc={handleAdd} />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default CreateEmployee;
