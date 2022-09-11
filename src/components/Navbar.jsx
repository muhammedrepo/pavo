import { menuItems } from "../constants/index";
import { MenuItems, Logo } from "../components";
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

import { Wrapper } from "../assets/wrapper/NavbarStyles";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [topBarScroll, setTopBarScroll] = useState(false);

  const animateTopBar = () => {
    if (window.scrollY > 60) {
      setTopBarScroll(true);
    } else {
      setTopBarScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animateTopBar);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Wrapper>
      <nav
        className={`navbar fixed-top ${
          topBarScroll ? "fixed-top top-nav-collapse" : "fixed-top"
        }`}
      >
        <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
          <Logo topBarScroll={topBarScroll} onClick={toggleHome} />

          <button
            className="background-transparent"
            type="button"
            data-toggle="offcanvas"
            onClick={() => setToggle(!toggle)}
          >
            <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
          </button>

          <div
            className={`navbar-collapse offcanvas-collapse  lg:flex lg:flex-grow lg:items-center ${
              !toggle ? "" : "open"
            }`}
          >
            <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
              {menuItems.map((menu, index) => (
                <MenuItems items={menu} key={index} />
              ))}
            </ul>
            <span className="block lg:ml-3.5">
              <Link
                className="no-underline"
                to="download"
                spy={true}
                smooth={true}
                duration={1000}
                exact="true"
                offset={-80}
              >
                <i className="fab fa-apple"></i>
              </Link>
              <Link
                className="no-underline"
                to="download"
                spy={true}
                smooth={true}
                duration={1000}
                exact="true"
                offset={-80}
              >
                <i className="fab fa-android"></i>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
