import { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Private {
  children: ReactNode;
}

const PrivateReduxProvider: FC<Private> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const findUser = localStorage.getItem("isAuth");
  const isAuth = !!findUser;

  useEffect(() => {
    if (isAuth && pathname === "/login") {
      navigate("/");
    } else if (!isAuth && pathname === "/") {
      navigate("login");
    } else if (isAuth && pathname === "/registration") {
      navigate("/");
    }
  }, [pathname]);
  return children;
};

export default PrivateReduxProvider;
