import AddEmployee from "./Pages/AddEmployee/AddEmployee";
import Employee from "./Pages/Employee/Employee";
import EmployeeUpdate from "./Pages/UpdateEmployee/EmployeeUpdate";
import Home from "./Pages/Home/Home";
import { IRoute } from "./Types";

export const routesList: IRoute[] = [
  { path: "/", element: <Home /> },
  { path: "/add", element: <AddEmployee /> },
  { path: "/:id", element: <Employee /> },
  { path: "/update/:id", element: <EmployeeUpdate /> },
];
