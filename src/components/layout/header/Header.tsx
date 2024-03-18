import scss from "./header.module.scss";
import logo from "../../../assets/logo.svg";
import exit from "../../../assets/Button - Войти.png";
import select from "../../../assets/Button - Избранное.png";
import basketUrl from "../../../assets/Button - Избранное (1).png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const ExitFunc = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const favorite = () => {
    navigate("/favorite");
  };
  const basket = () => {
    navigate("/basket");
  };
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div>
            <img src={logo} alt="" />
          </div>
          <div className={scss.url}>
            <div className={scss.urlText}>
              <img
                onClick={ExitFunc}
                className={scss.photoExit}
                src={exit}
                alt=""
              />
              <p>выйти</p>
            </div>
            <img
              onClick={favorite}
              className={scss.photo}
              src={select}
              alt=""
            />
            <img
              onClick={basket}
              className={scss.photo}
              src={basketUrl}
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
