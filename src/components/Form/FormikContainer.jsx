/* eslint-disable no-unused-vars */
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { usePostARecipeMutation } from "../../redux/services/recipeService";
import { toast } from "react-toastify";

const FormikContainer = () => {
  const [postRecipe, { isLoading, isError, isSuccess }] =
    usePostARecipeMutation();
  // console.log(
  //   `* ~ file: FormikContainer.jsx:9 ~ FormikContainer ~ data:`,
  //   data
  // );

  const categories = [
    {
      key: "select a category",
      value: "",
    },
    {
      key: "Thai",
      value: "Thai",
    },
    {
      key: "American",
      value: "American",
    },
    {
      key: "Chinese",
      value: "Chinese",
    },
  ];

  const initialValues = {
    email: "",
    recipeName: "",
    recipeDescription: "",
    ingredients: [" "],
    categories: "",
    recipeImage: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("email required"),
    recipeName: Yup.string().required("recipe name required"),
    recipeDescription: Yup.string().required(" recipe description required"),
    categories: Yup.string().required("category required"),
    recipeImage: Yup.string().required("recipe image required"),
    ingredients: Yup.array().required(" ingredients  required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);

    postRecipe(values).then((data) => {
      if (data.error) {
        // console.log(data.error.data.message);
        toast.error(`Error : ${data.error.data.message}`);
        // console.log(data);
      } else {
        // console.log(data);
        toast.success("recipe successfully submitted");
      }
    });

    // onSubmitProps.setSubmitting(false);
    // onSubmitProps.resetForm();
  };

  if (isLoading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="submitForm" encType="multipart/form-data">
          <FormikControl control="input" label="email" name="email" />

          <FormikControl
            control="input"
            label="Recipe Name"
            name="recipeName"
          />
          <FormikControl
            control="textarea"
            label="recipe Description"
            name="recipeDescription"
          />
          <FormikControl
            control="list"
            label="Ingredients"
            name="ingredients"
          />
          <FormikControl
            control="categoryOptions"
            label="Select Category"
            name="categories"
            options={categories}
          />
          <FormikControl
            control="file"
            label="Recipe Image"
            name="recipeImage"
          />

          {isSuccess && <p>Successfully submitted Recipe</p>}
          {isError && <p>{isError.message}</p>}

          <button
            type="submit"
            className="btn submitForm__btn"
            disabled={formik.isSubmitting}
          >
            Submit Recipe
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
