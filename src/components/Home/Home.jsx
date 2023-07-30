const Home = () => {
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

        <section className="section recipes">
          <h2 className="recipes__variety">Recipes Variety</h2>

          <section className="recipes__container">
            <article className="recipes__card">
              <img
                src="/public/thai-food.jpg"
                alt="recipes of Thai"
                className="recipes__image"
              />

              <p className="recipes__title">Thai</p>
            </article>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
