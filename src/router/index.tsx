import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppShell from "../components/AppShell";
import Home from "../pages/home";
import { DataProvider } from "../context/DataContext";

const Router = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Home />
      </DataProvider>
    </BrowserRouter>
  );
};

export default Router;
