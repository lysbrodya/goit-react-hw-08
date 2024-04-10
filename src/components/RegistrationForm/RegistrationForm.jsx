import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { ErrorMessage, Field, Formik, Form } from "formik";
import toast from "react-hot-toast";
import { useId } from "react";
import * as Yup from "yup";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
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
        dispatch(register(values))
          .unwrap()
          .then(() => toast.success("Good boy"))
          .catch(() => toast.error("Error registration"));
        actions.resetForm();
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          Name
        </label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage name="name" component="span" />
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
