import axios from "axios";

import { backendUrl } from "../Utils/Constants";
import { Employee } from "../Types";

export const searchEmployee = (query: string) => {
  return axios.post<Employee[]>(`${backendUrl}/search`, {
    query,
  });
};

export const postEmployee = (employee: {
  firstname: string;
  lastname: string;
  jobtitle: string;
  department: string;
}) => {
  return axios.post<{ message: string }>(`${backendUrl}/employees`, employee);
};

export const updateEmployee = (data: {
  employee: {
    firstname: string;
    lastname: string;
    jobtitle: string;
    department: string;
  };
  id: number;
}) => {
  return axios.put<{ message: string }>(
    `${backendUrl}/employees/${data.id}`,
    data.employee
  );
};

export const deleteEmployee = (id: number) => {
  return axios.delete<{ message: string }>(`${backendUrl}/employees/${id}`);
};
