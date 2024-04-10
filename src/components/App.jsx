import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "../hooks";

const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Registration"));
const LoginPage = lazy(() => import("../pages/Login"));
const ContactsPage = lazy(() => import("../pages/Contacts"));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
      .unwrap()
      .then(() => toast.success("Login success"))
      .catch(() => toast.error("Enter your login or register please"));
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user, please wait...</b>
  ) : (
    <div className="mainDiv">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                component={<ContactsPage />}
                redirectTo="/register"
              />
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}
