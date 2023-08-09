import { useState } from "react";
import FormikContainer from "./FormikContainer";

const SubmitForm = () => {
  const [image, setImage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image);
  };
  return (
    <>
      <FormikContainer />

      {/* <form
        className="form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="form__control">
          <label htmlFor="image">upload Image</label>
          <input
            type="file"
            name="image"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button type="submit" className="btn submitForm__btn">
          Submit Image
        </button>
      </form> */}
    </>
  );
};

export default SubmitForm;

// <form
//   className="submitForm"
//   encType="multipart/form-data"
//   onSubmit={onSubmit}
// >
//   <div className="submitForm__control">
//     <label htmlFor="email">email</label>
//     <input
//       type="email"
//       id="email"
//       onChange={(e) => setEmail(e.target.value)}
//       value={email}
//     />
//   </div>
//   <div className="submitForm__control">
//     <label htmlFor="recipeName">Recipe Name</label>
//     <input
//       type="text"
//       id="recipeName"
//       name="recipeName"
//       onChange={(e) => setRecipeName(e.target.value)}
//       value={recipeName}
//     />
//   </div>
//   <div className="submitForm__control">
//     <label htmlFor="recipeDescription">Recipe Description</label>
//     <textarea
//       name="recipeDescription"
//       id="recipeDescription"
//       cols="30"
//       rows="10"
//       onChange={(e) => setRecipeDescription(e.target.value)}
//       value={recipeDescription}
//     ></textarea>
//   </div>
//   <div className="submitForm__control">
//     <label htmlFor="Ingredients">Ingredients :</label>
//     {/* <input
//       type="text"
//       name="ingredients"
//       id="ingredients"
//       value={ingredient}
//       onChange={(e) => setIngredient(e.target.value)}
//     />

//     <button
//       type="button"
//       onClick={() => push(" ")}
//       className="submitForm__increment"
//     >
//       +
//     </button> */}

//     {Ingredients?.map((ingredientItem, index) => {
//       return (
//         <div key={index} className="submitForm__ingredients">
//           <input
//             type="text"
//             id="Ingredients"
//             name="ingredients"
//             onChange={(e) => setIngredient(e.target.value)}
//             value={ingredient}
//           />

//           {index > 0 && (
//             <button
//               type="button"
//               onClick={() => remove(index)}
//               className="submitForm__decrement"
//             >
//               -
//             </button>
//           )}

//           <button
//             type="button"
//             onClick={() => push(ingredient)}
//             className="submitForm__increment"
//           >
//             +
//           </button>
//         </div>
//       );
//     })}
//   </div>
//   <div className="submitForm__control">
//     <label htmlFor="categories">
//       <select
//         name="categories"
//         id="categories"
//         onChange={(e) => setCategories(e.target.value)}
//         value={categories}
//       >
//         <option value="">select a category</option>
//         <option value="Thai">Thai</option>
//         <option value="American">American</option>
//         <option value="Chinese">Chinese</option>
//       </select>
//     </label>
//   </div>
//   <div className="submitForm__control">
//     <label htmlFor="recipeImage">Recipe Image</label>
//     <input
//       type="file"
//       name="recipeImage"
//       id="recipeImage"
//       onChange={(e) => setRecipeImage(e.target.value)}
//       value={recipeImage}
//     />
//   </div>

//   <button type="submit" className="btn submitForm__btn">
//     Submit Recipe
//   </button>
// </form>;
