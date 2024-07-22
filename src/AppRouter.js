import React from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import App from "./App";

function AppRouter() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={App} />
          <Route path="/create" />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default AppRouter;
