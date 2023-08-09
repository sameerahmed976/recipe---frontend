/* eslint-disable react/prop-types */
import { ErrorMessage, Field, FieldArray } from "formik";
import ErrorText from "./ErrorText";

const IngredientsList = ({ label, name, ...rest }) => {
  return (
    <>
      <div className="submitForm__control">
        <label htmlFor={name}>{label}</label>
        {/* <Field name={name} id={name} {...rest} /> */}
        <FieldArray name={name}>
          {(props) => {
            const {
              push,
              remove,
              form: { values },
            } = props;
            const { ingredients } = values;

            return (
              <>
                {ingredients.map((ingredient, index) => {
                  return (
                    <div key={index} className="submitForm__ingredients">
                      <Field
                        name={`ingredients[${index}]`}
                        {...rest}
                        required
                      />

                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="submitForm__decrement"
                        >
                          -
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => push(" ")}
                        className="submitForm__increment"
                      >
                        +
                      </button>
                    </div>
                  );
                })}
              </>
            );
          }}
        </FieldArray>
        <ErrorMessage name={name} component={ErrorText} />
      </div>
    </>
  );
};

export default IngredientsList;
