import { recipesVariety } from "../../data/data";
import { useGetAllRecipesQuery } from "../../redux/services/recipeService";

const Home = () => {
  const { data, error, isLoading } = useGetAllRecipesQuery();
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
        <section className="section recipes">
          <h2 className="recipes__variety">Recipes Variety</h2>

          <section className="recipes__container">
            {recipesVariety.map((item, index) => {
              return (
                <article className="recipes__card" key={index}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="recipes__image"
                  />

                  <p className="recipes__title">{item.title}</p>
                </article>
              );
            })}
          </section>
        </section>

        {/* Latest  recipes */}
        <section className="section recipes">
          <h2 className="recipes__variety">Latest Recipes</h2>

          <section className="recipes__container">
            {data.food.latest.map((item, index) => {
              return (
                <article className="recipes__card" key={index}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="recipes__image"
                  />

                  <p className="recipes__title">{item.name}</p>
                </article>
              );
            })}
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
