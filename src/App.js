/** @format */

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./components/layouts/Base";
import ReactGA from "react-ga";
import Gov from "./components/goverence/Index";
ReactGA.initialize("UA-243579396-1");
ReactGA.pageview(window.location.pathname + window.location.search);
const App = () => {
  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path='/' element={<Gov />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
};

export default App;
