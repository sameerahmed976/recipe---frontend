/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from "formik";
import ErrorText from "./ErrorText";

const Select = ({ name, label, options, ...rest }) => {
  return (
    <>
      <div className="submitForm__control">
        <label htmlFor={name}>{label}</label>
        <Field
          as="select"
          name={name}
          id={name}
          {...rest}
          className="submitForm__select"
        >
          {options.map((item) => {
            // console.log(item);
            return (
              <option key={item.value} value={item.value}>
                {item.key}
              </option>
            );
          })}
        </Field>
        <ErrorMessage name={name} component={ErrorText} />
      </div>
    </>
  );
};

export default Select;
