import { Wrapper } from "../assets/wrapper/DropdownStyles";
const Dropdown = ({ submenus, dropdown }) => {
  return (
    <Wrapper>
      <div className={`dropdown-menu ${dropdown ? "show" : ""}`}>
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
    </Wrapper>
  );
};

export default Dropdown;
