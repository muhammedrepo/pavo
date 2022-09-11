import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  .copyright {
    padding-top: 1.5rem;
    background-color: #c5eaf9;
    text-align: center;
  }

  @media (min-width: 1024px) {
    .copyright {
      text-align: left;
    }

    .copyright .list-unstyled li {
      display: inline-block;
      margin-right: 1rem;
    }

    .copyright .statement {
      text-align: right;
    }
  }
`;
const Copyright = () => {
  return (
    <Wrapper>
      <div className="copyright">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-3">
          <ul className="mb-4 list-unstyled p-small">
            <li className="mb-2">
              <a href="article.html">Article Details</a>
            </li>
            <li className="mb-2">
              <a href="terms.html">Terms & Conditions</a>
            </li>
            <li className="mb-2">
              <a href="privacy.html">Privacy Policy</a>
            </li>
          </ul>
          <p className="pb-2 p-small statement">
            Copyright ©{" "}
            <a href="#your-link" className="no-underline">
              Your name
            </a>
          </p>

          <p className="pb-2 p-small statement">
            Distributed by{" "}
            <a href="https://coolzyte.com" className="no-underline">
              Muhats
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Copyright;
