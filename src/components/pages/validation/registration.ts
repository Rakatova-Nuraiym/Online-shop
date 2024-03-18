import * as Yup from "yup";

export const validationRegistr = Yup.object({
  userName: Yup.string().required("this part so important"),
  email: Yup.string()
    .email("you should write @gmail.com")
    .required("this part so   important"),
  password: Yup.string().required("this part so important"),
});
