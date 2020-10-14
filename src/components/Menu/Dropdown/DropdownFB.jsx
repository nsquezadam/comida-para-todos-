import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuFoodBank } from "./MenuFoodBank";
import "../../../assets/styles/components/Dropdown.scss";

const DropdownFB= () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menuFB clicked" : "dropdown-menuFB"}
    >
      {MenuFoodBank.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DropdownFB;