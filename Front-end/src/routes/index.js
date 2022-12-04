//Layouts
import { Route, Routes } from "react-router-dom";
import DashboardEmp from "~/pages/DashboardEmp";

import LoginEmp from "~/pages/LoginEmp";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "~/pages/Dashboard";
import MovieTypePage from "~/pages/MovieTypePage";
import CastPage from "~/pages/CastPage";
import DetailFilmPage from "~/pages/DetailFilmPage";
import DetailFilm from "~/components/DetailFilm";

// Public routes

// Private routes

const CreateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="movietypePage" element={<MovieTypePage />} />
      <Route path="castpage" element={<CastPage />} />
      <Route path="detailfilm/:id" element={<DetailFilmPage />} />
      <Route path="employee" element={<LoginEmp />} />
      <Route element={<ProtectedRoute />}>
        <Route path="employee/dashboard" element={<DashboardEmp />} />
      </Route>

      {/* <Route path="" element={<LoginEmp />} /> */}
    </Routes>
  );
};

export default CreateRoutes;
