/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from "formik";
import ErrorText from "./ErrorText";

const Textarea = ({ label, name, ...rest }) => {
  return (
    <>
      <div className="submitForm__control">
        <label htmlFor={name}>{label}</label>
        <Field as="textarea" name={name} id={name} {...rest} />
        <ErrorMessage name={name} component={ErrorText} />
      </div>
    </>
  );
};

export default Textarea;
