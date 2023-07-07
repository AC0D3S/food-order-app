import React from "react";

import "./Header.css";
import Meals from "../../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className="main-image">
        <img src={Meals} alt="meals" />
      </div>
    </>
  );
};

export default Header;
