/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import { useGetSingleRecipeQuery } from "../../redux/services/recipeService";
import { useEffect } from "react";
import { setId } from "../../redux/features/recipeSlice";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const { id } = useParams();

  console.log(`* ~ file: SingleProduct.jsx:7 ~ SingleProduct ~ d:`, id);
  const { data, isLoading, isError, isSuccess } = useGetSingleRecipeQuery(id);
  console.log(`* ~ file: SingleProduct.jsx:8 ~ SingleProduct ~ data:`, data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setId(id));
  }, []);

  return (
    <>
      <main className="singleProduct">
        <section className="singleProduct__navbar">
          <Link to="/" className="singleProduct__link">
            Home
          </Link>
          /<p>Recipe</p>
        </section>

        <section className="singleProduct__container">
          <img src="" alt="" className="singleProduct__image" />
          <article className="singleProduct__text">
            <h2 className="singleProduct__name">Recipe Name</h2>
            <p className="singleProduct__category">Recipe Name</p>

            <p className="singleProduct__description">Recipe</p>
            <h3 className="singleProduct__ingredients">Ingredients</h3>
            <p className="singleProduct__ingredients__list">Ingredients</p>
          </article>
        </section>
      </main>
    </>
  );
};

export default SingleProduct;
