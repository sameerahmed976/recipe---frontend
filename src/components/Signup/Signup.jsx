import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../../redux/services/authService";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [register] = useRegisterMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !password || !email || !confirmPassword) {
      toast.error("invalid user data");
    } else if (password !== confirmPassword) {
      toast.error("password does match");
    } else {
      const user = {
        email,
        password,
        name,
      };

      register(user).then((data) => {
        if (data.error) {
          // console.log(data.error.data.message);
          toast.error(`Error : ${data.error.data.message}`);

          // console.log(data);
        } else {
          // console.log(data);
          toast.success("user successfully registered");

          navigate("/login");
        }
      });
    }
  };

  return (
    <>
      <main className="login">
        <section className="login__container signup__container">
          <h2 className="login__heading">Create an Account</h2>
          <Link to="/" className="form__close">
            &times;
          </Link>

          <form className="form" autoComplete="off" onSubmit={handleSubmit}>
            <div className="form__control">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="  "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name">name</label>
            </div>
            <div className="form__control">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="  "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">email</label>
            </div>
            <div className="form__control">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="  "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">password</label>
            </div>
            <div className="form__control">
              <input
                type="password"
                name="confirm__password"
                id="confirm__password"
                placeholder="  "
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label htmlFor="confirm__password">confirm password</label>
            </div>

            <button type="submit" className="btn form__btn">
              Create Account
            </button>

            <Link to="/login" className="form__account">
              Already have a account ?
              <span className="form__link"> Sign in</span>
            </Link>
          </form>
        </section>
      </main>
    </>
  );
};

export default Signup;
