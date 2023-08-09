/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from "formik";
import ErrorText from "./ErrorText";

const ImageInput = ({ name, label, ...rest }) => {
  return (
    <>
      <div className="submitForm__control">
        <label htmlFor={name}>{label}</label>
        <Field name={name} id={name} {...rest} className="submitForm__file">
          {(form, meta, value) => {
            // console.log(
            //   `* ~ file: ImageInput.jsx:12 ~ ImageInput ~ value:`,
            //   value
            // );
            // console.log(
            //   `* ~ file: ImageInput.jsx:12 ~ ImageInput ~ form:`,
            //   form
            // );
            const { setFieldValue } = form;
            return (
              <input
                name={name}
                type="file"
                onChange={(e) => setFieldValue(e.target.files[0])}
              />
            );
          }}
        </Field>
        <ErrorMessage name={name} component={ErrorText} />
      </div>
    </>
  );
};

export default ImageInput;
