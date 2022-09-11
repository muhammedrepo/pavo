import { logo } from "../assets";
import { Link } from "react-scroll";
const Logo = () => {
  return (
    <Link
      className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline cursor-pointer"
      to="home"
      spy={true}
      smooth={true}
      duration={1000}
      exact="true"
      offset={-80}
    >
      <img src={logo} alt="pato" className="h-8" />
    </Link>
  );
};

export default Logo;
