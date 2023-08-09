/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from "formik";
import ErrorText from "./ErrorText";

const Input = ({ label, name, ...rest }) => {
  return (
    <>
      <div className="submitForm__control">
        <label htmlFor={name}>{label}</label>
        <Field name={name} id={name} {...rest} />
      </div>
      <ErrorMessage name={name} component={ErrorText} />
    </>
  );
};

export default Input;
