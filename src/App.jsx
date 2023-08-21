import "./App.scss";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/Shared/RootLayout";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Contact from "./components/Contact/Contact";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Profile from "./components/Profile/Profile";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import Submit from "./components/Submit/Submit";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="updateProfile"
        element={
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="submit"
        element={
          <ProtectedRoute>
            <Submit />
          </ProtectedRoute>
        }
      />
      <Route path="recipe/:id" element={<SingleProduct />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
