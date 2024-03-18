import scss from "./loginPage.module.scss";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import { useLoginMutation } from "../../../redux/api/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema: validationRegistr,
    onSubmit: async (values) => {
      const findUser = {
        email: values.email,
        password: values.password,
      };
      const response = await login(findUser);
      if ("data" in response) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("isAuth", "true");
        navigate("/");
      }
    },
  });
  const SignUp = () => {
    navigate("/registration");
  };

  return (
    <div className={scss.LoginPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.Inputs}>
            <TextField
              label="email"
              variant="standard"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <>
                <p className={scss.text}>{formik.errors.password}</p>
              </>
            ) : null}
            <TextField
              label="password"
              variant="standard"
              type="text"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <Button variant="text" onClick={() => formik.handleSubmit()}>
              далее
            </Button>
            <Button variant="text" onClick={() => SignUp()}>
              зарегистрироваться
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
