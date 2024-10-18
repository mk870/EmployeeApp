export type IRoute = {
  path: string;
  element: JSX.Element;
};

export type IInputFieldType =
  | "search"
  | "firstname"
  | "lastname"
  | "department";

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  jobTitle: string;
};
