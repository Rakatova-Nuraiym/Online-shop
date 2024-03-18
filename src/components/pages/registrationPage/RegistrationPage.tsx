import { useFormik } from "formik";
import scss from "./registration.module.scss";

import { TextField } from "@mui/material";
import { validationRegistr } from "../validation/registration";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "../../../redux/api/auth";

const RegistrationPage = () => {
  const [registration] = useRegistrationMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: validationRegistr,
    onSubmit: async (values) => {
      const newUser = {
        userName: values.userName,
        email: values.email,
        password: values.password,
      };
      await registration(newUser);
      navigate("/login");
    },
  });

  const SignUp = () => {
    navigate("/login");
  };
  return (
    <div className={scss.RegistrationPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.inputs}>
            <h1>Registration page</h1>
            {formik.touched.userName && formik.errors.userName ? (
              <>
                <p className={scss.text}>{formik.errors.userName}</p>
              </>
            ) : null}
            <TextField
              id="userName"
              label="userName"
              variant="standard"
              value={formik.values.userName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <>
                <p className={scss.text}>{formik.errors.email}</p>
              </>
            ) : null}

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
              add user
            </Button>
            <Button variant="text" onClick={() => SignUp()}>
              уже есть аккаунт
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
