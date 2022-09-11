import { Link } from "react-router-dom";
import { Wrapper } from "../assets/wrapper/DropdownStyles";
const Dropdown = ({ submenus, dropdown }) => {
  return (
    <Wrapper>
      <div className={`dropdown-menu ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <>
            <Link
              key={index}
              className="dropdown-item page-scroll"
              to={submenu.url}
            >
              {submenu.title}
            </Link>
            <div className="dropdown-divider"></div>
          </>
        ))}
      </div>
    </Wrapper>
  );
};

export default Dropdown;
