import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";

import InputField from "../Components/InputField";
import Button from "../Components/Button";
import Page from "../Components/Page";
import EmployeeCard from "../Components/EmployeeCard";
import { Employee } from "../Types";

const Home: React.FC = () => {
  const [searchEmployee, setSearchEmployee] = useState<string>("");
  const navigate = useNavigate();
  const employees:Employee[] = [
    {
      id:1,
      firstName:"Mkhululi Perfect Targaryen",
      lastName:"Ndlovu",
      jobTitle:"Software Engineer",
      department:"Technology"
    },
    {
      id:2,
      firstName:"Mkhululi",
      lastName:"Ndlovu",
      jobTitle:"Software Engineer",
      department:"Technology"
    },
    {
      id:3,
      firstName:"Mkhululi",
      lastName:"Ndlovu",
      jobTitle:"Software Engineer and devops architurer",
      department:"Technology"
    },
    {
      id:4,
      firstName:"Mkhululi",
      lastName:"Ndlovu",
      jobTitle:"Software Engineer",
      department:"Technology"
    },
    {
      id:5,
      firstName:"Mkhululi",
      lastName:"Ndlovu",
      jobTitle:"Software Engineer",
      department:"Technology"
    },
    {
      id:6,
      firstName:"Mkhululi",
      lastName:"Ndlovu",
      jobTitle:"Software Engineer",
      department:"Technology"
    },
  ]
  const handleCreateEmployee = () => {
    navigate("/create");
  };

  const handleSearch = () => {};

  return (
    <Page>
      <div className="flex flex-row justify-center w-[100%] self-center items-center max-w-[500px] px-2 gap-2 pt-2">
        <Button
          text="create"
          onClickFunc={handleCreateEmployee}
          width="80px"
          // icon={<LuPlus color="white" size={18} />}
        />
        <div className="flex flex-row gap-2 items-center w-[100%]">
          <InputField
            inputValue={searchEmployee}
            setInputValue={setSearchEmployee}
            placeHolder="search by name, department, job title"
          />
          <Button
            onClickFunc={handleSearch}
            width="60px"
            icon={<BsSearch color="white" size={18} />}
          />
        </div>
      </div>
      <div className="flex gap-2 flex-wrap mt-4 px-2">
        {employees.map((employee:Employee)=>(
          <EmployeeCard key={employee.id} employee={employee}/>
        ))}
      </div>
    </Page>
  );
};

export default Home;
