import { headerSmartPhone } from "../assets";

import { Wrapper } from "../assets/wrapper/HeroStyles";

const Hero = () => {
  return (
    <Wrapper id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1-large mb-5">Team management mobile application</h1>
          <p className="p-large mb-8">
            Start getting things done together with your team based on Pavo's
            revolutionary team management features
          </p>
          <a className="btn-solid-lg" href="/">
            <i className="fab fa-apple"></i>Download
          </a>
          <a className="btn-solid-lg secondary" href="/">
            <i className="fab fa-google-play"></i>Download
          </a>
        </div>
        <div className="xl:text-right">
          <img
            className="inline"
            src={headerSmartPhone}
            alt="headerSmartPhone"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
