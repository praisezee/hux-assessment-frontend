import { useLocation, Navigate, Outlet } from "react-router-dom";
import useMainContext from "../hooks/useMainContext";

const RequireAuth = () =>
{
  const { auth } = useMainContext()
  const location = useLocation()
  return (
    auth?.id
      ?<Outlet />
      :
      <Navigate
        to='/'
        state={ { from: location } }
        replace
      />
  )
};

export default RequireAuth
