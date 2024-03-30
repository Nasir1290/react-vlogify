import React from "react";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/profile/ProfilePage";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/routes/PrivateRoute";

const App = () => {
  return (
    <Routes>
      
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
