import React, { Fragment } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
