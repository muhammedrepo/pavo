import React from "react";

const Dropdown = ({ submenus }) => {
  return (
    <div className="dropdown-menu" aria-labelledby="dropdown01">
      {submenus.map((submenu, index) => (
        <>
          <a
            key={index}
            className="dropdown-item page-scroll"
            href={submenu.url}
          >
            {submenu.title}
          </a>
          <div className="dropdown-divider"></div>
        </>
      ))}
    </div>
  );
};

export default Dropdown;
