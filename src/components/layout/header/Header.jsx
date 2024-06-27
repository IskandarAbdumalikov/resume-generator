import React, { useState } from "react";
import "./header.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
// import SearchModule from "./searchModule/SearchModule";
import { useGetAllUsersQuery } from "../../../context/userSlice";
import bar from "../../../assets/icons/bar.svg";

const Header = () => {
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [showList, setShowList] = useState(false);
  const { data } = useGetAllUsersQuery({ search: searchValue });
  const isLogin = localStorage.getItem("x-auth-token");

  let handleCloser = () => {
    setSearchValue("");
    setShowList(false);
  };

  if (pathname.includes("admin")) {
    return <></>;
  }
  return (
    <header className="header">
      <nav className="container header__nav">
        <Link className="header__nav__logo" to={"/"}>
          LOGO
        </Link>
        <div
          className={
            showList ? `header__nav__middle show__list` : `header__nav__middle`
          }
        >
          <ul className="header__nav__middle__list">
            <NavLink className="header__nav__list-contact" to={"/contact"}>
              CONTACTS
            </NavLink>
          </ul>
          <div className="header__nav__middle__form">
            <button>
              <CiSearch />
            </button>
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              placeholder="Search"
              type="text"
            />
          </div>
          {/* <div onClick={handleCloser} className="show__list__closer">
            <img width={25} src={x} alt="" />
          </div> */}
        </div>
        <div className="header__nav__btns">
          {isLogin ? (
            <NavLink to={"/admin/create"}>
              <button>ADMIN</button>
            </NavLink>
          ) : (
            <NavLink to={"/login"}>
              <button>LOGIN</button>
            </NavLink>
          )}
          <NavLink to={"/register"}>
            <button>Register</button>
          </NavLink>
          <div
            onClick={() => setShowList((p) => !p)}
            className="header__nav__bar"
          >
            <img src={bar} alt="" />
          </div>
        </div>
      </nav>
      {showList ? (
        <div onClick={handleCloser} className="overlay"></div>
      ) : (
        <></>
      )}
      {/* {searchValue ? (
        <SearchModule
          data={data}
          handleCloser={handleCloser}
          showList={showList}
        />
      ) : (
        <></>
      )} */}
    </header>
  );
};

export default Header;
