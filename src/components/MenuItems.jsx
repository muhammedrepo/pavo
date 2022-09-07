import React from "react";
import { Dropdown } from "../components";

const MenuItems = ({ items }) => {
  return (
    <li>
      {items.submenu ? (
        <>
          <a className="nav-link dropdown-toggle" role="button" href="#drop">
            {items.title}
          </a>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <a href={`#${items.id}`}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
