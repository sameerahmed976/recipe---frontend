/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import { useGetSingleRecipeQuery } from "../../redux/services/recipeService";
// import { useEffect } from "react";
// import { setId } from "../../redux/features/recipeSlice";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const { id } = useParams();

  console.log(`* ~ file: SingleProduct.jsx:7 ~ SingleProduct ~ d:`, id);
  const { data, isLoading, isError, isSuccess } = useGetSingleRecipeQuery(id);
  console.log(`* ~ file: SingleProduct.jsx:8 ~ SingleProduct ~ data:`, data);
  const dispatch = useDispatch();
  // const { product } = data;
  // useEffect(() => {
  //   dispatch(setId(id));
  // }, []);

  if (isLoading) {
    return (
      <main>
        <h1 className="loading">Loading...</h1>
      </main>
    );
  }

  return (
    <>
      <main className="singleProduct">
        <section className="singleProduct__navbar">
          <Link to="/" className="singleProduct__link">
            Home
          </Link>
          /<p className="singleProduct__name">{data?.product?.name}</p>
        </section>

        <section className="singleProduct__container">
          <img
            src={data?.product?.image}
            alt={data?.product?.name}
            className="singleProduct__image"
          />
          <article className="singleProduct__text">
            <h2 className="singleProduct__name">{data?.product?.name}</h2>
            <p className="singleProduct__category">
              <img
                src="/tag.svg"
                alt={`${data?.product?.category} tag`}
                className="singleProduct__tag"
              />
              {data?.product?.category}
            </p>

            <h3 className="singleProduct__title">Cooking Instructions</h3>
            <p className="singleProduct__description">
              {data?.product?.description}
            </p>
            <a
              href={`${data?.product?.source}`}
              className="singleProduct__source"
              target="_blank"
              rel="noreferrer"
            >
              Source : Click here
            </a>

            <h3 className="singleProduct__ingredients">Ingredients</h3>

            <ul className="singleProduct__list">
              {data?.product?.ingredients.map((item, index) => {
                return (
                  <li className="singleProduct__ingredients__list" key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
};

export default SingleProduct;
