import { useRef } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { usePostARecipeMutation } from "../../redux/services/recipeService";
import { useGetMeQuery } from "../../redux/services/authService";
// import { useNavigate } from "react-router-dom";
const SubmitForm = () => {
  const { data } = useGetMeQuery();
  // const navigate = useNavigate();

  const [postARecipe] = usePostARecipeMutation();
  const inputImage = useRef("");
  const [source, setSource] = useState("");
  const [email, setEmail] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  // const [name, setName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [Ingredients, setIngredients] = useState([
    {
      ingredient: "",
    },
  ]);

  const [recipeImage, setRecipeImage] = useState("");

  const [categories, setCategories] = useState("");

  const push = () => {
    let data = {
      ingredient: "",
    };

    setIngredients([...Ingredients, data]);
  };

  const remove = (index) => {
    let data = [...Ingredients];
    data.splice(index, 1);
    setIngredients(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recipeImage) {
      toast.error("Please upload photo", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      throw new Error("Please upload photo");
    }

    // const recipeObject = {
    //   name: recipeName,
    //   description: recipeDescription,
    //   source: source,
    //   email,
    //   ingredients: Ingredients,
    //   category: categories,
    //   image: recipeImage,
    // };

    const formData = new FormData();
    formData.set("name", recipeName);
    formData.set("description", recipeDescription);
    formData.set("source", source);
    formData.set("email", email);
    formData.set("ingredients", Ingredients);
    formData.set("category", categories);
    formData.set("image", recipeImage);

    postARecipe(formData).then((data) => {
      // console.log(data);
      if (data.error) {
        // console.log(
        //   `* ~ file: SubmitForm.jsx:58 ~ postARecipe ~ data.error:`,
        //   data.error
        // );
        // console.log(data.error.data.message);
        toast.error(`Error : Something went wrong Please try again`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        // navigate("/login");
      } else {
        toast.success("recipe is submitted successfully");
        setCategories("");
        setEmail("");
        setIngredients("");
        setRecipeDescription("");
        setRecipeImage("");
        setRecipeName("");
        setSource("");
        setImagePrev("");
        // inputImage.current = "";
        // console.log(data);
        // navigate("/");
      }
    });
  };

  const handleChange = (e, index) => {
    let data = [...Ingredients];

    data[index][e.target.name] = e.target.value;

    setIngredients(data);
  };

  const uploadImage = async (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.set("image", inputImage.current.files[0]);

    const reader = new FileReader();

    reader.readAsDataURL(inputImage.current.files[0]);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setRecipeImage(inputImage.current.files[0]);
    };

    // const response = await fetch(
    //   "http://localhost:5000/api/v1/recipes/upload",
    //   {
    //     method: "POST",
    //     body: formData,
    //   }
    // );

    // const data = await response.json();
    // console.log(`* ~ file: SubmitForm.jsx:65 ~ uploadImage ~ data:`, data);

    // if (data.error) {
    //   // console.log(
    //   //   `* ~ file: SubmitForm.jsx:58 ~ postARecipe ~ data.error:`,
    //   //   data.error
    //   // );
    //   // console.log(data.error.data.message);
    //   toast.error(`Error : Something went wrong Please try again`, {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });

    //   return;
    // }

    // console.log(
    //   `* ~ file: SubmitForm.jsx:53 ~ uploadImage ~ inputImage:`,
    //   inputImage
    // );
    // console.log(
    //   `* ~ file: SubmitForm.jsx:53 ~ uploadImage ~ inputImage.current.files[0]:`,
    //   inputImage.current.files[0]
    // );
  };

  return (
    <>
      {/* <FormikContainer /> */}
      <form
        className="submitForm"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        {imagePrev && (
          <img src={imagePrev} width="64" style={{ objectFit: "contain" }} />
        )}

        <div className="submitForm__control">
          <label htmlFor="recipeImage">Recipe Image</label>
          <input
            required
            type="file"
            name="recipeImage"
            id="recipeImage"
            onChange={(e) => uploadImage(e)}
            // value={recipeImage}
            ref={inputImage}
          />
        </div>

        <div className="submitForm__control">
          <label htmlFor="recipeName">Recipe Name</label>
          <input
            required
            type="text"
            id="recipeName"
            name="recipeName"
            onChange={(e) => setRecipeName(e.target.value)}
            value={recipeName}
          />
        </div>

        <div className="submitForm__control">
          <label htmlFor="recipeDescription">Recipe Description</label>
          <textarea
            name="recipeDescription"
            id="recipeDescription"
            cols="30"
            rows="10"
            onChange={(e) => setRecipeDescription(e.target.value)}
            value={recipeDescription}
          ></textarea>
        </div>

        <div className="submitForm__control">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            id="name"
            // onChange={() => setName(data?.name)}
            value={data?.name}
            disabled
          />
        </div>

        <div className="submitForm__control">
          <label htmlFor="email">email</label>
          <input
            required
            type="email"
            id="email"
            // onChange={() => setEmail(data?.email)}
            value={data?.email}
            disabled
          />
        </div>

        <div className="submitForm__control">
          <label htmlFor="Ingredients">Source :</label>
          <input
            required
            type="text"
            name="source"
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>

        <div className="submitForm__control">
          {/* <label htmlFor="Ingredients">Source :</label>
          <input required
            type="text"
            name="source"
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          /> */}

          {/* <button
            type="button"
            onClick={() => push()}
            className="submitForm__increment"
          >
            +
          </button> */}

          {Ingredients.length > 0 &&
            Ingredients?.map((ingredientItem, index) => {
              return (
                <div key={index} className="submitForm__ingredients">
                  <input
                    required
                    type="text"
                    id="Ingredient"
                    name="ingredient"
                    onChange={(e) => handleChange(e, index)}
                    value={Ingredients.ingredient}
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
                    onClick={() => push()}
                    className="submitForm__increment"
                  >
                    +
                  </button>
                </div>
              );
            })}
        </div>
        <div className="submitForm__control">
          <label htmlFor="categories">
            <select
              name="categories"
              id="categories"
              onChange={(e) => setCategories(e.target.value)}
              value={categories}
            >
              <option value="">select a category</option>
              <option value="Thai">Thai</option>
              <option value="American">American</option>
              <option value="Chinese">Chinese</option>
            </select>
          </label>
        </div>

        <button type="submit" className="btn submitForm__btn">
          Submit Recipe
        </button>
      </form>
      ;
    </>
  );
};

export default SubmitForm;
