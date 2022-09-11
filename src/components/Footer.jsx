import { socials } from "../constants";
import { Wrapper } from "../assets/wrapper/FooterStyles";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div className="container px-4 sm:px-8">
          <h4 className="mb-8 lg:max-w-3xl lg:mx-auto">
            Pavo is a mobile application for marketing automation and you can
            reach the team at{" "}
            <a
              className="text-indigo-600 hover:text-gray-500"
              href="mailto:email@domain.com"
            >
              email@domain.com
            </a>
          </h4>
          <div className="social-container">
            {socials.map((social) => {
              const { url, icon } = social;
              return (
                <span className="fa-stack">
                  <a href={url}>
                    <i className="fas fa-circle fa-stack-2x"></i>
                    {icon}
                  </a>
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
