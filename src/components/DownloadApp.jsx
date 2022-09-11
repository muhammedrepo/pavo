import styled from "styled-components";
import { conclusionSmartphone, conclusionBg } from "../assets";

const Wrapper = styled.section`
  .basic-5 {
    padding-top: 4.5rem;
    padding-bottom: 7.5rem;
    background: url(${conclusionBg}) center center no-repeat;
    background-size: cover;
    text-align: center;
  }
`;
const DownloadApp = () => {
  return (
    <Wrapper>
      <div id="download" className="basic-5">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2">
          <div className="mb-16 lg:mb-0">
            <img src={conclusionSmartphone} alt="alternative" />
          </div>
          <div className="lg:mt-24 xl:mt-44 xl:ml-12">
            <p className="mb-9 text-gray-800 text-3xl leading-10">
              Team management mobile applications don’t get much better than
              Pavo. Download it today
            </p>
            <a className="btn-solid-lg" href="#your-link">
              <i className="fab fa-apple"></i>Download
            </a>
            <a className="btn-solid-lg secondary" href="#your-link">
              <i className="fab fa-google-play"></i>Download
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DownloadApp;
