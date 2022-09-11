import { socials } from "../constants";
import { Wrapper } from "../assets/wrapper/FooterStyles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div className="container px-4 sm:px-8">
          <h4 className="mb-8 lg:max-w-3xl lg:mx-auto">
            Pavo is a mobile application for marketing automation and you can
            reach the team at{" "}
            <Link
              className="text-indigo-600 hover:text-gray-500"
              to="mailto:email@domain.com"
            >
              email@domain.com
            </Link>
          </h4>
          <div className="social-container">
            {socials.map((social) => {
              const { url, icon } = social;
              return (
                <span className="fa-stack">
                  <Link to={url}>
                    <i className="fas fa-circle fa-stack-2x"></i>
                    {icon}
                  </Link>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
