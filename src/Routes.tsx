import CreateEmployee from "./Pages/CreateEmployee";
import Employee from "./Pages/Employee";
import EmployeeUpdate from "./Pages/EmployeUpdate";
import Home from "./Pages/Home";
import { IRoute } from "./Types";

export const routesList: IRoute[] = [
  { path: "/", element: <Home /> },
  { path: "/create", element: <CreateEmployee /> },
  { path: "/:id", element: <Employee /> },
  { path: "/update/:id", element: <EmployeeUpdate /> },
];
