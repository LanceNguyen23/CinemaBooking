import { useSelector } from "react-redux";
import { sectionSelector } from "./../store/selectors";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let isLoggedIn = useSelector(sectionSelector);
  return isLoggedIn ? <Outlet /> : <Navigate to="/employee" />;
};

export default ProtectedRoute;
