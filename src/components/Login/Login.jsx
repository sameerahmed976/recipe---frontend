import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/services/authService";
import { useState } from "react";
import { toast } from "react-toastify";
import { getUser } from "../../redux/features/auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Invalid user data");
    } else {
      const user = {
        email,
        password,
      };
      login(user).then((data) => {
        // console.log(data);
        if (data.error) {
          // console.log(data.error.data.message);
          toast.error(`Error : ${data.error.data.message}`);

          navigate("/login");
        } else {
          dispatch(getUser(data));
          toast.success("login is successfully");
          // console.log(data);
          navigate("/");
        }
      });
    }
  };

  return (
    <>
      <main className="login">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <section className="login__container">
              <h2 className="login__heading">Login to Continue</h2>
              <Link to="/" className="form__close">
                &times;
              </Link>

              <form className="form" onSubmit={handleSubmit} autoComplete="on">
                <div className="form__control">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="  "
                    value={email}
                    autoComplete="on"
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
                    autoComplete="on"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="password">password</label>
                </div>

                <Link to="forgotPassword" className="form__forget">
                  forgot password ?
                </Link>

                <button type="submit" className="btn form__btn">
                  Login
                </button>

                <Link to="/signup" className="form__account">
                  Do not have a account ?
                  <span className="form__link"> Sign up</span>
                </Link>
              </form>
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default Login;
