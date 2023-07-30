import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getLogout } from "../../redux/features/auth";
import { useLogoutMutation } from "../../redux/services/authService";
import { useDispatch, useSelector } from "react-redux";

const RootLayout = () => {
  const [close, setClose] = useState(false);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = () => {
    setClose(false);
  };
  const handleOpen = () => {
    setClose(true);
  };

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    logout().then(() => {
      dispatch(getLogout(""));
      toast.success("log  out  successfully");
      navigate("/login");
    });
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar__center">
            <h1>
              <Link to="/" className="logo">
                Recipe Treats
              </Link>
            </h1>
            <div className="navbar__bars" onClick={handleOpen}>
              <FaBars />
            </div>
          </div>

          <div className={close ? "overlay" : "overlay__close"}>
            <Link to="/" className="navbar__close" onClick={handleClose}>
              &times;
            </Link>

            <ul className="navbar__links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "link")}
                  onClick={handleClose}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) => (isActive ? "active" : "link")}
                  onClick={handleClose}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="submit"
                  className={({ isActive }) => (isActive ? "active" : "link")}
                  onClick={handleClose}
                >
                  Submit
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) => (isActive ? "active" : "link")}
                  onClick={handleClose}
                >
                  Contact
                </NavLink>
              </li>
              {user && isLoggedIn ? (
                <>
                  <li className="dropdown" onClick={handleMenu}>
                    <div className="icon">
                      <FaUser />
                    </div>
                  </li>
                  <ul
                    className={
                      menuOpen
                        ? "navbar__subMenu navbar__subMenu__open"
                        : "navbar__subMenu "
                    }
                  >
                    <li>
                      <NavLink
                        to="profile"
                        className={({ isActive }) =>
                          isActive ? "active" : "link"
                        }
                        onClick={() => {
                          handleClose();
                          handleMenu();
                        }}
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="updateProfile"
                        className={({ isActive }) =>
                          isActive ? "active" : "link"
                        }
                        onClick={() => {
                          handleClose();
                          handleMenu();
                        }}
                      >
                        Update Profile
                      </NavLink>
                    </li>
                  </ul>

                  <li>
                    <NavLink
                      to="signup"
                      className={({ isActive }) =>
                        isActive ? "active" : "link"
                      }
                      onClick={handleLogout}
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="login"
                      className={({ isActive }) =>
                        isActive ? "active" : "link"
                      }
                      onClick={handleClose}
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="signup"
                      className={({ isActive }) =>
                        isActive ? "active" : "link"
                      }
                      onClick={handleClose}
                    >
                      Signup
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
        <ToastContainer />
      </header>

      <Outlet />
    </>
  );
};

export default RootLayout;
