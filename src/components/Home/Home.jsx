import { Link } from "react-router-dom";
import { useGetAllRecipesQuery } from "../../redux/services/recipeService";

const Home = () => {
  const { data, isLoading } = useGetAllRecipesQuery();
  console.log(data);
  // const { category, food, randomRecipes } = data;

  if (isLoading) {
    return (
      <main>
        <h1 className="loading">Loading...</h1>
      </main>
    );
  }

  return (
    <>
      <main className="home">
        <section className=" section hero">
          <section className="hero__container">
            <h2 className="hero__title">
              Huge Selection of delicious recipes ideas
            </h2>
            <p className="hero__subTitle">
              Explore our huge selection of delicious recipes ideas including
              :easy deserts,delicious vegan and vegetarian dinner ideas,
              gorgeous pasta recipes,quick bakes, family-friendly meals and
              gluten-free recipes.
            </p>

            <section className="hero__groupButtons">
              <button className="btn   hero__btn hero__btn--highlight   ">
                Explore Latest
              </button>
              <button className="btn hero__btn  ">Show Random</button>
            </section>
          </section>

          <section className="hero__image">
            <img src="/hero.svg" alt="hero" className="hero__image" />
          </section>
        </section>

        {/* recipes */}
        {/* <section className="section recipes">
          <h2 className="recipes__variety">Recipes Variety</h2>

          <section className="recipes__container">
            {data.categories.map((item, index) => {
              return (
                <article className="recipes__card" key={index}>
                  <Link to={`recipe/${item._id}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="recipes__image"
                    />

                    <p className="recipes__title">{item.name}</p>
                  </Link>
                </article>
              );
            })}
          </section>
        </section> */}

        {/* Latest  recipes */}
        <section className="section recipes">
          <h2 className="recipes__variety">Latest Recipes</h2>

          <section className="recipes__container">
            {data?.food?.latest.map((item, index) => {
              return (
                <article className="recipes__card" key={index}>
                  <Link to={`recipe/${item._id}`} className="recipes__link">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="recipes__image"
                    />

                    <p className="recipes__title">{item.name}</p>
                  </Link>
                </article>
              );
            })}
          </section>
        </section>

        {/* Thai  recipes */}
        <section className="section recipes">
          <h2 className="recipes__variety">Thai Recipes</h2>

          <section className="recipes__container">
            {data?.food?.thai.map((item, index) => {
              return (
                <article className="recipes__card" key={index}>
                  <Link to={`recipe/${item._id}`} className="recipes__link">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="recipes__image"
                    />

                    <p className="recipes__title">{item.name}</p>
                  </Link>
                </article>
              );
            })}
          </section>
        </section>

        {/* American  recipes */}
        <section className="section recipes">
          <h2 className="recipes__variety">American Recipes</h2>

          <section className="recipes__container">
            {data?.food?.american.map((item, index) => {
              return (
                <article className="recipes__card" key={index}>
                  <Link to={`recipe/${item._id}`} className="recipes__link">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="recipes__image"
                    />

                    <p className="recipes__title">{item.name}</p>
                  </Link>
                </article>
              );
            })}
          </section>
        </section>

        {/* chinese  recipes */}
        <section className="section recipes">
          <h2 className="recipes__variety">Chinese Recipes</h2>

          <section className="recipes__container">
            {data?.food?.chinese.map((item, index) => {
              return (
                <article className="recipes__card" key={index}>
                  <Link to={`recipe/${item._id}`} className="recipes__link">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="recipes__image"
                    />

                    <p className="recipes__title">{item.name}</p>
                  </Link>
                </article>
              );
            })}
          </section>
        </section>
        {/* public recipes */}
        <section className="section recipes">
          <img
            src="/publish-recipe.png"
            alt="public recipe"
            className="public__recipe"
          />
          <h2 className="public__title">Publish your Recipe for FREE today</h2>
          <p className="public__subTitle">
            Publish your recipe in front of thousand of people for free .
          </p>
          <Link to="/submit" className="btn public__btn">
            Submit Recipe
          </Link>
        </section>
      </main>

      <footer className="footer">
        <section className="footer__container">
          <p className="footer__text">
            &copy; {new Date().getFullYear()} of Recipe Treats. All rights
            reversed by us. Designed by
            <a
              href="https://portfolio-sameer.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__name"
            >
              sameer
            </a>
          </p>
        </section>
      </footer>
    </>
  );
};

export default Home;
