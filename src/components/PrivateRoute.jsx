import { Navigate } from "react-router-dom";

let auth;
auth = null;
auth = true;

const PrivateRoute = ({ private: Private }) => {
  return auth ? <Private /> : <Navigate to="/login" />;
};

export default PrivateRoute;
