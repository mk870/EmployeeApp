import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import InputField from "../../Components/InputField";
import Button from "../../Components/Button";
import Page from "../../Components/Page";
import EmployeeCard from "../../Components/EmployeeCard";
import { Employee } from "../../Types";
import SkeletonLoaderCard from "./Loader/SkeletonLoaderCard";
import HttpError from "../../Components/HttpError";
import EmptyEmployeeList from "./EmptyEmployeeList/EmptyEmployeeList";
import { getAllEmployees } from "../../HttpActions/Queries";
import { searchEmployee } from "../../HttpActions/Mutations";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [employees, setEmployees] = useState<Employee[] | null>(null);
  const [error, setError] = useState<"" | "searchError" | "employeesError">("");
  const [employeesLoading, setEmployeesLoading] = useState<boolean>(true);
  const [searchQueryLoading, setSearchQueryLoading] = useState<boolean>(false);
  const loadingcards = [1, 2, 3, 4, 5];
  const navigate = useNavigate();

  const fetchEmployees = () => {
    setError("");
    getAllEmployees()
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((_e) => {
        setError("employeesError");
      })
      .finally(() => setEmployeesLoading(false));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleCreateEmployee = () => {
    navigate("/add");
  };

  const handleSearch = () => {
    if (searchQuery) {
      setError("");
      setSearchQueryLoading(true);
      searchEmployee(searchQuery)
        .then((res) => {
          setSearchQuery("");
          setEmployees(res.data);
        })
        .catch((_e) => {
          setError("searchError");
        })
        .finally(() => setSearchQueryLoading(false));
    }
  };

  const isLoading = () => {
    if (searchQueryLoading || employeesLoading) return true;
    else return false;
  };

  return (
    <Page>
      <div className="flex flex-col-reverse md:flex-row justify-center w-[100%] self-center items-center max-w-[500px] px-2 gap-2 pt-2">
        <div className="flex w-[90%] md:w-[150px]">
          <Button
            text="add employee"
            onClickFunc={handleCreateEmployee}
            isDisabled={isLoading()}
          />
        </div>
        <div className="flex flex-row gap-2 items-center w-[100%]">
          <InputField
            inputValue={searchQuery}
            setInputValue={setSearchQuery}
            placeHolder="search by name, department, job title"
            onPressEnterFunc={handleSearch}
          />
          <Button
            onClickFunc={handleSearch}
            width="60px"
            icon={<BsSearch color="white" size={18} />}
            isDisabled={isLoading()}
            isLoading={searchQueryLoading}
          />
        </div>
      </div>
      <div className="flex gap-2 flex-wrap mt-4 px-2 justify-center md:justify-start mb-2">
        {isLoading() &&
          loadingcards.map((card) => <SkeletonLoaderCard key={card} />)}
        {employees &&
          employees.length > 0 &&
          employees.map((employee: Employee) => (
            <EmployeeCard key={employee.id} employee={employee} refetchEmployeesFunc={fetchEmployees}/>
          ))}
        {employees && employees.length === 0 && <EmptyEmployeeList />}
        {error && (
          <HttpError
            retryFunc={error === "employeesError" ? fetchEmployees : handleSearch}
          />
        )}
      </div>
    </Page>
  );
};

export default Home;
