import React from "react";

import employeeImage from "../../../Assets/employees.png";

const EmptyEmployeeList: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col gap-3 mt-[60px] items-center">
        <img
          src={employeeImage}
          alt="empty_list"
          className="w-[250px] h-[200px]"
        />
        <p className="font-sans text-[13px] text-gray-500">
          No employees available
        </p>
      </div>
    </div>
  );
};

export default EmptyEmployeeList;
