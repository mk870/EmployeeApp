import axios from "axios";
import { backendUrl } from "../Utils/Constants";
import { Employee } from "../Types";

export const getAllEmployees = ()=>{
  return axios.get<Employee[]>(`${backendUrl}/employees`)
}

export const getEmployee = (id: number)=>{
  return axios.get<{employee:Employee}>(`${backendUrl}/employees/${id}`)
}