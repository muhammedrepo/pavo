import { logo } from "../assets/images";
import { menuItems } from "../constants/index";
import { MenuItems } from "../components";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="container mx-auto sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
        <a
          className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
          href="/"
        >
          <img src={logo} alt="pato" className="h-8" />
        </a>

        <button
          className="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
        </button>

        <div className="navbar-collapse">
          <ul>
            {menuItems.map((menu, index) => (
              <MenuItems items={menu} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
