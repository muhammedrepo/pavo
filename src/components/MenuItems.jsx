import { Dropdown } from "../components";
import styled from "styled-components";
import { Link } from "react-scroll";

import { useEffect, useRef, useState } from "react";

const Wrapper = styled.ul`
  .nav-link {
    display: block;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    color: #6b747b;
    text-decoration: none;
    line-height: 0.875rem;
    transition: all 0.2s ease;
  }

  .dropdown-toggle {
    white-space: nowrap;
  }

  .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }

  .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  @media (min-width: 1024px) {
    .nav-link {
      padding-right: 0.625rem;
      padding-left: 0.625rem;
    }
  }
`;
const MenuItems = ({ items }) => {
  const [active, setActive] = useState("Home");
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <Wrapper>
      <li className={`dropdown `} ref={ref} onMouseEnter={onMouseEnter}>
        {items.submenu ? (
          <>
            <a
              className="nav-link dropdown-toggle"
              role="button"
              href="#drop"
              onClick={() => setDropdown(!dropdown)}
            >
              {items.title}
            </a>
            <Dropdown submenus={items.submenu} dropdown={dropdown} />
          </>
        ) : (
          <Link
            className={`nav-link cursor-pointer ${
              active === items.title ? "active-link" : ""
            }`}
            onClick={closeDropdown}
            to={`${items.id}`}
            spy={true}
            smooth={true}
            duration={1000}
            exact="true"
            offset={-80}
          >
            {items.title}
          </Link>
        )}
      </li>
    </Wrapper>
  );
};

export default MenuItems;
