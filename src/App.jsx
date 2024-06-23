import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
