import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useId } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();
  const initialValues = {
    email: "",
    password: "",
  };
  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        dispatch(logIn(values))
          .unwrap()
          .then(() => toast.success("login success"))
          .catch(() => toast.error("login error"));
        actions.resetForm();
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={emailId}>
          Email
        </label>
        <Field type="email" name="email" id={emailId} />
        <ErrorMessage name="email" component="span" />
        <label className={css.label} htmlFor={passwordId}>
          password
        </label>
        <Field type="password" name="password" id={passwordId} />
        <ErrorMessage name="password" component="span" /> <br />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}

///////////////////////////////////
