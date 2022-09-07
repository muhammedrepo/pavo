import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <a className="inline-block" href="/">
          <img src={logo} alt="clout zap" className="h-8" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
