/* eslint-disable react/prop-types */
// import ImageInput from "./ImageInput";
import IngredientsList from "./IngredientsList";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";

const FormikControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "list":
      return <IngredientsList {...rest} />;
    case "categoryOptions":
      return <Select {...rest} />;
    // case "file":
    //   return <ImageInput {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
