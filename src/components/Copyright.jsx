import React from "react";
import { Link } from "react-router-dom";
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
              <Link to="/article">Article Details</Link>
            </li>
            <li className="mb-2">
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li className="mb-2">
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
          <p className="pb-2 p-small statement">
            Copyright ©{" "}
            <Link to="#your-link" className="no-underline cursor-pointer">
              Your name
            </Link>
          </p>

          <p className="pb-2 p-small statement">
            Distributed by{" "}
            <Link
              to="https://coolzyte.com"
              className="cursor-pointer no-underline"
            >
              Muhats
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Copyright;
