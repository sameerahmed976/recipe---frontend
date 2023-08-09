import { useState } from "react";
import { useUpdateUserMutation } from "../../redux/services/authService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser } from "../../redux/features/auth";
import { useDispatch } from "react-redux";

const UpdateProfile = () => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const handleUpdate = (e) => {
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

      updateUser(user).then((data) => {
        if (data.error) {
          // console.log(data.error.data.message);
          toast.error(`Error : ${data.error.data.message}`);

          // console.log(data);
        } else {
          // console.log(data);
          dispatch(getUser(data));
          console.log(data);
          toast.success("user data updated successfully ");
          setEmail("");
          setName("");
          setPassword("");
          setConfirmPassword("");
        }
      });
    }
  };

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  return (
    <>
      <main className="login">
        <section className="login__container signup__container">
          <h2 className="login__heading update__heading">
            Update Profile Details
          </h2>
          <Link to="/" className="form__close">
            &times;
          </Link>

          <form className="form" autoComplete="off" onSubmit={handleUpdate}>
            <div className="form__control">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="  "
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name" className="label">
                name
              </label>
            </div>
            <div className="form__control">
              <input
                className="input"
                type="text"
                name="email"
                id="email"
                placeholder="  "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className="label">
                email
              </label>
            </div>
            <div className="form__control">
              <input
                type="password"
                name="password"
                id="password"
                className="input"
                placeholder="  "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password" className="label">
                password
              </label>
            </div>
            <div className="form__control">
              <input
                type="password"
                name="confirm__password"
                id="confirm__password"
                placeholder="  "
                className="input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label htmlFor="confirm__password" className="label">
                confirm password
              </label>
            </div>

            <button type="submit" className="btn form__btn">
              Update Profile
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default UpdateProfile;
