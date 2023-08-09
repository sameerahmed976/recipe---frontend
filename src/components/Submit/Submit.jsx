import SubmitForm from "../Form/SubmitForm";

const Submit = () => {
  return (
    <>
      <main className="submit">
        <h2 className="submit__title">Submit Your Recipe</h2>
        <p className="submit__subTitle">
          Share your amazing recipes with thousands of peoples across the world.
          Fill out form to get started.
        </p>

        <section className="submit__form">
          <SubmitForm />
        </section>
      </main>
    </>
  );
};

export default Submit;
