import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Auth from "./pages/auth/Auth";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Admin from "./pages/admin/Admin";
import SinglePage from "./pages/singlePage/SinglePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users/:userId" element={<SinglePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
