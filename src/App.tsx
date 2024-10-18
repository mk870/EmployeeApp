import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { IRoute } from "./Types";
import { routesList } from "./Routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesList.map((route: IRoute) => (
          <Route key={route.path} element={route.element} path={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
